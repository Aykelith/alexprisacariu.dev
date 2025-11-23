//= Functions
// Others
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import GitHubAddress from "@/constants/GitHubAddress";

//= React components
// Own
import TagWithSVG from "./TagWithSVG";

//= Assets
// Own
import GitHubSVG from "@/components/icons/github.svg";

/**
 * The GitHub tag component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the GitHub tag component
 */
export default function GitHubTag({ className, ...otherProps }) {
    return (
        <a
            href={GitHubAddress}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:no-underline"
        >
            <TagWithSVG
                svg={GitHubSVG}
                className={classNames(
                    "text-white bg-[#4183C4] hover:bg-[#548fca]",
                    className,
                )}
                {...otherProps}
            >
                GitHub
            </TagWithSVG>
        </a>
    );
}
