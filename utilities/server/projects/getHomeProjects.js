// Methods
import getProjects from "./getProjects";

/** @type {String[]} */
const ProjectsDataVariablesNames = [
    "title",
    "description",
    "thumbnail",
    "tags",
    "pinned",
    "urlPart",
];

/**
 * Gets the home projects
 * 
 * @param {boolean} includeIgnoredProjects - whether to include ignored projects
 * @returns {Promise<Project[]>} the home projects
 */
export default async function getHomeProjects(includeIgnoredProjects = false) {
    const projects = await getProjects(
        ProjectsDataVariablesNames,
        (projectSettings) => !!projectSettings.pinned,
        includeIgnoredProjects,
    );

    projects.sort((a, b) => {
        return a.pinned - b.pinned;
    });

    return projects;
}
