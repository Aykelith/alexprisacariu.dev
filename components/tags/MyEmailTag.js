//= Functions
// Others
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import MailAddress from "@/constants/MailAddress";

//= React components
// Own
import TagWithSVG from "./TagWithSVG";

//= Assets
// Own
import MailSVG from "@/components/icons/mail.svg";

/**
 * The my email tag component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the my email tag component
 */
export default function MyEmailTag({ className, ...otherProps }) {
    return (
        <a
            href={`mailto:${MailAddress}`}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:no-underline"
        >
            <TagWithSVG
                svg={MailSVG}
                className={classNames(
                    "text-white bg-[#7da61a] hover:bg-[#8cb033] fill-[#2c3e00]",
                    className,
                )}
                {...otherProps}
            >
                {MailAddress}
            </TagWithSVG>
        </a>
    );
}
