// Methods
import fs from "fs/promises";

// Constants
import ProjectsDirectoryPath from "@/constants/server/ProjectsDirectoryPath";
import ProjectsByUrlPartFileName from "@/constants/server/ProjectsByUrlPartFileName";

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
        return (
            (includeIgnoredProjects || !projectDirectoryName.startsWith("_")) &&
            projectDirectoryName !== ProjectsByUrlPartFileName
        );
    });
}
