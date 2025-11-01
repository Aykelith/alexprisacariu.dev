// Methods
import { useContext } from "react";

//= Constants
import ProgressBarContext from "./ProgressBarContext";

export default function useProgressBar() {
    let progress = useContext(ProgressBarContext);

    if (progress === null) {
        throw new Error("Need to be inside provider");
    }

    return progress;
}
