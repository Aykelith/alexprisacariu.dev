// Methods
import matter from "gray-matter";
import getPostsDirNames from "./getPostsDirNames";
import readPostSource from "./readPostSource";

export default async function getPostsCount(includeIgnoredPosts = false) {
    const dirNames = await getPostsDirNames();
    if (includeIgnoredPosts) return dirNames.length;

    let count = 0;
    for (const dirName of dirNames) {
        const source = await readPostSource(dirName);
        const { data } = matter(source);
        if (!data.hide) count++;
    }
    return count;
}
