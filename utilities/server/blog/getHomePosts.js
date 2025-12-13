// Methods
import getPostsDirNames from "./getPostsDirNames";
import readPostSettings from "./readPostSettings";
import constructPostData from "./constructPostData";

export const HomePostsDataVariablesNames = ["title", "tags", "publishedOn", "thumbnail"];

/**
 * Gets the home posts
 * 
 * @param {boolean} includeIgnoredPosts - whether to include ignored posts
 * @returns {Promise<Post[]>} the home posts
 */
export default async function getHomePosts(includeIgnoredPosts = false) {
    let dirNames = await getPostsDirNames(includeIgnoredPosts);
    dirNames.reverse();
    dirNames = dirNames.slice(0, 3);

    const posts = [];
    for (const dirName of dirNames) {
        posts.push(
            constructPostData(
                await readPostSettings(dirName),
                dirName,
                HomePostsDataVariablesNames,
            ),
        );
    }

    return posts;
}
