// Methods
import fs from "node:fs/promises";
import path from "node:path";

// Constants
import BlogPostsDirectoryPath from "@/constants/server/BlogPostsDirectoryPath";
import BlogPostMDXFileName from "@/constants/server/BlogPostMDXFileName";

/**
 * Reads the post source
 * 
 * @param {String} postDirectoryName - the directory name of the post
 * @returns {Promise<String>} the post source
 */
export default async function readPostSource(postDirectoryName) {
    const postMdxFilePath = path.join(
        BlogPostsDirectoryPath,
        postDirectoryName,
        BlogPostMDXFileName,
    );

    let source;
    try {
        source = fs.readFile(postMdxFilePath, "utf-8");
    } catch (error) {
        throw new Error(
            `Failed to read the source of blog post "${postDirectoryName}": ${error}`,
        );
    }

    return source;
}
