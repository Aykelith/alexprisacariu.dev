// Methods

// Components
import TagsListing from "@/components/TagsListing";
import getBlogTagSlugs from "@/utilities/server/blog/getBlogTagSlugs";

export const metadata = {
  robots: { index: false, follow: false },
  title: "Tags - Blog (including hidden)",
};

export default async function BlogHiddenTagsPage() {
  const tags = (await getBlogTagSlugs(true)).sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <TagsListing
      tags={tags}
      hrefPrefix="/blog-hidden"
      title="Tags (all)"
      description="Browse all posts by tag, including hidden ones"
    />
  );
}
