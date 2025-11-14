// Methods
import getPostsDirNames from "./getPostsDirNames";
import readPostSettings from "./readPostSettings";
import constructPostData from "./constructPostData";

const PostsDataVariablesNames = ["title", "tags", "publishedOn", "coverSmall"];

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
                PostsDataVariablesNames,
            ),
        );
    }

    return posts;
}
