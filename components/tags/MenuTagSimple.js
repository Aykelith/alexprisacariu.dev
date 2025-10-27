//= Functions
// Others
import classNames from "clsx";

//= React components
// Own
import Tag from "./Tag";

export default function MenuTagSimple({ className, ...otherProps }) {
    return (
        <Tag
            className={classNames(
                "border border-[#3366cc] bg-white cursor-pointer hover:border-[#24478f] hover:bg-[#ebf0fa]",
                className,
            )}
            {...otherProps}
        />
    );
}
