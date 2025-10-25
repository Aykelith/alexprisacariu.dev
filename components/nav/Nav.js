import Link from "next/link";
import NavLinksDesktop from "./NavLinksDesktop";

export default function Nav() {
    return (
        <>
            <nav className="hidden flex-col md:flex md:flex-row md:items-center md:justify-between w-full h-full border-b">
                <Logo />
                <NavLinksDesktop />
            </nav>
            <div className="w-full flex md:hidden justify-between">
                <Logo />
            </div>
        </>
    );
}

function Logo() {
    return (
        <Link href="/" className="font-accent font-bold text-lg no-link">
            <div className="md:hidden">AP</div>
            <div className="hidden md:block xl:hidden">Alex Prisacariu</div>
            <div className="hidden xl:block">Alexandru Prisacariu</div>
        </Link>
    );
}
