/**
 * Adds default values to the post data
 * 
 * @param {Object} data - the post data
 * @param {String[]} variablesNames - the names of the variables to be checked
 * @returns {Object} the post data with default values
 */
export default function addPostDataDefaults(data, variablesNames = []) {
    if ((variablesNames.length === 0 && !data.thumbnail) || (variablesNames.includes("thumbnail") && !data.thumbnail)) {
        data.thumbnail = {
            png: "/imgs/posts/no-thumbnail.png",
            webp: "/imgs/posts/no-thumbnail.webp"
        };
    }

    if ((variablesNames.length === 0 && !data.cover) || (variablesNames.includes("cover") && !data.cover)) {
        data.cover = {
            noImage: true,
            png: "/imgs/posts/no-cover.png",
            webp: "/imgs/posts/no-cover.webp"
        };
    }

    return data;
}
