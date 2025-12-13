"use client";

// Methods
import { openModal } from "./modals_system";

// Assets
import XSVG from "@/components/icons/x.svg";

/**
 * The clickable image component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @param {String} [props.visibleAlt] - the visible alt text
 * @returns {JSX.Element} the clickable image component
 */
export default function ClickableImage({
    className,
    visibleAlt,
    webp,
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
                                <div className="flex items-center justify-center max-w-10/12">
                                    {webp ? (
                                        <picture>
                                            <source
                                                srcSet={webp}
                                                type="image/webp"
                                            />
                                            <img
                                                className="h-auto"
                                                {...otherProps}
                                            />
                                        </picture>
                                    ) : (
                                        <img
                                            className="h-auto"
                                            {...otherProps}
                                        />
                                    )}
                                    <button
                                        className="fixed top-1 right-1 p-3 rounded-full bg-foreground-accent cursor-pointer"
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
                {webp ? (
                    <picture>
                        <source srcSet={webp} type="image/webp" />
                        <img className={className} {...otherProps} />
                    </picture>
                ) : (
                    <img className={className} {...otherProps} />
                )}
            </div>
            {!!visibleAlt && <div className="alt">{visibleAlt}</div>}
        </div>
    );
}
