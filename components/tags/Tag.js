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
