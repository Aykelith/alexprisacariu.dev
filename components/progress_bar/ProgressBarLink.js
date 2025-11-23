"use client";

// Methods
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import useProgressBar from "./useProgressBar";
import calculateRandomProgressBarColor from "./calculateRandomProgressBarColor";
import { getBarColor, setBarColor } from "./setGetBarColor";

// Components
import Link from "next/link";

/**
 * The progress bar link component
 * 
 * @param {Object} props - the props of the component
 * @param {String} props.href - the href of the link
 * @param {JSX.Element} props.children - the children of the component
 * @returns {JSX.Element} the progress bar link component
 */
export default function ProgressBarLink({ href, children, ...rest }) {
    let progress = useProgressBar();
    let router = useRouter();

    return (
        <Link
            href={href}
            onClick={(e) => {
                e.preventDefault();

                setBarColor(calculateRandomProgressBarColor(getBarColor()));

                progress.start();

                startTransition(() => {
                    progress.done();
                    router.push(href.toString());
                });
            }}
            {...rest}
        >
            {children}
        </Link>
    );
}
