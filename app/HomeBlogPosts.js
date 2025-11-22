// Methods
import getHomePosts from "@/utilities/server/blog/getHomePosts";

// Components
import BlogPostsList from "@/components/BlogPostsList";

export default async function HomeBlogPosts() {
    const posts = await getHomePosts();

    return <BlogPostsList posts={posts} addSeeMore={true} />;
}