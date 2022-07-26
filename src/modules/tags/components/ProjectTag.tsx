//= Functions
// Others
import classNames from 'classnames';

//= Types & Enums & Consts
// Own
import { TagProps } from './Tag';
import { Sizes } from '../data/Sizes';

//= React components
// Own
import Tag from './Tag';

export type ProjectTagProps = TagProps;

export default function ProjectTag({ className, ...otherProps }: ProjectTagProps) {
    return <Tag size={Sizes.Small} className={classNames('text-white bg-blue-500', className)} {...otherProps} />;
}
