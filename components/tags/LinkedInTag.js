//= Functions
// Others
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import LinkedInAddress from "@/constants/LinkedInAddress";

//= React components
// Own
import TagWithSVG from "./TagWithSVG";

//= Assets
// Own
import LinkedInSVG from "@/components/icons/linkedin.svg";

/**
 * The LinkedIn tag component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the LinkedIn tag component
 */
export default function LinkedInTag({ className, ...otherProps }) {
    return (
        <a
            href={LinkedInAddress}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:no-underline"
        >
            <TagWithSVG
                svg={LinkedInSVG}
                svgClassNames="fill-white"
                className={classNames(
                    "text-white bg-[#0072b1] hover:bg-[#0078c7]",
                    className,
                )}
                {...otherProps}
            >
                LinkedIn
            </TagWithSVG>
        </a>
    );
}
