import matter from "gray-matter";
import getTagDisplayName from "@/utilities/getTagDisplayName";
import slugifyTag from "@/utilities/slugifyTag";
import getPostsDirNames from "./getPostsDirNames";
import readPostSource from "./readPostSource";

/**
 * Gets one entry per distinct tag slug, with display name and post count.
 *
 * @param {boolean} includeIgnoredPosts
 * @returns {Promise<{slug: string, name: string, count: number}[]>}
 */
export default async function getBlogTagSlugs(includeIgnoredPosts = false) {
  const dirNames = await getPostsDirNames();
  const map = new Map(); // slug -> { slug, name, count }

  for (const dirName of dirNames) {
    const { data } = matter(await readPostSource(dirName));
    if (!includeIgnoredPosts && data.hide) continue;
    for (const tag of data.tags || []) {
      const slug = slugifyTag(tag);
      const entry = map.get(slug);
      if (entry) entry.count += 1;
      else map.set(slug, { slug, name: getTagDisplayName(tag), count: 1 });
    }
  }

  return Array.from(map.values());
}
