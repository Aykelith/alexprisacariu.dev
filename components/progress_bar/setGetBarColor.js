"use client";

import calculateRandomProgressBarColor from "./calculateRandomProgressBarColor";

let progress_bar_color = calculateRandomProgressBarColor();

export function setBarColor(color) {
    progress_bar_color = color;
}

export function getBarColor() {
    return progress_bar_color;
}
