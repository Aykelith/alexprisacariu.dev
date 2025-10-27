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
