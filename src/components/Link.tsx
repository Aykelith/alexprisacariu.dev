//= React components
// Others
import NextLink from 'next/link';

export default function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
    return (
        <NextLink href={href}>
            <a className={`text-indigo-700 ${className}`}>{children}</a>
        </NextLink>
    );
}
