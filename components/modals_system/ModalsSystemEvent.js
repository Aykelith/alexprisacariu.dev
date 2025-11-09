// Constants
import { EventName } from "./constants";

export default class ModalsSystemEvent extends Event {
    #type;
    #modalID;
    #options;

    constructor(type, modalID, options) {
        super(EventName);

        this.#type = type;
        this.#modalID = modalID;
        this.#options = options;
    }

    get type() {
        return this.#type;
    }

    get modalID() {
        return this.#modalID;
    }

    get options() {
        return this.#options;
    }
}
