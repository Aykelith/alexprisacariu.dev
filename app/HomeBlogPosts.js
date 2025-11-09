// Methods
import getHomePosts from "@/utilities/server/blog/getHomePosts";

// Components
import { ProgressBarLink } from "@/components/progress_bar";

export default async function HomeBlogPosts() {
    const posts = await getHomePosts();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4">
            {posts.map((post) => {
                return (
                    <ProgressBarLink
                        key={post.title}
                        className="post-card"
                        href={`/blog/${post.id}`}
                    >
                        <div className="post-img">
                            <img src={post.coverSmall} />
                        </div>
                        <div className="post-body">
                            <div className="post-title">{post.title}</div>
                            <div className="post-desc">{post.description}</div>
                            <div className="flex-1 min-h-2"></div>
                            <div className="post-tags">
                                {post.tags.map((tag, index) => {
                                    if (index >= 5) {
                                        if (index == 5) {
                                            return (
                                                <div key="more" className="tag">
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
            <ProgressBarLink
                href="/blog"
                className="post-card-base flex justify-center items-center"
            >
                See more
            </ProgressBarLink>
        </div>
    );
}
