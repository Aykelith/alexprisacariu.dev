// Methods
import { useEffect, useState } from "react";
import { useSpring } from "motion/react";
import useInterval from "@/utilities/useInterval";
import randMaxIncluded from "@/utilities/randMaxIncluded";

/**
 * The use progress hook
 * 
 * @returns {Object} the use progress hook
 */
export default function useProgress() {
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
