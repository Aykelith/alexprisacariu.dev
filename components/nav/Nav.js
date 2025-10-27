import Link from "next/link";
import NavLinksDesktop from "./NavLinksDesktop";
import NavPartMobile from "./NavPartMobile";

export default function Nav() {
    return (
        <nav className="flex flex-row items-center justify-between w-full h-full md:border-b">
            <Logo />
            <NavLinksDesktop />
            <NavPartMobile />
        </nav>
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
