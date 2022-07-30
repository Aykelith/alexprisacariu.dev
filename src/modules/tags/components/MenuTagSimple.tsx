//= Functions
// Others
import classNames from 'classnames';

//= Types & Enums & Consts
// Own
import { TagProps } from './Tag';

//= React components
// Own
import Tag from './Tag';

export type MenuTagProps = TagProps;

export default function MenuTagSimple({ className, ...otherProps }: MenuTagProps) {
    return (
        <Tag
            className={classNames('border border-[#3366cc] bg-white cursor-pointer hover:border-[#24478f] hover:bg-[#ebf0fa]', className)}
            {...otherProps}
        />
    );
}
