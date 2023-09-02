//= Functions
// Others
import classNames from 'classnames';
import Link from 'next/link';

//= Types & Enums & Consts
// Own
import { TagProps } from './Tag';
import { Sizes } from '../data/Sizes';

//= React components
// Own
import Tag from './Tag';

export type PostTagProps = TagProps;

export default function PostTag({ className, ...otherProps }: PostTagProps) {
    return (
        <Link href="#" className="hover:no-underline cursor-pointer">
            <Tag size={Sizes.Small} className={classNames('text-white bg-blue-500 hover:bg-blue-400', className)} {...otherProps} />
        </Link>
    );
}
