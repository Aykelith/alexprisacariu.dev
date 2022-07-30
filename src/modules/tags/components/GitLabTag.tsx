//= Functions
// Others
import classNames from 'classnames';

//= Types & Enums & Consts
// Own
import { TagWithSVGProps } from './TagWithSVG';
import { GitLabAddress } from '../../general';

//= React components
// Own
import TagWithSVG from './TagWithSVG';

//= Assets
// Own
import GitLabSVG from '../../../icons/gitlab.svg';

export type GitLabTagProps = Omit<TagWithSVGProps, 'svg' | 'children'>;

export default function GitLabTag({ className, ...otherProps }: GitLabTagProps) {
    return (
        <a href={GitLabAddress} target="_blank" rel="noreferrer noopener" className="hover:no-underline">
            <TagWithSVG svg={GitLabSVG} className={classNames('text-white bg-[#380D75] hover:bg-[#6E49CB]', className)} {...otherProps}>
                GitLab
            </TagWithSVG>
        </a>
    );
}
