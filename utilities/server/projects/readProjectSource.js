// Methods
import fs from "node:fs/promises";
import path from "node:path";

// Constants
import ProjectsDirectoryPath from "@/constants/server/ProjectsDirectoryPath";
import ProjectMDXFileName from "@/constants/server/ProjectMDXFileName";

/**
 * Reads the project source
 * 
 * @param {String} projectDirectoryName - the directory name of the project
 * @returns {Promise<String>} the project source
 */
export default async function readProjectSource(projectDirectoryName) {
    const projectMdxFilePath = path.join(
        ProjectsDirectoryPath,
        projectDirectoryName,
        ProjectMDXFileName,
    );

    let source;
    try {
        source = fs.readFile(projectMdxFilePath, "utf-8");
    } catch (error) {
        throw new Error(
            `Failed to read the source of project "${projectDirectoryName}": ${error}`,
        );
    }

    return source;
}
