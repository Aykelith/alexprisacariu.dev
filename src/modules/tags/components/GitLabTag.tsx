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
import GitLabSVG from '../../../icons/gitlab.svg';

export type GitLabTagProps = Omit<TagWithSVGProps, 'svg' | 'children'>;

export default function GitLabTag({ className, ...otherProps }: GitLabTagProps) {
    return (
        <a href="https://gitlab.com/AlexxanderX" target="_blank" rel="noreferrer noopener" className="hover:no-underline">
            <TagWithSVG svg={GitLabSVG} className={classNames('text-white bg-[#380D75] hover:bg-[#6E49CB]', className)} {...otherProps}>
                GitLab
            </TagWithSVG>
        </a>
    );
}
