/**
 * Generates a random ID
 * 
 * @returns {string} the generated ID
 */
export default function generateID() {
    return (
        Date.now().toString(36) +
        Math.random().toString(36).substring(2, 12).padStart(12, 0)
    );
}
