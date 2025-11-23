"use client";

// Methods
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Components
import Button from "@/components/Button";
import { ThemeColorSchemeToggleButton } from "@/components/theme_color_scheme";
import { ProgressBarLink } from "@/components/progress_bar";

// Constants
import Menu from "@/constants/Menu";

// Assets
import MenuSVG from "@/components/icons/menu.svg";
import XSVG from "@/components/icons/x.svg";

/**
 * The navigation part mobile component
 * 
 * @returns {JSX.Element} the navigation part mobile component
 */
export default function NavPartMobile() {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="md:hidden">
            <ThemeColorSchemeToggleButton />
            <Button
                onClick={() => {
                    setShowMenu(true);
                }}
            >
                <MenuSVG className="w-5 h-5" />
            </Button>
            {showMenu && (
                <div
                    className="w-full h-full inset-0 fixed bg-stone-950/70"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setShowMenu(false);
                        }
                    }}
                >
                    <div className="nav-links w-4/5 max-w-72 fixed top-0 right-0 h-full bg-background border-l flex flex-col gap-4 px-6 py-6 text-lg">
                        {Menu.map((item) => {
                            const active =
                                item[1] === "/"
                                    ? pathname === item[1]
                                    : pathname.startsWith(item[1]);

                            return (
                                <ProgressBarLink
                                    key={item[0]}
                                    href={item[1]}
                                    className={clsx({
                                        "text-foreground!": active,
                                    })}
                                    onClick={() => {
                                        setShowMenu(false);
                                    }}
                                >
                                    {item[0]}
                                </ProgressBarLink>
                            );
                        })}
                    </div>
                    <button
                        className="fixed top-1 right-1 p-3"
                        onClick={() => setShowMenu(false)}
                    >
                        <XSVG className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
}
