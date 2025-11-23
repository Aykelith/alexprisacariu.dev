// Method
import readProjectSource from "./readProjectSource";

/**
 * Gets the project source by url part
 * 
 * @param {String} urlPart - the url part of the project
 * @returns {Promise<String>} the project source
 */
export default async function getProjectSourceByUrlPart(urlPart) {
    return readProjectSource(urlPart);
}
