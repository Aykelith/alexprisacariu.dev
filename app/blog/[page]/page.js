// Methods
import getBlogPosts from "@/utilities/server/blog/getBlogPosts";
import getPostsCount from "@/utilities/server/blog/getPostsCount";

// Components
import BlogListing from "@/components/BlogListing";

// Constants
import PostsPerPage from "@/constants/PostsPerPage";

export default async function BlogPage({ params }) {
    const { page } = await params;
    const pageInt = parseInt(page);
    const posts = await getBlogPosts(pageInt, false, true);
    const postsCount = await getPostsCount(false);
    const totalPages = Math.ceil(postsCount / PostsPerPage);

    return (
        <BlogListing
            posts={posts}
            pageInt={pageInt}
            totalPages={totalPages}
            hrefPrefix="/blog"
            title="Blog posts"
            description="Sometimes I like to write"
        />
    );
}

export async function generateMetadata({ params }) {
    const { page } = await params;
    const pageInt = parseInt(page);
    const postsCount = await getPostsCount(false);
    const totalPages = Math.ceil(postsCount / PostsPerPage);

    const title = `Blog Posts - Page ${pageInt}`;
    const description = `Page ${pageInt} of ${totalPages}. Read the latest articles and tutorials.`;
    const baseUrl = "https://alexprisacariu.dev";
    const url = `${baseUrl}/blog/${pageInt}`;

    return {
        title,
        description,
        openGraph: { title, description, url, type: "website" },
        twitter: { card: "summary_large_image", title, description },
        alternates: { canonical: url },
    };
}

export async function generateStaticParams() {
    const postsCount = await getPostsCount(false);
    const pages = Math.ceil(postsCount / PostsPerPage);

    const params = [];
    for (let i = 0; i < pages; i += 1) {
        params.push({ page: (i + 1).toString() });
    }

    return params;
}
