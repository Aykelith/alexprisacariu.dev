"use client";

// Methods
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import clsx from "clsx";

// Components
import { AnimatePresence } from "motion/react";

const TitleTextOptions = [
    ["implementing\nperformant solutions", "oklch(72.3% 0.219 149.579)"],
    ["creating open-source\nprojects", "oklch(54.6% 0.245 262.881)"],
    ["working on beautiful\nwebsites", "oklch(59.2% 0.249 0.584)"],
    ["cutting down\ncost", "oklch(55.8% 0.288 302.321)"],
];

const TitleVerySmallTextOptions = [
    ["implementing\nperformant\nsolutions", "oklch(72.3% 0.219 149.579)"],
    ["creating\nopen-source\nprojects", "oklch(54.6% 0.245 262.881)"],
    ["working\non beautiful\nwebsites", "oklch(59.2% 0.249 0.584)"],
    ["cutting\ndown\ncost", "oklch(55.8% 0.288 302.321)"],
];

export default function Title() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % TitleTextOptions.length);
        }, 5000);
        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <h1 className="font-accent font-bold text-4xl md:text-5xl lg:text-6xl text-center mt-16">
            Hello. I'm{" "}
            <TitleText
                index={index}
                texts={TitleTextOptions}
                className="h-[120px] hidden xs:block"
            />
            <TitleText
                index={index}
                texts={TitleVerySmallTextOptions}
                className="h-[140px] block xs:hidden"
            />
        </h1>
    );
}

function TitleText({ index, texts, className }) {
    return (
        <div
            className={clsx("transition-colors delay-500 whitespace-pre", className)}
            style={{ color: texts[index][1] }}
        >
            <AnimatePresence mode="wait">
                <motion.p
                    key={texts[index][0]}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5 }}
                >
                    {texts[index][0]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
