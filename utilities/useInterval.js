// Methods
import { useEffect, useRef } from "react";

/**
 * @param {function} callback - the function to be called
 * @param {number} delay - the delay in milliseconds
 */
export default function useInterval(callback, delay) {
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
