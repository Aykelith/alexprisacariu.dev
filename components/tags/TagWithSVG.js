//= Functions
// Others
import classNames from "clsx";

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

/**
 * The tag with SVG component
 * 
 * @param {Object} props - the props of the component
 * @param {JSX.Element} props.svg - the svg component
 * @param {String} [props.svgClassNames] - the class names of the svg
 * @param {import("../../constants/TagSizes").TagSizes} [props.size] - the size of the tag
 * @param {String} [props.className] - the class name of the component
 * @param {JSX.Element} props.children - the children of the component
 * @returns {JSX.Element} the tag with SVG component
 */
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
