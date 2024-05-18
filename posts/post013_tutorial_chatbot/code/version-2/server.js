import path from 'path';
import express from 'express';
import OpenAI from 'openai';
import { toFile } from 'openai/uploads';
import { WebSocketServer } from 'ws';

/* The main settings of the application */
const Settings = {
    /* The port to run on */
    Port: 3001,

    /* The port to start the WebSocket server */
    WSPort: 3002,

    /* The system message or how the AI should be */
    AISystemContent: 'You are a helpful assistant. Answer to only questions related to selling and renting real estates.',

    /* The extension of the audio content received from client. Must match with the codecs used on the client side */
    ClientAudioExtension: 'webm',

    /* The client audio language. It helps the model, but can be `undefined` to support multi-language audios from the users */
    ClientAudioLanguage: 'en',

    /* The STT model */
    STTModel: 'whisper-1',

    /* The ChatGPT model to use */
    ChatGPTModel: 'gpt-3.5-turbo',

    /* The welcome message displayed on the client side */
    WelcomeMessage: 'Hello. How can I help you today?',
}

/* The possible IDs of the messages received from the client */
const ClientMessageID = {
    SetClientID: 0x01,
    UserTextMessage: 0x02,
    UserAudioChunk: 0x03,
    UserAudioEnd: 0x04
};

/* The possible IDs of the messages sent to the client */
const ServerMessageID = {
    OK: 0x01,
    Error: 0x99,
    TextChunk: 0x11,
    TextEnd: 0x12
}

/**
 * Convert speech to text using OpenAI.
 * @async
 * 
 * @param {OpenAI} openai the OpenAI instance
 * @param {String} audio the base64 encoded audio
 * @returns {Promise<String>} the text
 */
async function stt(openai, audio) {
    // Documentation https://platform.openai.com/docs/api-reference/audio/createTranscription
    const transcription = await openai.audio.transcriptions.create({
        file: await toFile(audio, `audio.${Settings.ClientAudioExtension}`),
        model: Settings.STTModel,
        language: Settings.ClientAudioLanguage, // this is optional but helps the model
    });

    return transcription.text;
}

/**
 * Get the next message in the conversation
 * @async
 * 
 * @param {OpenAI} openai the OpenAI instance
 * @param {String[]} messages the messages in the OpenAI format
 * @returns {String} the response from ChatGPT
 */
async function getAnswer(openai, messages, clientWS) {
    // Documentation https://platform.openai.com/docs/api-reference/chat/create
    const stream = await openai.chat.completions.create({
        model: Settings.ChatGPTModel,
        messages,
        stream: true,
    });

    for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (!content) continue;

        clientWS.send(Buffer.from([ServerMessageID.TextChunk, ...Buffer.from(content || "")]));
    }

    clientWS.send(Buffer.from([ServerMessageID.TextEnd]));
}

/**
 * Get the chat history, or create a new one or the given ID.
 * 
 * @param {Object} chatHistory the global chat history object containing all the chats
 * @param {String} id the ID of the chat to retrieve
 * @returns {Object} the chat history for the given `id`
 */
function getChatMessages(chatHistory, id) {
    if (!chatHistory[id]) {
        chatHistory[id] = [
            { role: "system", content: Settings.AISystemContent },
            { role: "assistant", content: Settings.WelcomeMessage }
        ];
    }

    return chatHistory[id];
}

/**
 * The entry function
 */
async function run() {
    const chatHistory = {};

    const openai = new OpenAI();

    const app = express();
    app.use(express.json({limit: '25mb'}));
    app.use('/static', express.static(path.join(import.meta.dirname, '..', 'public')));

    app.get('/', (_req, res) => {
        res.sendFile(path.join(import.meta.dirname, '..', 'public', 'index.html'));
    });

    app.get('/script.js', (_req, res) => {
        res.sendFile(path.join(import.meta.dirname, 'client.js'));
    });

    const webSocketServer = new WebSocketServer({ port: Settings.WSPort });

    webSocketServer.on('connection', function connection(clientWS) {
        // Array to keep all the audio chunks until the user is done talking
        clientWS.audioChunks = [];

        clientWS.on('error', console.error);
      
        clientWS.on('message', async (data, isBinary) => {
            // If the message is non-binary then reject it.
            // If the user did not already set the chatID then we close the socket.
            if (!isBinary) {
                const errorMsg = 'Only binary messages are supported.';
                clientWS.send(Buffer.from([ServerMessageID.Error, errorMsg]));
                console.error(`(ChatID: ${clientWS.chatID}) Non-binary message received.`);

                if (!clientWS.chatID) {
                    clientWS.close(1003, errorMsg);
                }

                return;
            }

            const messageType = data[0];
            const payload = data.slice(1);

            if (!clientWS.chatID && messageType !== ClientMessageID.SetClientID) {
                clientWS.send(Buffer.from('Error! Please send first your ID'));
            } else if (messageType === ClientMessageID.SetClientID) {
                const id = payload.toString('utf8');

                if (typeof id === 'string' && id.trim() !== '') {
                    clientWS.chatID = id;
                    clientWS.send(Buffer.from([ServerMessageID.OK]));
                } else {
                    clientWS.send(Buffer.from([ServerMessageID.Error, ...Buffer.from('Error! Invalid ID. Please send a valid string ID.')]));
                }
            } else if (messageType === ClientMessageID.UserTextMessage || messageType === ClientMessageID.UserAudioEnd) {
                const messages = getChatMessages(chatHistory, clientWS.chatID);

                let messageContent;
                if (messageType === ClientMessageID.UserTextMessage) {
                    messageContent = payload.toString('utf8');
                } else if (messageType === ClientMessageID.UserAudioEnd) {
                    // When the client send the `ClientMessageID.UserAudioEnd` message type it means it clicked the STOP button
                    
                    // Concat all the buffers into a single one
                    const buffer = Buffer.concat(clientWS.audioChunks);

                    // Reset the chunks array
                    clientWS.audioChunks = [];

                    // Send audio to OpenAI to perform the speech-to-text
                    messageContent = await stt(openai, buffer);
                }

                messages.push({ role: "user", content: messageContent });

                try {
                    await getAnswer(openai, messages, clientWS);
                } catch (error) {
                    console.error(`(ChatID: ${clientWS.chatID}) Error when trying to get an answer from ChatGPT:`);
                    console.error(error);
                    clientWS.send(Buffer.from([ServerMessageID.Error, ...Buffer.from('Error!')]));
                    return;
                }
            } else if (messageType === ClientMessageID.UserAudioChunk) {
                clientWS.audioChunks.push(payload);
            }
        });
    });

    app.listen(Settings.Port, (error) => {
        if (error) {
            console.error('Error starting the HTTP server');
            console.error(error);
            process.exit(1);
        }

        console.log(`Started on port ${Settings.Port}`);
    });
}

run();