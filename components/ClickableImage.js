"use client";

// Methods
import { openModal } from "./modals_system";

// Assets
import XSVG from "@/components/icons/x.svg";

export default function ClickableImage({
    className,
    visibleAlt,
    ...otherProps
}) {
    return (
        <div className="clickable-img">
            <div
                className="img"
                onClick={() => {
                    openModal({
                        allowCloseFromBackground: true,
                        renderModal: (onClose) => {
                            return (
                                <div className="flex items-center justify-center w-10/12">
                                    <img className="h-auto" {...otherProps} />
                                    <button
                                        className="fixed top-1 right-1 p-3 rounded-full bg-background cursor-pointer"
                                        onClick={onClose}
                                    >
                                        <XSVG className="w-5 h-5" />
                                    </button>
                                </div>
                            );
                        },
                    });
                }}
            >
                <img className={className} {...otherProps} />
            </div>
            {!!visibleAlt && <div className="alt">{visibleAlt}</div>}
        </div>
    );
}
