//= Functions
// Others
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import TagSizes from "../../constants/TagSizes";

//= React components
// Own
import Tag from "./Tag";

export default function ProjectTag({ className, ...otherProps }) {
    return (
        <Tag
            size={TagSizes.Small}
            className={classNames("text-white bg-blue-500", className)}
            {...otherProps}
        />
    );
}
