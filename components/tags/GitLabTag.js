//= Functions
// Others
import classNames from "clsx";

//= Types & Enums & Consts
// Own
import GitLabAddress from "@/constants/GitLabAddress";

//= React components
// Own
import TagWithSVG from "./TagWithSVG";

//= Assets
// Own
import GitLabSVG from "@/components/icons/gitlab.svg";

/**
 * The GitLab tag component
 * 
 * @param {Object} props - the props of the component
 * @param {String} [props.className] - the class name of the component
 * @returns {JSX.Element} the GitLab tag component
 */
export default function GitLabTag({ className, ...otherProps }) {
    return (
        <a
            href={GitLabAddress}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:no-underline"
        >
            <TagWithSVG
                svg={GitLabSVG}
                className={classNames(
                    "text-white bg-[#380D75] hover:bg-[#6E49CB]",
                    className,
                )}
                {...otherProps}
            >
                GitLab
            </TagWithSVG>
        </a>
    );
}
