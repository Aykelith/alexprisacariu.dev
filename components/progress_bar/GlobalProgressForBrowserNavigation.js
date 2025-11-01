// Methods
import { startTransition, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useProgressBar from "./useProgressBar";

export default function GlobalProgressForBrowserNavigation() {
    let progress = useProgressBar();
    let pathname = usePathname();
    let [newPathname, setNewPathname] = useState();
    let [didPopState, setDidPopState] = useState(false);

    useEffect(() => {
        if (didPopState && newPathname === pathname) {
            progress.done();
            setDidPopState(false);
        }
    }, [didPopState, newPathname, pathname, progress]);

    useEffect(() => {
        function handlePopState() {
            startTransition(() => {
                progress.start();
                setDidPopState(true);
                setNewPathname(window.location.pathname);
            });
        }

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [progress]);

    return null;
}
