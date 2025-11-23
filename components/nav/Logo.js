//= Components
import Link from "next/link";

/**
 * The logo component
 * 
 * @returns {JSX.Element} the logo component
 */
export default function Logo() {
    return (
        <Link href="/" className="font-accent font-bold text-lg no-link">
            <div className="md:hidden">AP</div>
            <div className="hidden md:block xl:hidden">Alex Prisacariu</div>
            <div className="hidden xl:block">Alexandru Prisacariu</div>
        </Link>
    );
}
