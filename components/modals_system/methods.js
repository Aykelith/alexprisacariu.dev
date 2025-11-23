// Methods
import generateID from "@/utilities/generateID";

// Classes
import ModalsSystemEvent from "./ModalsSystemEvent";

//= Constants
import { EventName, EventType, StorageGlobalVariableName } from "./constants";

/**
 * Gets the storage
 * 
 * @returns {Object} the storage
 */
export function getStorage() {
    return window[StorageGlobalVariableName];
}

/**
 * Opens a modal
 * 
 * @param {import("../jsdoc/OpenModalSettings").OpenModalSettings} options - the options
 * @returns {String} the id of the modal
 */
export function openModal(options) {
    const storage = getStorage();

    let id;

    if (options.id) {
        if (storage[id]) {
            throw new Error(`The ID ${id} is already taken by another modal`);
        }

        id = options.id;
    } else {
        id = generateID();
    }

    storage[id] = options;

    window.dispatchEvent(new ModalsSystemEvent(EventType.OPEN, id));

    return id;
}

/**
 * Close an open modal.
 * 
 * @param {String} id the ID of the modal
 * @param {Boolean} [dispatchEvent=true] `true` to dispatch the close modal event when the modal is closed
 */
export function closeModal(id, dispatchEvent = true) {
    if (!isModalOpen(id)) {
        throw new Error(`The modal with ID "${id}" is not open`);
    }

    window.dispatchEvent(
        new ModalsSystemEvent(EventType.CLOSE, id, { dispatchEvent }),
    );
}

/**
 * Checks if a modal is open
 * 
 * @param {String} id - the id of the modal
 * @returns {Boolean} true if the modal is open, false otherwise
 */
export function isModalOpen(id) {
    return !!getStorage()[id];
}

/**
 * Waits for a modal to close
 * 
 * @param {String} id - the id of the modal
 * @param {Number} [maxWaitTimeMs=0] - the maximum wait time in milliseconds
 * @returns {Promise<void>} a promise that resolves when the modal is closed
 */
export async function waitForModal(id, maxWaitTimeMs = 0) {
    if (!getStorage()[id]) return Promise.resolve(null);

    return new Promise((resolve, reject) => {
        let timerID;

        const eventHandler = (event) => {
            if (
                event.type === EventType.CLOSED_PROGRAMMATICALLY ||
                event.type === EventType.CLOSED_BY_USER
            ) {
                resolve();
                if (timerID) window.clearTimeout(timerID);
                window.removeEventListener(EventName, eventHandler);
            }
        };

        window.addEventListener(EventName, eventHandler);

        if (maxWaitTimeMs) {
            timerID = window.setTimeout(() => {
                reject();
                window.removeEventListener(EventName, eventHandler);
            }, maxWaitTimeMs);
        }
    });
}
