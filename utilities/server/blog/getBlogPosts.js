// Methods
import getPostsDirNames from "./getPostsDirNames";
import readPostSettings from "./readPostSettings";
import constructPostData from "./constructPostData";

// Constants
import PostsPerPage from "@/constants/PostsPerPage";

const PostsDataVariablesNames = ["title", "tags", "publishedOn", "coverSmall"];

export default async function getBlogPosts(page, includeIgnoredPosts = false) {
    const dirNames = (await getPostsDirNames(includeIgnoredPosts))
        .reverse()
        .slice((page - 1) * PostsPerPage, page * PostsPerPage);

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
