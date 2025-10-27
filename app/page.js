"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Home() {
    return (
        <div id="HomePage" className="page">
            <div className="box">
                <div className="flex flex-col font-normal">
                    <main className="flex flex-col space-y-8">
                        <Title />
                        <div className="text-center">
                            A developer from Romania.
                        </div>
                    </main>
                </div>
                <div>
                    <h2>Projects showcase</h2>
                </div>
            </div>
            <span
                dangerouslySetInnerHTML={{
                    __html: `<!-- Website inspired by https://swajp.me/ -->`,
                }}
            ></span>
        </div>
    );
}

const TitleTextOptions = [
    ["implementing performant solutions", "oklch(72.3% 0.219 149.579)"],
    ["creating open-source projects", "oklch(54.6% 0.245 262.881)"],
    ["working on beautiful websites", "oklch(59.2% 0.249 0.584)"],
    ["cutting down cost", "oklch(55.8% 0.288 302.321)"],
];

function Title() {
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
            <div
                className="h-[120px] transition-colors delay-500"
                style={{ color: TitleTextOptions[index][1] }}
            >
                <AnimatePresence mode="wait">
                    <motion.p
                        key={TitleTextOptions[index][0]}
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5 }}
                    >
                        {TitleTextOptions[index][0]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </h1>
    );
}
