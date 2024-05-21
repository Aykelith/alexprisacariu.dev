/* The main settings of the application */
const Settings = {
    ClientAudioMimeType: 'audio/webm;codecs=opus',
    ServerAudioMimeType: 'audio/mp3',
    WelcomeMessage: "Hello. How can I help you today?",
    DefaultTypingSpeed: 40,
    UseWriteEffect: true,
    WSAddress: 'ws://localhost:3002'
};

const MessageType = {
    Bot: 'bot',
    User: 'user',
    UserAudio: 'user-audio'
}

let messageHistory = [];

/* The possible IDs of the messages sent to the server */
const ClientMessageID = {
    SetClientID: 0x01,
    UserTextMessage: 0x02,
    UserAudioChunk: 0x03,
    UserAudioEnd: 0x04
};

/* The possible IDs of the messages received from the server */
const ServerMessageID = {
    OK: 0x01,
    Error: 0x99,
    TextChunk: 0x11,
    TextEnd: 0x12
}

/**
 * Sleep for the given amount of ms.
 * @async
 * 
 * @param {Number} ms how much to sleep for
 * @returns {Promise} the promise
 */
const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Create a random ID of given length.
 * Taken from https://stackoverflow.com/a/1349426
 * 
 * @param {Number} length the length of the generated ID
 * @returns {String} the generated ID
 */
function makeID(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

/**
 * Record the user and send the chunks to the server and on end wait for all the chunks to be sent.
 * @async
 * 
 * @param {WebSocket} ws the WebSocket
 * @param {HTMLElement} stopRecordButtonElement the stop button element
 * @returns {Promise}
 */
async function recordUserAudio(ws, stopRecordButtonElement) {
    let stream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
        console.error(`The following getUserMedia error occurred: ${error}`);
        return;
    }

    const mediaRecorder = new MediaRecorder(stream, { mimeType: Settings.ClientAudioMimeType });

    return new Promise((resolve, _reject) => {
        const onStopClick = () => {
            mediaRecorder.stop();
            stopRecordButtonElement.classList.remove('show');
        };

        // Create an array to store the promises of the sent audio chunks so we can make sure that
        // when the user hit the stop button all the audio chunks are sent
        const sentAudioChunksPromises = [];

        mediaRecorder.addEventListener('dataavailable', (event) => {
            sentAudioChunksPromises.push(ws.sendAudioChunk(event.data));
        });

        mediaRecorder.addEventListener('stop', async (_event) => {
            await Promise.all(sentAudioChunksPromises);

            // Stop the audio listening
            stream.getAudioTracks().forEach((track) => {
                track.stop()
                stream.removeTrack(track);
            });

            resolve();
        });

        stopRecordButtonElement.classList.add('show');

        // The parameter of `start` is called `timeslice` and define how often, in milliseconds,
        // to fire the `dataavailable` event with the audio chunk
        mediaRecorder.start(1000);

        stopRecordButtonElement.addEventListener('click', onStopClick);
    })
}

/**
 * Create a message HTML element and add it to the chat.
 * 
 * @param {MessageType} type the type of the message
 * @param {String} [content] the content the message to have
 * @returns {HTMLDivElement} the HTML element representing the message
 */
function createMessageHTMLElement(type, content) {
    const newMsg = document.createElement('div');
    newMsg.classList.add('message');

    if (type === MessageType.User) {
        newMsg.classList.add('user');
    } else if (type === MessageType.UserAudio) {
        newMsg.classList.add('user', 'audio');
    } else {
        newMsg.classList.add(MessageType.Bot);
    }

    if (content) newMsg.innerHTML = content;

    const msgsCnt = document.getElementById('friendly-bot-container-msgs');
    msgsCnt.appendChild(newMsg);

    return newMsg;
}

/**
 * Add content to a given message. It will write it using the "written effect"
 * if the option is selected.
 * @async
 * 
 * @param {HTMLDivElement} msgElement the message HTML element
 * @param {String} content the content to write to the message
 */
async function addContentToMessage(msgElement, content) {
    if (Settings.UseWriteEffect) {
        for (let i=0, length=content.length; i < length; i += 1) {
            msgElement.innerHTML += content.charAt(i);
            await sleep(Settings.DefaultTypingSpeed);
        }
    } else {
        msgElement.innerHTML += content;
    }
}

/**
 * Add bot message in chunks. The functions returns another function that when called with
 * the argument will add that argument to the bot message.
 * 
 * @returns {Function} the function accept a parameter `content`; when called the `content` is added to the message
 */
function addBotMessageInChunks() {
    const newMsg = createMessageHTMLElement(MessageType.Bot);

    let nextContentIndex = 0;
    let currentContentIndex = 0;
    let currentContentPromise;

    const onNewMessageContent = async (content) => {
        const thisContentIndex = nextContentIndex;
        nextContentIndex += 1;

        while (thisContentIndex !== currentContentIndex) {
            await currentContentPromise;
        }

        currentContentPromise = new Promise(async resolve => {
            await addContentToMessage(newMsg, content);

            currentContentIndex += 1;
            resolve();
        });
    }

    return onNewMessageContent;
}

/**
 * Add bot message.
 * @async
 * 
 * @param {String} content the message's content
 */
async function addBotMessage(content) {
    const newMsg = createMessageHTMLElement(MessageType.Bot);
    await addContentToMessage(newMsg, content);
}

/**
 * Add a new message to the chat.
 * @async
 * 
 * @param {WebSocket} ws the WebSocket
 * @param {MessageType} type the type of message
 * @param {String|Audio} message the data of the message
 * @returns {Promise} the promise resolved when all is done
 */
async function addUserMessage(ws, type, message) {
    createMessageHTMLElement(type, type === MessageType.User ? message : 'Audio message');

    // Keeping own history log
    if (type === MessageType.User) {
        messageHistory.push({ role: type === MessageType.User ? 'user' : 'assistant', content: message });
    }
        
    if (type === MessageType.User) {
        await ws.sendTextMessage(message, addBotMessageInChunks());
    } else {
        await ws.sendAudioEnd(addBotMessageInChunks());
    }
}

/**
 * Write the initial welcome message to the user.
 * @async
 * 
 * @returns {Promise} the promise that is resolved when the welcome writing is done
 */
async function writeWelcomeMessage() {
    return addBotMessage(Settings.WelcomeMessage);
}

let isChatVisible = false;
let isFirstTime = true;
const ChatID = makeID(10);

const chatButtonElement = document.getElementById('friendly-bot-button');
const inputSpeechElement = document.getElementById('friendly-bot-container-input-speech');
const inputTextElement = document.getElementById('friendly-bot-container-input-txt');

const subscriptionsToWSMessages = [];

const ws = new WebSocket(Settings.WSAddress);

// When the connection to the server is made send the chat ID
ws.addEventListener('open', () => {
    const idMessage = new Uint8Array([ClientMessageID.SetClientID, ...new TextEncoder().encode(ChatID)]);
    ws.send(idMessage);
});

ws.addEventListener('message', async (event) => {
    const data = new Uint8Array(await event.data.arrayBuffer());
    const messageType = data[0];

    // Because we know all the possible messages are all strings we can convert all the payloads to string
    const content = new TextDecoder().decode(data.slice(1));

    if (!ws.allGood && messageType !== ServerMessageID.OK) {
        if (messageType === ServerMessageID.Error) {
            console.error('Something wrong sending the chat ID:', content);
        }
    } else if (messageType === ServerMessageID.OK) {
        ws.allGood = true;
    } else {
        let done;
        for (let i=0, length=subscriptionsToWSMessages.length; i < length; i += 1) {
            done = await subscriptionsToWSMessages[i](messageType, content);
            if (done === true) return;
        }

        if (!done) {
            if (messageType === ServerMessageID.Error) {
                console.error('Unhandled error received from server:', content);
            } else {
                console.log(`Unknown message type "${messageType}" received.`);
            }
        }
    }
});

/**
 * Add a function to the list of functions to be called when the socket receives
 * a new message. The function must return a boolean: if `true` is returned then
 * is considered that the message was handled and will stop the exection of the
 * rest of the subscribers in the list.
 * 
 * @param {Function} fn the function to be added
 */
ws.subscribeToWSMessage = (fn) => {
    subscriptionsToWSMessages.push(fn);
}

/**
 * Remove an added function from the list of subscribers.
 * 
 * @param {Function} fn the function to be removed
 */
ws.unsubscribeToWSMessage = (fn) => {
    subscriptionsToWSMessages.splice(subscriptionsToWSMessages.indexOf(fn), 1);
}

/**
 * Create and add a subscription to listen for the response of the bot to our sent message
 * 
 * @param {Function} onNewMessageContent the function to be called with the new answer from bot as it sent from the server
 */
ws.createSubscriptionForBotResponse = (onNewMessageContent) => {
    const wsMessagesHandler = (messageType, content) => {
        if (messageType === ServerMessageID.TextChunk) {
            onNewMessageContent(content);
            return true;
        } else if (messageType === ServerMessageID.TextEnd) {
            ws.unsubscribeToWSMessage(wsMessagesHandler);
            return true;
        }

        return false;
    }

    ws.subscribeToWSMessage(wsMessagesHandler);
}

/**
 * Send a text message to the server.
 * @async
 * 
 * @param {String} message the message to send
 * @param {Function} onNewMessageContent the function to be called with the new answer from bot as it sent from the server
 */
ws.sendTextMessage = async (message, onNewMessageContent) => {
    ws.createSubscriptionForBotResponse(onNewMessageContent);

    const wsMessage = new Uint8Array([ClientMessageID.UserTextMessage, ...new TextEncoder().encode(message)]);
    ws.send(wsMessage);
};

/**
 * Send an audio chunk to the server.
 * @async
 * 
 * @param {Blob} blobChunk the audio blob chunk
 */
ws.sendAudioChunk = async (blobChunk) => {
    const wsMessage = new Uint8Array([ClientMessageID.UserAudioChunk, ...new Uint8Array(await blobChunk.arrayBuffer())]);
    ws.send(wsMessage);
};

/**
 * Tell the server that the audio is done.
 * 
 * @param {Function} onNewMessageContent the function to be called with the new answer from bot as it sent from the server
 */
ws.sendAudioEnd = (onNewMessageContent) => {
    ws.createSubscriptionForBotResponse(onNewMessageContent);

    ws.send(new Uint8Array([ClientMessageID.UserAudioEnd]));
};

chatButtonElement.addEventListener('click', async () => {
    isChatVisible = !isChatVisible;
    chatButtonElement.classList.toggle('active');
    document.getElementById('friendly-bot-container').classList.toggle('active');

    if (isChatVisible) {
        if (isFirstTime) {
            document.getElementById('friendly-bot-container-input').classList.add('first-time');
        }

        await sleep(750);
        document.getElementById('friendly-bot-container-inner').classList.add('show');

        if (isFirstTime) {
            isFirstTime = false;
            await writeWelcomeMessage();

            // Show the write area
            document.getElementById('friendly-bot-container-input').classList.add('show');
        }
    } else {
        document.getElementById('friendly-bot-container-inner').classList.remove('show');
    }
});

if (!navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    inputSpeechElement.classList.add('not-supported');
} else {
    inputSpeechElement.addEventListener('click', async (_event) => {
        inputTextElement.value = "";
        inputTextElement.disabled = true;
        inputSpeechElement.disabled = true;
    
        const stopRecordButtonElement = document.getElementById('friendly-bot-container-stop-record');
    
        await recordUserAudio(ws, stopRecordButtonElement);
        await addUserMessage(ws, MessageType.UserAudio);
    
        inputTextElement.disabled = false;
        inputSpeechElement.disabled = false;
    });
}

inputTextElement.addEventListener('keydown', async (event) => {
    if (event.code !== 'Enter') return;
    if (!inputTextElement.value) return;
    
    const message = inputTextElement.value;

    inputTextElement.value = "";
    inputTextElement.disabled = true;
    inputSpeechElement.disabled = true;

    await addUserMessage(ws, MessageType.User, message);

    inputTextElement.disabled = false;
    inputSpeechElement.disabled = false;
});