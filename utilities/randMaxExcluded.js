/**
 * Generates a random number between min and max (excluded)
 * 
 * @param {number} min - the minimum value
 * @param {number} max - the maximum value
 * @returns {number} the generated number
 */
export default function randMaxExcluded(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
