export default function constructPostData(blogSettings, variablesNames = []) {
    if (variablesNames.length === 0) {
        return blogSettings;
    }

    const data = {};
    for (const variableName of variablesNames) {
        data[variableName] = blogSettings[variableName];
    }

    return data;
}
