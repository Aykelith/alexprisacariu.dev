// Methods
import addPostDataDefaults from "./addPostDataDefaults";

/**
 * Constructs the post data
 * 
 * @param {Object} blogSettings - the blog settings
 * @param {String} postDirectoryName - the directory name of the post
 * @param {String[]} variablesNames - the names of the variables to be checked
 * @returns {Object} the post data
 */
export default function constructPostData(
    blogSettings,
    postDirectoryName,
    variablesNames = [],
) {
    if (variablesNames.length === 0) {
        return addPostDataDefaults(blogSettings, variablesNames);
    }

    const data = {};
    for (const variableName of variablesNames) {
        data[variableName] = blogSettings[variableName];
    }

    addPostDataDefaults(data, variablesNames);
    data.urlPart = postDirectoryName;

    return data;
}
