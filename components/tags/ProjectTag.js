//= Functions
// Others
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import TagSizes from "../../constants/TagSizes";

//= React components
// Own
import Tag from "./Tag";

/**
 * The project tag component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the project tag component
 */
export default function ProjectTag({ className, ...otherProps }) {
    return (
        <Tag
            size={TagSizes.Small}
            className={classNames("text-white bg-blue-500", className)}
            {...otherProps}
        />
    );
}
