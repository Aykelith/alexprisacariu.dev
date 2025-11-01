/* The main settings of the application */
const Settings = {
    ClientAudioMimeType: 'audio/webm;codecs=opus',
    ServerAudioMimeType: 'audio/mp3',
    PlayWelcomeAudio: true,
    WelcomeAudioPath: '/static/audio/welcome-en.mp3',
    WelcomeMessage: "Hello. How can I help you today?",
    DefaultTypingSpeed: 40,
    APISendMessage: '/api/message',
    UseWriteEffect: true,
};

const MessageType = {
    Bot: 'bot',
    User: 'user',
    UserAudio: 'user-audio'
}

let messageHistory = [];

/**
 * Sleep for the given amount of ms.
 * @async
 * 
 * @param {Number} ms how much to sleep for
 * @returns {Promise<void>} the promise
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

const ChatID = makeID(10);

/**
 * Encode a `Blob` to base64.
 * @async
 * 
 * @param {Blob} blob the blob to encode
 * @returns {Promise<String>} the base64 encoded blob
 */
function blobToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

/**
 * Play the given audio and return a promise for when the audio is done playing (when `ended` event is fired).
 * @async
 * 
 * @param {Audio} audio
 * @returns {Promise} promise that resolve when the audio is done playing (when `ended` event is fired)
 */
async function playAudio(audio) {
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audio);
    const gainNodeL = audioCtx.createGain();
    const gainNodeR = audioCtx.createGain();
    const merger = audioCtx.createChannelMerger(2);

    source.connect(gainNodeL);
    source.connect(gainNodeR);

    gainNodeL.connect(merger, 0, 0);
    gainNodeR.connect(merger, 0, 1);

    merger.connect(audioCtx.destination);

    const donePromise = new Promise((resolve) => {
        audio.addEventListener('ended', resolve);
    });

    await audio.play();

    return donePromise;
}

/**
 * Convert an ecoded base64 audio to `Audio`.
 * 
 * @param {String} base64 the encoded audio
 * @returns {Audio} the decoded `Audio`
 */
function convertBase64ToAudio(base64) {
    const raw = window.atob(base64);
    const rawLength = raw.length;
    const arr = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i+= 1) {
        arr[i] = raw.charCodeAt(i);
    }
    
    const blob = new Blob([arr], {
        type: Settings.ServerAudioMimeType
    });

    const blobUrl = URL.createObjectURL(blob);

    return new Audio(blobUrl);
}

/**
 * Get the length of the given audio in seconds.
 * If the metadata is not loaded will be waited to be loaded and then returned the duration.
 * @async
 * 
 * @param {Audio} audio the audio
 * @returns {Promise<Number>} the duration of audio in seconds
 */
async function getAudioLength(audio) {
    return audio.duration || new Promise((resolve) => {
        audio.addEventListener('loadedmetadata', () => resolve(audio.duration));
    });
}

/**
 * Send a message to the server and return the JSON back.
 * @async
 * 
 * @param {Object} data the data to send
 * @returns {Promise<Object>} the result from the server
 */
async function sendMessage(data = {}) {
    try {
        const response = await fetch(Settings.APISendMessage, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: ChatID, ...data }),
        });

        return response.json();        
    } catch (error) {
        console.error("Error:", error);
    }
}

/**
 * Record the user and return it as an base64 encoded audio.
 * @async
 * 
 * @param {HTMLElement} stopRecordButtonElement the stop button element
 * @returns {Promise<String>} the base64 encoded audio
 */
async function recordUserAudio(stopRecordButtonElement) {
    let stream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
        console.error(`The following getUserMedia error occurred: ${error}`);
        return;
    }

    let chunks = [];

    const mediaRecorder = new MediaRecorder(stream, { mimeType: Settings.ClientAudioMimeType });

    return new Promise((resolve, reject) => {
        const onStopClick = () => {
            mediaRecorder.stop();
            stopRecordButtonElement.classList.remove('show');
        };

        mediaRecorder.addEventListener('dataavailable', (event) => {
            chunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', (_event) => {
            const blob = new Blob(chunks, { type: Settings.ClientAudioMimeType });
            chunks = [];

            const base64AudioPromise = blobToBase64(blob);

            stopRecordButtonElement.removeEventListener('click', onStopClick);

            // Stop the audio listening
            stream.getAudioTracks().forEach((track) => {
                track.stop()
                stream.removeTrack(track);
            });

            base64AudioPromise.then(resolve).catch(reject);
        });

        stopRecordButtonElement.classList.add('show');

        mediaRecorder.start();

        stopRecordButtonElement.addEventListener('click', onStopClick);
    })
}

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
 * Add a new message to the chat.
 * @async
 * 
 * @param {MessageType} type the type of message
 * @param {String|Audio} message the data of the message
 * @param {Object} [settings] additional settings
 * @param {Number} [settings.audioLength] the length of the audio in seconds
 * @returns {Promise} the promise resolved when all is done
 */
async function addMessage(type, message, settings = {}) {
    const newMsg = document.createElement('div');
    newMsg.classList.add('message');

    if (type === MessageType.User) {
        newMsg.classList.add('user');
        newMsg.innerHTML = message;
    } else if (type === MessageType.UserAudio) {
        newMsg.classList.add('user', 'audio');
        newMsg.innerHTML = 'Audio message';
    } else {
        newMsg.classList.add(MessageType.Bot);
    }

    const msgsCnt = document.getElementById('friendly-bot-container-msgs');
    msgsCnt.appendChild(newMsg);

    // Keeping own history log
    if (type === MessageType.User || type === MessageType.Bot) {
        messageHistory.push({ role: type === MessageType.User ? 'user' : 'assistant', content: message });
    }
        
    if (type === MessageType.Bot) {
        if (Settings.UseWriteEffect) {
            // Create a write effect when the bot responds
            let speed = Settings.DefaultTypingSpeed;

            if (settings.audioLength) {
                const ms = settings.audioLength * 1000 + ((message.match(/,/g) || []).length * 40) + ((message.match(/\./g) || []).length * 70);
                speed = ms / message.length;
            }
            
            for (let i=0, length=message.length; i < length; i += 1) {
                newMsg.innerHTML += message.charAt(i);
                await sleep(speed);
            }
        } else {
            newMsg.innerHTML = message;
        }
    } else if (type === MessageType.User || type === MessageType.UserAudio) {
        let response;
        if (type === MessageType.User) {
            response = await sendMessage({ message });
        } else if (type === MessageType.UserAudio) {
            response = await sendMessage({ audio: message });        
        }

        if (response.audio) {
            const audio = convertBase64ToAudio(response.audio);
            playAudio(audio);
        }
        
        return addMessage(MessageType.Bot, response.answer);
    }
}

/**
 * Write the initial welcome message to the user.
 * @async
 * 
 * @returns {Promise} the promise that is resolved when the welcome writing is done
 */
async function writeWelcomeMessage() {
    let audio, audioLength;
    if (Settings.PlayWelcomeAudio) {
        audio = new Audio(Settings.WelcomeAudioPath);
        audioLength = await getAudioLength(audio);
    }

    const response = addMessage(MessageType.Bot, Settings.WelcomeMessage, { audioLength });

    if (Settings.PlayWelcomeAudio) playAudio(audio);

    await response;
}

let isChatVisible = false;
let isFirstTime = true;

const chatButtonElement = document.getElementById('friendly-bot-button');
const inputSpeechElement = document.getElementById('friendly-bot-container-input-speech');
const inputTextElement = document.getElementById('friendly-bot-container-input-txt');

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
    
        const base64Audio = await recordUserAudio(stopRecordButtonElement);
        await addMessage(MessageType.UserAudio, base64Audio.substring(`data:${Settings.ClientAudioMimeType};base64,`.length));
    
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

    await addMessage(MessageType.User, message);

    inputTextElement.disabled = false;
    inputSpeechElement.disabled = false;
});