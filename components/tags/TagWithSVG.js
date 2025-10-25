//= Functions
// Others
import classNames from "classnames";

//= Consts
// Own
import TagSizes from "../../constants/TagSizes";

//= React components
// Own
import Tag from "./Tag";

const SizesClasses = {
    [Sizes.Small]: "",
    [Sizes.Medium]: "gap-1.5",
    [Sizes.Large]: "",
};

const SVGSizesClasses = {
    [Sizes.Small]: "w-4 h-4",
    [Sizes.Medium]: "w-5 h-5",
    [Sizes.Large]: "",
};

export default function TagWithSVG({
    svg: Svg,
    svgClassNames,
    size = TagSizes.Medium,
    className,
    children,
    ...otherProps
}) {
    return (
        <Tag
            size={size}
            className={classNames(
                "flex items-center justify-center",
                SizesClasses[size],
                className,
            )}
            {...otherProps}
        >
            <Svg className={classNames(SVGSizesClasses[size], svgClassNames)} />
            {children}
        </Tag>
    );
}
