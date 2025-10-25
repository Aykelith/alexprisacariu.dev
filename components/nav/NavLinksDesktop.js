"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavLinks = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["Blog", "/blog"],
    ["About", "/about"],
    ["Resume/CV", "/cv"],
    ["Contact", "/contact"],
];

export default function NavLinksDesktop() {
    const pathname = usePathname();

    return (
        <div
            id="nav-links"
            className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6"
        >
            {NavLinks.map((item) => {
                const active =
                    item[1] === "/"
                        ? pathname === item[1]
                        : pathname.startsWith(item[1]);

                return (
                    <Link
                        key={item[0]}
                        href={item[1]}
                        className={classNames({
                            "text-foreground!": active,
                        })}
                    >
                        {item[0]}
                    </Link>
                );
            })}
        </div>
    );
}
