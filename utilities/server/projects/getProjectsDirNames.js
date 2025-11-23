// Methods
import fs from "fs/promises";

// Constants
import ProjectsDirectoryPath from "@/constants/server/ProjectsDirectoryPath";

/**
 * Gets the projects directories names
 * 
 * @param {boolean} includeIgnoredProjects - whether to include ignored projects
 * @returns {Promise<String[]>} the projects directories names
 */
export default async function getProjectsDirNames(
    includeIgnoredProjects = false,
) {
    let projectsDirectoriesNames;
    try {
        projectsDirectoriesNames = await fs.readdir(ProjectsDirectoryPath);
    } catch (error) {
        throw new Error(
            `Failed to read the directory at "${ProjectsDirectoryPath}": ${error}`,
        );
    }

    return projectsDirectoriesNames.filter((projectDirectoryName) => {
        return includeIgnoredProjects || !projectDirectoryName.startsWith("_");
    });
}
