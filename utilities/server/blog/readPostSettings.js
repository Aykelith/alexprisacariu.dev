// Methods
import matter from "gray-matter";
import readPostSource from "./readPostSource";

export default async function readPostSettings(postDirectoryName) {
    let source;
    try {
        source = await readPostSource(postDirectoryName);
    } catch (error) {
        throw new Error(
            `Failed to read the source of blog post "${postDirectoryName}": ${error}`,
        );
    }

    const { data } = matter(source);
    return data;
}
