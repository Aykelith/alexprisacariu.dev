//= Functions
// Others
import classNames from "classnames";

//= Types & Enums & Consts
// Own
import LinkedInAddress from "@/constants/LinkedInAddress";

//= React components
// Own
import TagWithSVG from "./TagWithSVG";

//= Assets
// Own
import LinkedInSVG from "@/components/icons/linkedin.svg";

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
