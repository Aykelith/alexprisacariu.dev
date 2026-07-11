// Methods

import matter from "gray-matter";
// Constants
import PostsPerPage from "@/constants/PostsPerPage";
import slugifyTag from "@/utilities/slugifyTag";
import constructPostData from "./constructPostData";
import getPostsDirNames from "./getPostsDirNames";
import readPostSource from "./readPostSource";

const PostsDataVariablesNames = [
  "title",
  "tags",
  "publishedOn",
  "thumbnail",
  "cover",
];

/**
 * Gets the blog posts
 *
 * @param {number} page - the page number
 * @param {boolean} includeIgnoredPosts - whether to include ignored posts
 * @param {boolean} addFirstParagraph - whether to add the first paragraph
 * @param {string} [tagSlug] - if set, keep only posts having a tag with this slug
 * @returns {Promise<Post[]>} the blog posts
 */
export default async function getBlogPosts(
  page,
  includeIgnoredPosts = false,
  addFirstParagraph = false,
  tagSlug = null,
) {
  const allDirNames = (await getPostsDirNames()).reverse();

  const allPosts = [];
  for (const dirName of allDirNames) {
    let source;
    try {
      source = await readPostSource(dirName);
    } catch (error) {
      throw new Error(
        `Failed to read the source of blog post "${dirName}": ${error}`,
      );
    }

    const { data, content } = matter(source);

    if (!includeIgnoredPosts && data.hide) {
      continue;
    }

    if (tagSlug && !(data.tags || []).some((t) => slugifyTag(t) === tagSlug)) {
      continue;
    }

    const post = constructPostData(data, dirName, PostsDataVariablesNames);

    if (addFirstParagraph) {
      post.firstParagraph = content.trim().split(/\n\s*\n/)[0];
    }

    allPosts.push(post);
  }

  return allPosts.slice((page - 1) * PostsPerPage, page * PostsPerPage);
}
