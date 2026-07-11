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

    const posts = [];
    for (const dirName of dirNames) {
        if (posts.length >= 3) {
            break;
        }

        const postSettings = await readPostSettings(dirName);

        if (!includeIgnoredPosts && postSettings.hide) {
            continue;
        }

        posts.push(
            constructPostData(
                postSettings,
                dirName,
                HomePostsDataVariablesNames,
            ),
        );
    }

    return posts;
}
