import clsx from "clsx";

export default function Button({
    children,
    transparent = false,
    ...otherProps
}) {
    return (
        <button
            className="hover:bg-gray-600 hover:cursor-pointer p-2 rounded"
            {...otherProps}
        >
            {children}
        </button>
    );
}
