// Methods
import matter from "gray-matter";
import getProjectsDirNames from "./getProjectsDirNames";
import readProjectSource from "./readProjectSource";
import constructProjectData from "./constructProjectData";

export default async function getProjects(
    projectsVariablesNames,
    extraCheckProject,
    includeIgnoredProjects = false,
) {
    let projectsDirectoriesNames;
    try {
        projectsDirectoriesNames = await getProjectsDirNames(
            includeIgnoredProjects,
        );
    } catch (error) {
        throw new Error(`Failed to read the projects names: ${error}`);
    }

    let data = [];
    for (const projectDirectoryName of projectsDirectoriesNames) {
        let source;
        try {
            source = await readProjectSource(projectDirectoryName);
        } catch (error) {
            throw new Error(
                `Failed to read the source of project "${projectDirectoryName}": ${error}`,
            );
        }

        const { data: projectSettings } = matter(source);

        if (extraCheckProject) {
            if (!extraCheckProject(projectSettings)) {
                continue;
            }
        }

        data.push({
            ...constructProjectData(projectSettings, projectsVariablesNames),
            urlPart: projectDirectoryName,
        });
    }

    return data;
}
