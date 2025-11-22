// Methods
import getPostsDirNames from "./getPostsDirNames";
import readPostSource from "./readPostSource";
import matter from "gray-matter";
import constructPostData from "./constructPostData";

// Constants
import PostsPerPage from "@/constants/PostsPerPage";

const PostsDataVariablesNames = ["title", "tags", "publishedOn", "coverSmall", "coverLarge"];

export default async function getBlogPosts(page, includeIgnoredPosts = false, addFirstParagraph = false) {
    const dirNames = (await getPostsDirNames(includeIgnoredPosts))
        .reverse()
        .slice((page - 1) * PostsPerPage, page * PostsPerPage);

    const posts = [];
    for (const dirName of dirNames) {
        let source;
        try {
            source = await readPostSource(dirName);
        } catch (error) {
            throw new Error(
                `Failed to read the source of blog post "${dirName}": ${error}`,
            );
        }

        const { data, content } = matter(source);

        const post = constructPostData(
            data,
            dirName,
            PostsDataVariablesNames,
        );

        if (addFirstParagraph) {
            post.firstParagraph = content.trim().split(/\n\s*\n/)[0];
        }

        posts.push(post);
    }

    return posts;
}
