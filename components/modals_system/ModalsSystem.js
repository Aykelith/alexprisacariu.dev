"use client";

//= Methods
import { useState, useEffect } from "react";
import { getStorage } from "./methods";

//= Components
import Background from "../Background";

//= Constants
import { EventName, EventType, StorageGlobalVariableName } from "./constants";

//= Classes
import ModalsSystemEvent from "./ModalsSystemEvent";

/**
 * The modals system component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the modals system component
 */
export default function ModalsSystem({ className }) {
    const [modalsIDs, setModalsIDs] = useState([]);

    const closeModal = (id, dispatchEvent, eventType) => {
        setModalsIDs((actualModalIDs) => {
            const newModalIDs = [...actualModalIDs];
            newModalIDs.splice(newModalIDs.indexOf(id), 1);
            return newModalIDs;
        });

        if (dispatchEvent)
            window.dispatchEvent(new ModalsSystemEvent(eventType, id));

        delete getStorage()[id];
    };

    useEffect(() => {
        window[StorageGlobalVariableName] = {};

        const modalSystemEventHandler = /** @type {ModalsSystemEvent} */ (
            event,
        ) => {
            switch (event.type) {
                case EventType.OPEN:
                    setModalsIDs((actualModalIDs) => [
                        ...actualModalIDs,
                        event.modalID,
                    ]);
                    break;
                case EventType.CLOSE:
                    closeModal(
                        event.modalID,
                        event.options.dispatchEvent,
                        EventType.CLOSED_PROGRAMMATICALLY,
                    );
                    break;
            }
        };

        window.addEventListener(EventName, modalSystemEventHandler);

        return () => {
            window.removeEventListener(EventName, modalSystemEventHandler);
        };
    }, []);

    return (
        <div className={className}>
            {modalsIDs.map((id) => {
                const modalOptions = getStorage()[id];

                if (!modalOptions) return null;

                const onCloseThisModal = () =>
                    closeModal(id, true, EventType.CLOSED_BY_USER);

                return (
                    <Background
                        key={id}
                        onClose={
                            modalOptions.allowCloseFromBackground
                                ? onCloseThisModal
                                : undefined
                        }
                        {...(modalOptions.backgroundProps || {})}
                    >
                        {modalOptions.renderModal(onCloseThisModal)}
                    </Background>
                );
            })}
        </div>
    );
}
