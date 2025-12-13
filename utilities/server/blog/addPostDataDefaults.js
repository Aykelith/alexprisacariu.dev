/**
 * Adds default values to the post data
 * 
 * @param {Object} data - the post data
 * @param {String[]} variablesNames - the names of the variables to be checked
 * @returns {Object} the post data with default values
 */
export default function addPostDataDefaults(data, variablesNames = []) {
    if ((variablesNames.length === 0 && !data.thumbnail) || (variablesNames.includes("thumbnail") && !data.thumbnail)) {
        data.thumbnail = "/imgs/posts/placeholder/cover-small.png";
    }

    if ((variablesNames.length === 0 && !data.cover) || (variablesNames.includes("cover") && !data.cover)) {
        data.cover = "/imgs/posts/placeholder/cover-large.png";
    }

    return data;
}
