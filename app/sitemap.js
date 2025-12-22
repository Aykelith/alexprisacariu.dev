import getPostsDirNames from "@/utilities/server/blog/getPostsDirNames";
import readPostSource from "@/utilities/server/blog/readPostSource";
import getProjectsDirNames from "@/utilities/server/projects/getProjectsDirNames";
import readProjectSource from "@/utilities/server/projects/readProjectSource";
import matter from "gray-matter";

export const dynamic = "force-static";

const BASE_URL = "https://alexprisacariu.dev";

export default async function sitemap() {
    const routes = [
        "",
        "/about",
        "/blog",
        "/cv",
        "/projects",
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
    }));

    const postDirNames = await getPostsDirNames();

    const posts = await Promise.all(
        postDirNames.map(async (dirName) => {
            try {
                const source = await readPostSource(dirName);
                const { data } = matter(source);

                return {
                    url: `${BASE_URL}/posts/${dirName}`,
                    lastModified: data.publishedOn ? new Date(data.publishedOn) : new Date(),
                    changeFrequency: "weekly",
                    priority: 0.8,
                };
            } catch (error) {
                console.error(`Error processing post ${dirName} for sitemap:`, error);
                return null;
            }
        })
    );

    const projectDirNames = await getProjectsDirNames();

    const projects = await Promise.all(
        projectDirNames.map(async (dirName) => {
            try {
                const source = await readProjectSource(dirName);
                const { data } = matter(source);

                return {
                    url: `${BASE_URL}/projects/${dirName}`,
                    lastModified: data.publishedOn ? new Date(data.publishedOn) : new Date(),
                    changeFrequency: "weekly",
                    priority: 0.8,
                };
            } catch (error) {
                console.error(`Error processing project ${dirName} for sitemap:`, error);
                return null;
            }
        })
    );

    return [...routes, ...posts.filter(Boolean), ...projects.filter(Boolean)];
}
