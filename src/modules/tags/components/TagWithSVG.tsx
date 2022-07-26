//= Functions
// Others
import classNames from "classnames";

//= Types & Enums & Consts
// Own
import { TagProps } from "./Tag";
import { Sizes } from "../data/Sizes";

//= React components
// Own
import Tag from "./Tag";

const SizesClasses = {
    [Sizes.Small]: "",
    [Sizes.Medium]: "gap-1.5",
    [Sizes.Large]: ""
}

const SVGSizesClasses = {
    [Sizes.Small]: "w-4 h-4",
    [Sizes.Medium]: "w-5 h-5",
    [Sizes.Large]: ""
};

export type TagWithSVGProps = TagProps & {
    svg: React.FunctionComponent<{ className?: string }>;
    svgClassNames?: string;
}

export default function TagWithSVG({ svg: Svg, svgClassNames, size = Sizes.Medium, className, children, ...otherProps }: TagWithSVGProps) {
    return (
        <Tag size={size} className={classNames("flex items-center justify-center", SizesClasses[size], className)} {...otherProps}>
            <Svg className={classNames(SVGSizesClasses[size], svgClassNames)}/>
            {children}
        </Tag>
    );
};

