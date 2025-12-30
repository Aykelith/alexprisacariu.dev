
import getPostsDirNames from "@/utilities/server/blog/getPostsDirNames";

export const dynamic = 'force-static';
import readPostSource from "@/utilities/server/blog/readPostSource";
import matter from "gray-matter";

const BaseURL = "https://alexprisacariu.dev";

export async function GET() {
    const postsDirNames = await getPostsDirNames();

    // Sort posts by date (newest first) - similar logic to getBlogPosts but we need the date first
    const posts = [];

    for (const dirName of postsDirNames) {
        try {
            const source = await readPostSource(dirName);
            const { data, content } = matter(source);

            // Fallback for description
            let description = data.seoDescription;
            if (!description) {
                // Get first paragraph
                description = content.trim().split(/\n\s*\n/)[0];
                // Remove markdown links/formatting if possible or keep it simple
                // For now, let's just keep the text simplistic as RSS readers format text differently
                // A simple regex to remove markdown links [text](url) -> text
                description = description.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
            }

            posts.push({
                ...data,
                urlPart: dirName,
                description,
                date: new Date(data.publishedOn)
            });
        } catch (error) {
            console.error(`Error reading post ${dirName}:`, error);
        }
    }

    // Sort by date descending
    posts.sort((a, b) => b.date - a.date);

    const items = posts.map((post) => {
        const link = `${BaseURL}/posts/${post.urlPart}`;
        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description><![CDATA[${post.description || ""}]]></description>
      ${post.tags ? post.tags.map(tag => `<category>${tag}</category>`).join('') : ''}
    </item>`;
    }).join("");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Alexandru Prisacariu: The Website</title>
    <link>${BaseURL}</link>
    <description>Place where Alexandru Prisacariu posts things</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "text/xml",
        },
    });
}
