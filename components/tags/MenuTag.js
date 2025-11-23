//= Functions
// Others
import classNames from "clsx";

//= React components
// Own
import Tag from "./Tag";
// Others
import Link from "next/link";

/**
 * The menu tag component
 * 
 * @param {Object} props - the props of the component
 * @param {String} props.href - the href of the tag
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the menu tag component
 */
export default function MenuTag({ href, className, ...otherProps }) {
    return (
        <Link href={href} className="hover:no-underline">
            <Tag
                className={classNames(
                    "border border-[#3366cc] bg-white hover:border-[#24478f] hover:bg-[#ebf0fa]",
                    className,
                )}
                {...otherProps}
            />
        </Link>
    );
}
