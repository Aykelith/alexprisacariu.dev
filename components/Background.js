//= Methods
import clsx from "clsx";

/**
 * The background component
 * 
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement>} props - the props of the component
 * @param {import("../constants/ButtonSize").ButtonSize} [props.size] - the size of the button
 * @param {import("../constants/ButtonColor").ButtonColor} [props.color] - the color of the button
 * @param {Function} [props.onClose] - the on close handler
 * @param {String} [props.className] - the class name of the component
 * @param {Boolean} [props.alignContentCenter=true] - whether to align content center
 * @returns {JSX.Element} the background component
 */
export default function Background({
    onClose,
    className,
    children,
    alignContentCenter = true,
    ...otherProps
}) {
    return (
        <div
            className={clsx("bc", className)}
            {...otherProps}
            onClick={
                onClose &&
                ((event) => {
                    if (event.target === event.currentTarget) {
                        onClose();
                    }
                })
            }
        >
            {children}
        </div>
    );
}
