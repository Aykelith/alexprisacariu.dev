// Methods
import clsx from "clsx";

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
