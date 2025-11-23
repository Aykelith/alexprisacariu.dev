//= Functions
// Others
import classNames from "clsx";

//= React components
// Own
import Tag from "./Tag";

/**
 * The menu tag simple component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the menu tag simple component
 */
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
