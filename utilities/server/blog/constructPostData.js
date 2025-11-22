// Methods
import addPostDataDefaults from "./addPostDataDefaults";

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
