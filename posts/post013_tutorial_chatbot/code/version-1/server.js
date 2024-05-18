import path from 'path';
import express from 'express';
import OpenAI from 'openai';
import { toFile } from 'openai/uploads';

/* The main settings of the application */
const Settings = {
    /* The port to run on */
    Port: 3000,

    /* The system message or how the AI should be */
    AISystemContent: "You are a helpful assistant. Answer to only questions related to selling and renting real estates.",

    /* The extension of the audio content received from client. Must match with the codecs used on the client side */
    ClientAudioExtension: 'webm',

    /* The client audio language. It helps the model, but can be `undefined` to support multi-language audios from the users */
    ClientAudioLanguage: 'en',

    /* The STT model */
    STTModel: 'whisper-1',

    /* The TTS model */
    TTSModel: 'tts-1',

    /* The TTS voice model. Read more https://platform.openai.com/docs/guides/text-to-speech/voice-options */
    TTSVoice: 'shimmer',

    /* The TTS response format. Read more https://platform.openai.com/docs/guides/text-to-speech/supported-output-formats */
    TTSFormat: `mp3`,

    /* The ChatGPT model to use */
    ChatGPTModel: 'gpt-3.5-turbo',

    /* If to create an audio for each answer to be played for the user */
    CreateAudioOfAnswer: true,

    /* The welcome message displayed on the client side */
    WelcomeMessage: "Hello. How can I help you today?",
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
        file: await toFile(Buffer.from(audio, 'base64'), `audio.${Settings.ClientAudioExtension}`),
        model: Settings.STTModel,
        language: Settings.ClientAudioLanguage, // this is optional but helps the model
    });

    return transcription.text;
}

/**
 * Convert text to speech.
 * @async
 * 
 * @param {OpenAI} openai the OpenAI instance
 * @param {String} input the string to transform to audio
 * @returns {String} the base64 encoded audio
 */
async function tts(openai, input) {
    // Documentation https://platform.openai.com/docs/api-reference/audio/createSpeech
    const mp3 = await openai.audio.speech.create({
        model: Settings.TTSModel,
        voice: Settings.TTSVoice,
        input,
        response_format: Settings.TTSFormat
    });

    return Buffer.from(await mp3.arrayBuffer()).toString('base64');
}

/**
 * Get the next message in the conversation
 * @async
 * 
 * @param {OpenAI} openai the OpenAI instance
 * @param {String[]} messages the messages in the OpenAI format
 * @returns {String} the response from ChatGPT
 */
async function getAnswer(openai, messages) {
    // Documentation https://platform.openai.com/docs/api-reference/chat/create
    const completion = await openai.chat.completions.create({
        messages,
        model: Settings.ChatGPTModel,
    });

    return completion.choices[0].message.content;
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
    app.use('/static', express.static('public'));

    app.get('/', (_req, res) => {
        res.sendFile(path.join(import.meta.dirname, '..', 'public', 'index.html'));
    });

    app.get('/script.js', (_req, res) => {
        res.sendFile(path.join(import.meta.dirname, 'client.js'));
    });

    app.post('/api/message', async (req, res) => {
        if (!req.body.message && !req.body.audio) {
            res.status(400).send('Missing "message" or "audio"');
        }

        if (req.body.message && req.body.audio) {
            res.status(400).send('Cannot be both "message" and "audio"');
        }

        if (!req.body.id) {
            res.status(400).send('Missing "id"');
        }

        const messages = getChatMessages(chatHistory, req.body.id);
        
        if (req.body.message) {
            messages.push({ role: "user", content: req.body.message });
        } else {
            let content;
            try {
                content = await stt(openai, req.body.audio);
            } catch (error) {
                console.error(`(ChatID: ${req.body.id}) Error when trying to convert the user's audio to text:`);
                console.error(error);
                res.status(500).end();
                return;
            }

            messages.push({ role: "user", content });
        }

        let answer;
        try {
            answer = await getAnswer(openai, messages);
        } catch (error) {
            console.error(`(ChatID: ${req.body.id}) Error when trying to get an answer from ChatGPT:`);
            console.error(error);
            res.status(500).end();
            return;
        }

        let audio;
        if (Settings.CreateAudioOfAnswer) {
            try {
                audio = await tts(openai, answer);
            } catch (error) {
                console.error(`(ChatID: ${req.body.id}) Error when trying to convert the ChatGPT's answer to audio:`);
                console.error(error);
                res.status(500).end();
                return;
            }
        }

        messages.push({ role: "assistant", content: answer });

        res.json({ answer, audio });
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