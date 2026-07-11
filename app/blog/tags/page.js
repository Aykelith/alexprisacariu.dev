// Methods

// Components
import TagsListing from "@/components/TagsListing";
import getBlogTagSlugs from "@/utilities/server/blog/getBlogTagSlugs";

export const metadata = {
  title: "Tags - Blog",
  description: "Browse blog posts by tag.",
};

export default async function BlogTagsPage() {
  const tags = (await getBlogTagSlugs(false)).sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <TagsListing
      tags={tags}
      hrefPrefix="/blog"
      title="Tags"
      description="Browse blog posts by tag"
    />
  );
}
