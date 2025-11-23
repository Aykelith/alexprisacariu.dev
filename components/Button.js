// Methods
import clsx from "clsx";

/**
 * The button component
 * 
 * @param {Object} props - the props of the component
 * @param {JSX.Element} props.children - the children of the component
 * @param {String} [props.className] - the class name of the component
 * @param {Boolean} [props.transparent=false] - whether the button is transparent
 * @returns {JSX.Element} the button component
 */
export default function Button({
    children,
    className,
    transparent = false,
    ...otherProps
}) {
    return (
        <button
            className={clsx(
                "hover:bg-card-hover hover:cursor-pointer p-2 rounded",
                className,
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
}
