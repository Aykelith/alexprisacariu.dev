// Methods
import clsx from "clsx";

/**
 * The accent button component
 * 
 * @param {Object} props - the props of the component
 * @param {JSX.Element} props.children - the children of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the accent button component
 */
export default function AccentButton({ children, className, ...otherProps }) {
    return (
        <button className={clsx("accent-button", className)} {...otherProps}>
            {children}
        </button>
    );
}
