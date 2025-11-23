/**
 * Adds default values to the post data
 * 
 * @param {Object} data - the post data
 * @param {String[]} variablesNames - the names of the variables to be checked
 * @returns {Object} the post data with default values
 */
export default function addPostDataDefaults(data, variablesNames = []) {
    if (variablesNames.length === 0 || (variablesNames.includes("coverSmall") && !data.coverSmall)) {
        data.coverSmall = "/imgs/posts/placeholder/cover-small.png";
    }

    if (variablesNames.length === 0 || (variablesNames.includes("coverLarge") && !data.coverLarge)) {
        data.coverLarge = "/imgs/posts/placeholder/cover-large.png";
    }

    return data;
}
