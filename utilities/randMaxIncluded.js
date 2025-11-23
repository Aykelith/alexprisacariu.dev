/**
 * Generates a random number between min and max (included)
 * 
 * @param {number} min - the minimum value
 * @param {number} max - the maximum value
 * @returns {number} the generated number
 */
export default function randMaxIncluded(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
