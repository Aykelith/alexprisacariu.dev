// Methods

// Components
import BlogListing from "@/components/BlogListing";
// Constants
import PostsPerPage from "@/constants/PostsPerPage";
import getTagDisplayName from "@/utilities/getTagDisplayName";
import getBlogPosts from "@/utilities/server/blog/getBlogPosts";
import getBlogTagSlugs from "@/utilities/server/blog/getBlogTagSlugs";
import getPostsCount from "@/utilities/server/blog/getPostsCount";
import slugifyTag from "@/utilities/slugifyTag";

// NOTE: outer [page] param holds "tag-<slug>"; inner [tagPage] holds page number.
// Naming is forced by Next.js (can't add a sibling slug to app/blog-hidden/[page]).

export const metadata = {
  robots: { index: false, follow: false },
  title: "Blog posts by tag (including hidden)",
};

export default async function BlogHiddenTagPage({ params }) {
  const { page, tagPage } = await params;
  const tagSlug = page.replace(/^tag-/, "");
  const pageInt = parseInt(tagPage, 10);

  const posts = await getBlogPosts(pageInt, true, true, tagSlug);
  const postsCount = await getPostsCount(true, tagSlug);
  const totalPages = Math.ceil(postsCount / PostsPerPage);

  // Any post on this page carries the tag → recover original casing.
  const originalTag = posts[0]?.tags?.find((t) => slugifyTag(t) === tagSlug);
  const tagName = originalTag ? getTagDisplayName(originalTag) : tagSlug;

  return (
    <BlogListing
      posts={posts}
      pageInt={pageInt}
      totalPages={totalPages}
      hrefPrefix={`/blog-hidden/tag-${tagSlug}`}
      title={`Posts tagged "${tagName}" (all)`}
      description={`All posts tagged ${tagName}, including hidden ones`}
    />
  );
}

export async function generateStaticParams() {
  const tags = await getBlogTagSlugs(true);
  const params = [];
  for (const { slug, count } of tags) {
    const pages = Math.ceil(count / PostsPerPage);
    for (let i = 1; i <= pages; i++) {
      params.push({ page: `tag-${slug}`, tagPage: i.toString() });
    }
  }
  return params;
}
