// Methods
import fs from "fs/promises";

// Constants
import BlogPostsDirectoryPath from "@/constants/server/BlogPostsDirectoryPath";

/**
 * Gets the posts directories names
 * 
 * @param {boolean} includeIgnoredPosts - whether to include ignored posts
 * @returns {Promise<String[]>} the posts directories names
 */
export default async function getPostsDirNames(includeIgnoredPosts = false) {
    let postsDirectoriesNames;
    try {
        postsDirectoriesNames = await fs.readdir(BlogPostsDirectoryPath);
    } catch (error) {
        throw new Error(
            `Failed to read the directory at "${BlogPostsDirectoryPath}": ${error}`,
        );
    }

    return postsDirectoriesNames.filter((postDirectoryName) => {
        return includeIgnoredPosts || !postDirectoryName.startsWith("_");
    });
}
