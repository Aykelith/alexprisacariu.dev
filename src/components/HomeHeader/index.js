import Link from "next/link";

function createMenuLink(href, caption) {
    return (
        <Link href={href}>
            <a className="block py-2 px-1 md:px-4 hover:text-green-500">
                {caption}
            </a>
        </Link>
    );
}

export default function HomeHeader({ theme, handleThemeToggle }) {
    return (
        <div className="flex flex-row items-center justify-center bg-black text-red-500">
            {createMenuLink("/", "Home")}
            {createMenuLink("/#projects", "Projects")}
            {createMenuLink("/blog", "Blog")}
            {createMenuLink("/#about", "About")}
            {createMenuLink("/resume", "Resume")}
        </div>
    );
}

/*
        <div className="max-w-6xl mx-auto">
                <div className="flex flex-row items-center justify-between p-4">
                    <Link href="/" passHref>
                        <a className="w-8 h-8">
                            <img
                                className="object-contain w-full h-full"
                                src={
                                    theme == "dark"
                                        ? "/assets/logo/B-light.png"
                                        : "/assets/logo/B-dark.png"
                                }
                                alt="textual Blog Logo"
                            />
                        </a>
                    </Link>
                    <div
                        className="w-8 h-8 p-2 rounded-md cursor-pointer bg-code-block"
                        onClick={handleThemeToggle}
                    >
                        <img
                            className="object-contain w-full h-full"
                            src={
                                theme == "dark"
                                    ? "/assets/toggle/sunny.png"
                                    : "/assets/toggle/moon.png"
                            }
                            alt="sunny icon"
                        />
                    </div>
                </div>
            </div>
*/
