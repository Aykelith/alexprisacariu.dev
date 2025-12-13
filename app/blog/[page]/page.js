// Methods
import getBlogPosts from "@/utilities/server/blog/getBlogPosts";
import getPostsDirNames from "@/utilities/server/blog/getPostsDirNames";

// Components
import { ProgressBarLink } from "@/components/progress_bar";

// Constants
import PostsPerPage from "@/constants/PostsPerPage";

export default async function BlogPage({ params }) {
    const { page } = await params;
    const pageInt = parseInt(page);
    const posts = await getBlogPosts(pageInt, false, true);
    const postsCount = (await getPostsDirNames()).length;
    const totalPages = Math.ceil(postsCount / PostsPerPage);

    return (
        <div id="BlogPage" className="page">
            <div className="box">
                <h1 className="text-4xl font-bold mt-12">Blog posts</h1>
                <div className="text-muted-foreground mb-12">Sometimes I like to write</div>
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
                                            <source
                                                srcSet={postImage.webp}
                                                type="image/webp"
                                            />
                                            <img src={postImage.png || postImage} />
                                        </picture>
                                    ) : (
                                        <img src={postImage} />
                                    )}
                                </div>
                                <div className="post-body">
                                    <div className="post-title">
                                        {post.title}
                                    </div>
                                    <div className="post-desc">
                                        {post.firstParagraph}
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
                <div className="flex justify-center items-center gap-2 mt-8 mb-12">
                    {pageInt > 1 && (
                        <ProgressBarLink
                            href={`/blog/${pageInt - 1}`}
                            className="px-3 py-1 border rounded hover:bg-card-hover"
                        >
                            Previous
                        </ProgressBarLink>
                    )}

                    {(() => {
                        const pages = [];
                        // Always include first page, last page, current page, and neighbors (+/- 2)
                        const items = new Set([
                            1,
                            totalPages,
                            pageInt,
                            pageInt - 1,
                            pageInt - 2,
                            pageInt + 1,
                            pageInt + 2,
                        ]);

                        const sortedItems = Array.from(items)
                            .filter((p) => p >= 1 && p <= totalPages)
                            .sort((a, b) => a - b);

                        for (let i = 0; i < sortedItems.length; i++) {
                            const p = sortedItems[i];
                            if (i > 0 && p - sortedItems[i - 1] > 1) {
                                pages.push(
                                    <span key={`ellipsis-${p}`} className="px-2">
                                        ...
                                    </span>,
                                );
                            }
                            pages.push(
                                <ProgressBarLink
                                    key={p}
                                    href={`/blog/${p}`}
                                    className={`px-3 py-1 border rounded ${p === pageInt
                                        ? "bg-foreground text-background"
                                        : "hover:bg-card-hover"
                                        }`}
                                >
                                    {p}
                                </ProgressBarLink>,
                            );
                        }
                        return pages;
                    })()}

                    {pageInt < totalPages && (
                        <ProgressBarLink
                            href={`/blog/${pageInt + 1}`}
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

export async function generateMetadata({ params }) {
    const { page } = await params;
    const pageInt = parseInt(page);
    const postsCount = (await getPostsDirNames()).length;
    const totalPages = Math.ceil(postsCount / PostsPerPage);

    const title = `Blog Posts - Page ${pageInt}`;
    const description = `Page ${pageInt} of ${totalPages}. Read the latest articles and tutorials.`;
    const baseUrl = "https://alexprisacariu.dev";
    const url = `${baseUrl}/blog/${pageInt}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: url,
        },
    };
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
