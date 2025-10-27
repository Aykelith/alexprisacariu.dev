//= Functions
// Others
import classNames from "clsx";

//= React components
// Own
import Tag from "./Tag";
// Others
import Link from "next/link";

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
