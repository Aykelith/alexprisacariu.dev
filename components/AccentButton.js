// Methods
import clsx from "clsx";

export default function AccentButton({ children, className, ...otherProps }) {
    return (
        <button className={clsx("accent-button", className)} {...otherProps}>
            {children}
        </button>
    );
}
