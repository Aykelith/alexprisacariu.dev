//= Methods
import clsx from "clsx";

/**
 * @param {import("react").ButtonHTMLAttributes<HTMLButtonElement>} props
 * @param {ButtonSize}  props.size
 * @param {ButtonColor} props.color
 * @returns {JSX.Element}
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
