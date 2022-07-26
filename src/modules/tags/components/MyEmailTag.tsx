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
import MailSVG from "../../../icons/mail.svg";

export type MyEmailTagProps = Omit<TagWithSVGProps, 'svg' | 'children'>;

export default function MyEmailTag({ className, ...otherProps }: MyEmailTagProps) {
    return (
        <a href="mailto:alex@alexprisacariu.dev" target="_blank" rel="noreferrer noopener" className="hover:no-underline">
            <TagWithSVG svg={MailSVG} className={classNames('text-white bg-[#7da61a] hover:bg-[#8cb033] fill-[#2c3e00]', className)} {...otherProps}>
                alex@alexprisacariu.dev
            </TagWithSVG>
        </a>
    );
}
