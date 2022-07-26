//= Functions
// Others
import classNames from 'classnames';

//= Types & Enums & Consts
// Own
import { TagWithSVGProps } from './TagWithSVG';

//= React components
// Own
import TagWithSVG from './TagWithSVG';

//= Assets
// Own
import GitHubSVG from "../../../icons/github.svg";

export type GitHubTagProps = Omit<TagWithSVGProps, 'svg' | 'children'>;

export default function GitHubTag({ className, ...otherProps }: GitHubTagProps) {
    return (
        <a href="https://github.com/Aykelith" target="_blank" rel="noreferrer noopener" className="hover:no-underline">
            <TagWithSVG svg={GitHubSVG} className={classNames('text-white bg-[#4183C4] hover:bg-[#548fca]', className)} {...otherProps}>
                GitHub
            </TagWithSVG>
        </a>
    );
}
