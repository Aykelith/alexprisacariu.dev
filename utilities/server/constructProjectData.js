export default function constructProjectData(
    projectSettings,
    variablesNames = [],
) {
    if (variablesNames.length === 0) {
        return projectSettings;
    }

    const data = {};
    for (const variableName of variablesNames) {
        data[variableName] = projectSettings[variableName];
    }
    return data;
}
