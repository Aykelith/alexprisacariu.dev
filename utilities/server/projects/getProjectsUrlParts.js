// Methods
import getProjectsDirNames from "./getProjectsDirNames";

/**
 * Gets the projects url parts
 * 
 * @returns {Promise<String[]>} the projects url parts
 */
export default async function getProjectsUrlParts() {
    return getProjectsDirNames();
}
