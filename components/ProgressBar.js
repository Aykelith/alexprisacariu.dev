"use client";

import {
    AnimatePresence,
    motion,
    useMotionTemplate,
    useSpring,
} from "motion/react";
import { usePathname } from "next/navigation";
import {
    createContext,
    startTransition,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PossibleProgressBarColors = [
    "oklch(48.8% 0.243 264.376)",
    "oklch(66.7% 0.295 322.15)",
    "oklch(58.6% 0.253 17.585)",
    "oklch(64.8% 0.2 131.684)",
    "oklch(66.6% 0.179 58.318)",
    "oklch(43.2% 0.095 166.913)",
    "oklch(39.8% 0.07 227.392)",
    "oklch(40.8% 0.153 2.432)",
    "oklch(82.7% 0.119 306.383)",
    "oklch(90.1% 0.058 230.902)",
    "oklch(76.5% 0.177 163.223)",
    "oklch(90.5% 0.182 98.111)",
];

const ProgressBarContext = createContext(null);

let randomProgressBarColor;

function calculateRandomProgressBarColor() {
    const previousColor = randomProgressBarColor;

    let index = randMaxExcluded(0, PossibleProgressBarColors.length);
    randomProgressBarColor = PossibleProgressBarColors[index];

    if (previousColor === randomProgressBarColor) {
        if (index + 1 < PossibleProgressBarColors.length) {
            index += 1;
        } else {
            index = 0;
        }

        randomProgressBarColor = PossibleProgressBarColors[index];
    }
}

calculateRandomProgressBarColor();

export function useProgressBar() {
    let progress = useContext(ProgressBarContext);

    if (progress === null) {
        throw new Error("Need to be inside provider");
    }

    return progress;
}

export function ProgressBar({ className, children }) {
    let progress = useProgress();
    let width = useMotionTemplate`${progress.value}%`;

    return (
        <ProgressBarContext.Provider value={progress}>
            <GlobalProgressForBrowserNavigation />

            <AnimatePresence onExitComplete={progress.reset}>
                {progress.state !== "complete" && (
                    <motion.div
                        style={{
                            width,
                            backgroundColor: randomProgressBarColor,
                        }}
                        exit={{ opacity: 0 }}
                        className={className}
                        suppressHydrationWarning={true}
                    />
                )}
            </AnimatePresence>

            {children}
        </ProgressBarContext.Provider>
    );
}

export function ProgressBarLink({ href, children, ...rest }) {
    let progress = useProgressBar();
    let router = useRouter();

    return (
        <Link
            href={href}
            onClick={(e) => {
                e.preventDefault();

                calculateRandomProgressBarColor();

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

function GlobalProgressForBrowserNavigation() {
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

function useProgress() {
    const [state, setState] = useState("initial");

    let value = useSpring(0, {
        damping: 25,
        mass: 0.5,
        stiffness: 300,
        restDelta: 0.1,
    });

    useInterval(
        () => {
            // If we start progress but the bar is currently complete, reset it first.
            if (value.get() === 100) {
                value.jump(0);
            }

            let current = value.get();

            let diff;
            if (current === 0) {
                diff = 15;
            } else if (current < 50) {
                diff = randMaxIncluded(1, 10);
            } else {
                diff = randMaxIncluded(1, 5);
            }

            value.set(Math.min(current + diff, 99));
        },
        state === "in-progress" ? 750 : null,
    );

    useEffect(() => {
        if (state === "initial") {
            value.jump(0);
        } else if (state === "completing") {
            value.set(100);
        }

        return value.on("change", (latest) => {
            if (latest === 100) {
                setState("complete");
            }
        });
    }, [value, state]);

    function reset() {
        setState("initial");
    }

    function start() {
        setState("in-progress");
    }

    function done() {
        setState((state) =>
            state === "initial" || state === "in-progress"
                ? "completing"
                : state,
        );
    }

    return { state, value, start, done, reset };
}

function randMaxExcluded(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randMaxIncluded(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useInterval(callback, delay) {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            tick();

            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
