//= Functions
// Others
import classNames from 'classnames';

//= Types & Enums & Consts
// Own
import { TagWithSVGProps } from './TagWithSVG';
import { LinkedInAddress } from '../../general';

//= React components
// Own
import TagWithSVG from './TagWithSVG';

//= Assets
// Own
import LinkedInSVG from '../../../icons/linkedin.svg';

export type LinkedInTagProps = Omit<TagWithSVGProps, 'svg' | 'children'>;

export default function LinkedInTag({ className, ...otherProps }: LinkedInTagProps) {
    return (
        <a href={LinkedInAddress} target="_blank" rel="noreferrer noopener" className="hover:no-underline">
            <TagWithSVG svg={LinkedInSVG} svgClassNames="fill-white" className={classNames('text-white bg-[#0072b1] hover:bg-[#0078c7]', className)} {...otherProps}>
                LinkedIn
            </TagWithSVG>
        </a>
    );
}
