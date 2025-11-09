// Methods
import matter from "gray-matter";
import constructPostData from "./constructPostData";
import readPostSource from "./readPostSource";
import getPostsDirNames from "./getPostsDirNames";

export default async function getPosts(
    postsVariablesNames,
    extraCheckPost,
    includeIgnoredPosts = false,
) {
    let postsDirectoriesNames;
    try {
        postsDirectoriesNames = await getPostsDirNames(includeIgnoredPosts);
    } catch (error) {
        throw new Error(`Failed to read the blog posts names: ${error}`);
    }

    let data = [];
    for (const postDirectoryName of postsDirectoriesNames) {
        let source;
        try {
            source = await readPostSource(postDirectoryName);
        } catch (error) {
            throw new Error(
                `Failed to read the source of blog post "${postDirectoryName}": ${error}`,
            );
        }

        const { data: postSettings } = matter(source);

        if (extraCheckPost) {
            if (!extraCheckPost(postSettings)) {
                continue;
            }
        }

        data.push(constructPostData(postSettings, postsVariablesNames));
    }

    return data;
}
