"use client";

// Methods
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Components
import { ProgressBarLink } from "@/components/progress_bar";
import { ThemeColorSchemeToggleButton } from "@/components/theme_color_scheme";

// Constants
import Menu from "@/constants/Menu";

export default function NavPartDesktop() {
    const pathname = usePathname();

    return (
        <div className="nav-links hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
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
                    >
                        {item[0]}
                    </ProgressBarLink>
                );
            })}
            <ThemeColorSchemeToggleButton />
        </div>
    );
}
