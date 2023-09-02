//= Functions
// Others
import classNames from 'classnames';

//= React components
// Others
import NextLink from 'next/link';

export default function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    return (
        <NextLink href={href} className={classNames("text-indigo-700", className)}>
            {children}
        </NextLink>
    );
}
