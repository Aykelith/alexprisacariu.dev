// Methods
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

// Constants
import ProjectsDirectoryPath from "@/constants/server/ProjectsDirectoryPath";
import ProjectMDXFileName from "@/constants/server/ProjectMDXFileName";

const ProjectsDataVariablesNames = [
    "title",
    "description",
    "coverShortProjectImage",
    "tags",
    "pinned",
];

async function getProjectsDirNames(includeIgnoredProjects = false) {
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

async function readProjectSource(projectDirectoryName) {
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

function constructProjectData(projectSettings) {
    const data = {};
    for (const variableName of ProjectsDataVariablesNames) {
        data[variableName] = projectSettings[variableName];
    }
    return data;
}

export default async function getHomeProjects(includeIgnoredProjects = false) {
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

        if (!projectSettings.pinned) {
            continue;
        }

        data.push(constructProjectData(projectSettings));
    }

    return data;
}
