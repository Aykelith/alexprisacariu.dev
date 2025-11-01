// Methods
import randMaxExcluded from "@/utilities/randMaxExcluded";

// Constants
import PossibleProgressBarColors from "./PossibleProgressBarColors";

export default function calculateRandomProgressBarColor(previousColor) {
    let index = randMaxExcluded(0, PossibleProgressBarColors.length);
    let randomProgressBarColor = PossibleProgressBarColors[index];

    if (previousColor === randomProgressBarColor) {
        if (index + 1 < PossibleProgressBarColors.length) {
            index += 1;
        } else {
            index = 0;
        }

        randomProgressBarColor = PossibleProgressBarColors[index];
    }

    return randomProgressBarColor;
}
