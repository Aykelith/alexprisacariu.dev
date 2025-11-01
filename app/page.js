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
                        <div className="text-xl text-center -mt-1 max-w-140 self-center">
                            A developer from Romania. Passionate about finding
                            solutions and creating modern applications in any
                            technology.
                        </div>
                    </main>
                </div>
                <div>
                    <h2>Projects showcase</h2>
                    <div>Some projects I worked on</div>
                </div>
                <div>
                    <h2>Blog</h2>
                    <div>Sometimes I like to write</div>
                </div>
                <div>
                    <h2>About me</h2>
                    <div>Short info about me</div>
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
    ["implementing\nperformant solutions", "oklch(72.3% 0.219 149.579)"],
    ["creating open-source\nprojects", "oklch(54.6% 0.245 262.881)"],
    ["working on beautiful\nwebsites", "oklch(59.2% 0.249 0.584)"],
    ["cutting down\ncost", "oklch(55.8% 0.288 302.321)"],
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
                className="h-[120px] transition-colors delay-500 whitespace-pre"
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
