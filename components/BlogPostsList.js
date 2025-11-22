// Methods
import clsx from "clsx";

// Components
import { ProgressBarLink } from "@/components/progress_bar";

export default function BlogPostsList({ posts, addSeeMore, className }) {
    return (
        <div className={clsx("grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4", className)}>
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
                            <div className="post-title">{post.title}</div>
                            <div className="post-desc">{post.description}</div>
                            <div className="flex-1 min-h-2"></div>
                            <div className="post-tags">
                                {post.tags.map((tag, index) => {
                                    if (index >= 4) {
                                        if (index == 4) {
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
            {addSeeMore && (
                <ProgressBarLink
                    href="/blog"
                    className="post-card-base flex justify-center items-center py-10 font-bold text-center"
                >
                    See more<br />blog posts
                </ProgressBarLink>
            )}
        </div>
    );
}
