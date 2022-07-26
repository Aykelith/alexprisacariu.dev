//= Functions
// Others
import React from "react";
import classNames from "classnames";

//= Types & Enums & Consts
// Own
import { Sizes } from "../data/Sizes";

const SizesClasses = {
    [Sizes.Small]: "text-sm px-1",
    [Sizes.Medium]: "px-2 py-1",
    [Sizes.Large]: "text-lg"
}

export type TagProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: Sizes;
}

export default function Tag({ size = Sizes.Medium, className, ...otherProps }: TagProps) {
    return (
        <div className={classNames(SizesClasses[size], className)} {...otherProps}/>
    );
}
