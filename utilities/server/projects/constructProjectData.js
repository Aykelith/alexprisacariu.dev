// Methods
import transformProjectData from "./transformProjectData";

/**
 * Constructs the project data
 * 
 * @param {Object} projectSettings - the project settings
 * @param {String[]} variablesNames - the names of the variables to be checked
 * @returns {Object} the project data
 */
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

    return transformProjectData(data);
}
