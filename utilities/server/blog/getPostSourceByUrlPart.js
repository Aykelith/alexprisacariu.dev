// Method
import readPostSource from "./readPostSource";

/**
 * Gets the post source by url part
 * 
 * @param {String} urlPart - the url part of the post
 * @returns {Promise<String>} the post source
 */
export default async function getPostSourceByUrlPart(urlPart) {
    return readPostSource(urlPart);
}
