"use client";

import calculateRandomProgressBarColor from "./calculateRandomProgressBarColor";

let progress_bar_color = calculateRandomProgressBarColor();

/**
 * Sets the progress bar color
 * 
 * @param {String} color - the color
 */
export function setBarColor(color) {
    progress_bar_color = color;
}

/**
 * Gets the progress bar color
 * 
 * @returns {String} the progress bar color
 */
export function getBarColor() {
    return progress_bar_color;
}
