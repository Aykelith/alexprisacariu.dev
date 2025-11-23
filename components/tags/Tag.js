//= Functions
// Others
import React from "react";
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import TagSizes from "../../constants/TagSizes";

const SizesClasses = {
    [TagSizes.Small]: "text-sm px-1",
    [TagSizes.Medium]: "px-2 py-1",
    [TagSizes.Large]: "text-lg",
};

/**
 * The tag component
 * 
 * @param {Object} props - the props of the component
 * @param {import("../../constants/TagSizes").TagSizes} [props.size] - the size of the tag
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the tag component
 */
export default function Tag({
    size = TagSizes.Medium,
    className,
    ...otherProps
}) {
    return (
        <div
            className={classNames(SizesClasses[size], className)}
            {...otherProps}
        />
    );
}
