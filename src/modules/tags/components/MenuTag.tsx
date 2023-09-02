//= Functions
// Others
import classNames from 'classnames';

//= Types & Enums & Consts
// Own
import { TagProps } from './Tag';

//= React components
// Own
import Tag from './Tag';
// Others
import Link from 'next/link';

export type MenuTagProps = TagProps & {
    href: string;
};

export default function MenuTag({ href, className, ...otherProps }: MenuTagProps) {
    return (
        <Link href={href} className="hover:no-underline">
            <Tag className={classNames('border border-[#3366cc] bg-white hover:border-[#24478f] hover:bg-[#ebf0fa]', className)} {...otherProps}/>
        </Link>
    );
}
