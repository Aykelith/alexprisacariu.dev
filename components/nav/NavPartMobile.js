"use client";

import Button from "@/components/Button";
import { ThemeColorSchemeToggleButton } from "@/components/ThemeColorScheme";
import { useState } from "react";

import Menu from "@/constants/Menu";

//= Assets
// Own
import MenuSVG from "@/components/icons/menu.svg";
import { usePathname } from "next/navigation";
import { ProgressBarLink } from "../ProgressBar";
import { clsx } from "clsx";

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
                    <div className="w-4/5 max-w-72 fixed top-0 right-0 h-full bg-red-500 flex flex-col gap-4 px-2 py-6">
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
                </div>
            )}
        </div>
    );
}
