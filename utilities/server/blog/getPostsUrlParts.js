// Methods
import getPostsDirNames from "./getPostsDirNames";

/**
 * Gets the posts url parts
 * 
 * @returns {Promise<String[]>} the posts url parts
 */
export default async function getPostsUrlParts() {
    return getPostsDirNames();
}
