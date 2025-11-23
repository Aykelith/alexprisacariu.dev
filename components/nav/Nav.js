//= Components
import Logo from "./Logo";
import NavPartDesktop from "./NavPartDesktop";
import NavPartMobile from "./NavPartMobile";

/**
 * The navigation component
 * 
 * @returns {JSX.Element} the navigation component
 */
export default function Nav() {
    return (
        <nav className="flex flex-row items-center justify-between w-full h-full md:border-b">
            <Logo />
            <NavPartDesktop />
            <NavPartMobile />
        </nav>
    );
}
