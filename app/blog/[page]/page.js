// Methods
import getBlogPosts from "@/utilities/server/blog/getBlogPosts";
import getPostsDirNames from "@/utilities/server/blog/getPostsDirNames";

// Components
import { ProgressBarLink } from "@/components/progress_bar";

// Constants
import PostsPerPage from "@/constants/PostsPerPage";

export default async function BlogPage({ params }) {
    const { page } = await params;
    const posts = await getBlogPosts(page);

    return (
        <div id="BlogPage" className="page">
            <div className="box">
                <h1 className="text-4xl font-bold">Blog posts</h1>
                <div className="text-muted-foreground">bla bla bla</div>
                <div className="">
                    {posts.map((post) => {
                        return (
                            <ProgressBarLink
                                key={post.title}
                                className="post-card"
                                href={`/posts/${post.urlPart}`}
                            >
                                <div className="post-img">
                                    <img src={post.coverSmall} />
                                </div>
                                <div className="post-body">
                                    <div className="post-title">
                                        {post.title}
                                    </div>
                                    <div className="post-desc">
                                        {post.description}
                                    </div>
                                    <div className="flex-1 min-h-2"></div>
                                    <div className="post-tags">
                                        {post.tags.map((tag, index) => {
                                            if (index >= 5) {
                                                if (index == 5) {
                                                    return (
                                                        <div
                                                            key="more"
                                                            className="tag"
                                                        >
                                                            ...
                                                        </div>
                                                    );
                                                }

                                                return null;
                                            }

                                            return (
                                                <div key={tag} className="tag">
                                                    {tag}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </ProgressBarLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const postsCount = (await getPostsDirNames()).length;
    const pages = Math.ceil(postsCount / PostsPerPage);

    let params = [];
    for (let i = 0; i < pages; i += 1) {
        params.push({ page: (i + 1).toString() });
    }

    return params;
}
