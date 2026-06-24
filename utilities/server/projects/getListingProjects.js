// Methods
import getProjects from "./getProjects";

const ProjectsDataVariablesNames = [
    "title",
    "description",
    "thumbnail",
    "tags",
    "yearsActive",
    "status",
    "started_on",
    "last_activity_on",
    "urlPart",
];

/**
 * Gets the listing projects
 * 
 * @param {boolean} includeIgnoredProjects - whether to include ignored projects
 * @returns {Promise<Project[]>} the listing projects
 */
export default async function getListingProjects(
    includeIgnoredProjects = false,
) {
    return getProjects(
        ProjectsDataVariablesNames,
        null,
        includeIgnoredProjects,
    );
}
