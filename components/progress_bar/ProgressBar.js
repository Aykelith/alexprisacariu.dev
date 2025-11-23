"use client";

// Methods
import { motion, useMotionTemplate } from "motion/react";
import GlobalProgressForBrowserNavigation from "./GlobalProgressForBrowserNavigation";
import useProgress from "./useProgress";

//= Components
import { AnimatePresence } from "motion/react";

//= Constants
import ProgressBarContext from "./ProgressBarContext";
import { getBarColor } from "./setGetBarColor";

/**
 * The progress bar component
 * 
 * @param {Object} props - the props of the component
 * @param {String} props.className - the class name of the component
 * @param {JSX.Element} props.children - the children of the component
 * @returns {JSX.Element} the progress bar component
 */
export default function ProgressBar({ className, children }) {
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
                            backgroundColor: getBarColor(),
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
