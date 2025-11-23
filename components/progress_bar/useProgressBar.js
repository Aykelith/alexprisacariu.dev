// Methods
import { useContext } from "react";

//= Constants
import ProgressBarContext from "./ProgressBarContext";

/**
 * The use progress bar hook
 * 
 * @returns {Object} the use progress bar hook
 */
export default function useProgressBar() {
    let progress = useContext(ProgressBarContext);

    if (progress === null) {
        throw new Error("Need to be inside provider");
    }

    return progress;
}
