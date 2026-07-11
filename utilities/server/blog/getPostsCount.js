// Methods
import matter from "gray-matter";
import slugifyTag from "@/utilities/slugifyTag";
import getPostsDirNames from "./getPostsDirNames";
import readPostSource from "./readPostSource";

export default async function getPostsCount(
  includeIgnoredPosts = false,
  tagSlug = null,
) {
  const dirNames = await getPostsDirNames();
  if (includeIgnoredPosts && !tagSlug) return dirNames.length;

  let count = 0;
  for (const dirName of dirNames) {
    const source = await readPostSource(dirName);
    const { data } = matter(source);
    if (!includeIgnoredPosts && data.hide) continue;
    if (tagSlug && !(data.tags || []).some((t) => slugifyTag(t) === tagSlug))
      continue;
    count++;
  }
  return count;
}
