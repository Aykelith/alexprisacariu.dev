// Methods
import getProjects from "./getProjects";

/** @type {String[]} */
const ProjectsDataVariablesNames = [
    "title",
    "description",
    "coverShortProjectImage",
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
    return getProjects(
        ProjectsDataVariablesNames,
        (projectSettings) => !!projectSettings.pinned,
        includeIgnoredProjects,
    );
}
