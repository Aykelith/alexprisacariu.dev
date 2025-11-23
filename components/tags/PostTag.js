//= Functions
// Others
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import TagSizes from "../../constants/TagSizes";

//= React components
// Own
import Tag from "./Tag";
// Others
import Link from "next/link";

/**
 * The post tag component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the post tag component
 */
export default function PostTag({ className, ...otherProps }) {
    return (
        <Link href="#" className="hover:no-underline cursor-pointer">
            <Tag
                size={TagSizes.Small}
                className={classNames(
                    "text-white bg-blue-500 hover:bg-blue-400",
                    className,
                )}
                {...otherProps}
            />
        </Link>
    );
}
