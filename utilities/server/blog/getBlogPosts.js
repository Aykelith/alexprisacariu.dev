// Methods
import getPostsDirNames from "./getPostsDirNames";
import readPostSource from "./readPostSource";
import matter from "gray-matter";
import constructPostData from "./constructPostData";

// Constants
import PostsPerPage from "@/constants/PostsPerPage";

const PostsDataVariablesNames = ["title", "tags", "publishedOn", "thumbnail", "cover"];

/**
 * Gets the blog posts
 * 
 * @param {number} page - the page number
 * @param {boolean} includeIgnoredPosts - whether to include ignored posts
 * @param {boolean} addFirstParagraph - whether to add the first paragraph
 * @returns {Promise<Post[]>} the blog posts
 */
export default async function getBlogPosts(page, includeIgnoredPosts = false, addFirstParagraph = false) {
    const allDirNames = (await getPostsDirNames()).reverse();

    const allPosts = [];
    for (const dirName of allDirNames) {
        let source;
        try {
            source = await readPostSource(dirName);
        } catch (error) {
            throw new Error(
                `Failed to read the source of blog post "${dirName}": ${error}`,
            );
        }

        const { data, content } = matter(source);

        if (!includeIgnoredPosts && data.hide) {
            continue;
        }

        const post = constructPostData(data, dirName, PostsDataVariablesNames);

        if (addFirstParagraph) {
            post.firstParagraph = content.trim().split(/\n\s*\n/)[0];
        }

        allPosts.push(post);
    }

    return allPosts.slice((page - 1) * PostsPerPage, page * PostsPerPage);
}
