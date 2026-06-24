// Components
import { ProgressBarLink } from "@/components/progress_bar";

export default function BlogListing({ posts, pageInt, totalPages, hrefPrefix, title, description }) {
    return (
        <div id="BlogPage" className="page">
            <div className="box">
                <h1 className="text-4xl font-bold mt-12">{title}</h1>
                <div className="text-muted-foreground mb-12">{description}</div>
                <div className="flex flex-col gap-8">
                    {posts.map((post) => {
                        const postImage = post.cover || post.thumbnail;

                        return (
                            <ProgressBarLink
                                key={post.title}
                                className="post-card"
                                href={`/posts/${post.urlPart}`}
                            >
                                <div className="post-img">
                                    {postImage?.webp ? (
                                        <picture>
                                            <source srcSet={postImage.webp} type="image/webp" />
                                            <img src={postImage.png || postImage} />
                                        </picture>
                                    ) : (
                                        <img src={postImage} />
                                    )}
                                </div>
                                <div className="post-body">
                                    <div className="post-title">{post.title}</div>
                                    <div className="post-desc">{post.firstParagraph}</div>
                                    <div className="flex-1 min-h-2"></div>
                                    <div className="post-tags">
                                        {post.tags?.map((tag, index) => {
                                            if (index >= 5) {
                                                if (index === 5) return <div key="more" className="tag">...</div>;
                                                return null;
                                            }
                                            return <div key={tag} className="tag">{tag}</div>;
                                        })}
                                    </div>
                                </div>
                            </ProgressBarLink>
                        );
                    })}
                </div>
                <div className="flex justify-center items-center gap-2 mt-8 mb-12">
                    {pageInt > 1 && (
                        <ProgressBarLink
                            href={`${hrefPrefix}/${pageInt - 1}`}
                            className="px-3 py-1 border rounded hover:bg-card-hover"
                        >
                            Previous
                        </ProgressBarLink>
                    )}

                    {(() => {
                        const pages = [];
                        const items = new Set([
                            1, totalPages, pageInt,
                            pageInt - 1, pageInt - 2,
                            pageInt + 1, pageInt + 2,
                        ]);
                        const sortedItems = Array.from(items)
                            .filter((p) => p >= 1 && p <= totalPages)
                            .sort((a, b) => a - b);

                        for (let i = 0; i < sortedItems.length; i++) {
                            const p = sortedItems[i];
                            if (i > 0 && p - sortedItems[i - 1] > 1) {
                                pages.push(<span key={`ellipsis-${p}`} className="px-2">...</span>);
                            }
                            pages.push(
                                <ProgressBarLink
                                    key={p}
                                    href={`${hrefPrefix}/${p}`}
                                    className={`px-3 py-1 border rounded ${p === pageInt ? "bg-foreground text-background" : "hover:bg-card-hover"}`}
                                >
                                    {p}
                                </ProgressBarLink>,
                            );
                        }
                        return pages;
                    })()}

                    {pageInt < totalPages && (
                        <ProgressBarLink
                            href={`${hrefPrefix}/${pageInt + 1}`}
                            className="px-3 py-1 border rounded hover:bg-card-hover"
                        >
                            Next
                        </ProgressBarLink>
                    )}
                </div>
            </div>
        </div>
    );
}
