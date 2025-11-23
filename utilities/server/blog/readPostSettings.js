// Methods
import matter from "gray-matter";
import readPostSource from "./readPostSource";

/**
 * Reads the post settings
 * 
 * @param {String} postDirectoryName - the directory name of the post
 * @returns {Promise<Object>} the post settings
 */
export default async function readPostSettings(postDirectoryName) {
    let source;
    try {
        source = await readPostSource(postDirectoryName);
    } catch (error) {
        throw new Error(
            `Failed to read the source of blog post "${postDirectoryName}": ${error}`,
        );
    }

    const { data } = matter(source);
    return data;
}
