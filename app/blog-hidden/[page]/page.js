// Methods
import getBlogPosts from "@/utilities/server/blog/getBlogPosts";
import getPostsCount from "@/utilities/server/blog/getPostsCount";

// Components
import BlogListing from "@/components/BlogListing";

// Constants
import PostsPerPage from "@/constants/PostsPerPage";

export const metadata = {
    robots: { index: false, follow: false },
    title: "All Blog Posts (including hidden)",
};

export default async function BlogHiddenPage({ params }) {
    const { page } = await params;
    const pageInt = parseInt(page);
    const posts = await getBlogPosts(pageInt, true, true);
    const postsCount = await getPostsCount(true);
    const totalPages = Math.ceil(postsCount / PostsPerPage);

    return (
        <BlogListing
            posts={posts}
            pageInt={pageInt}
            totalPages={totalPages}
            hrefPrefix="/blog-hidden"
            title="Blog posts (all)"
            description="All posts including hidden ones"
        />
    );
}

export async function generateStaticParams() {
    const postsCount = await getPostsCount(true);
    const pages = Math.ceil(postsCount / PostsPerPage);

    const params = [];
    for (let i = 0; i < pages; i += 1) {
        params.push({ page: (i + 1).toString() });
    }

    return params;
}
