// Method
import matter from "gray-matter";
import { transformerMetaHighlight } from "@shikijs/transformers";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import getPostSourceByUrlPart from "@/utilities/server/blog/getPostSourceByUrlPart";
import getPostsUrlParts from "@/utilities/server/blog/getPostsUrlParts";
import addPostDataDefaults from "@/utilities/server/blog/addPostDataDefaults";
import rehypePrettyCode from "rehype-pretty-code";

// Components
import { MDXRemote } from "next-mdx-remote-client/rsc";
import ClickableImage from "@/components/ClickableImage";
import BlurredSidesImg from "@/components/BlurredSidesImg";
import readPostSettings from "@/utilities/server/blog/readPostSettings";

const MDXComponents = {
    ClickableImage,
};

const MDXOptions = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: { light: "github-light", dark: "github-dark" },
                    transformers: [transformerMetaHighlight()],
                },
            ],
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
    },
};

export default async function Post({ params }) {
    const { id } = await params;
    const postSource = await getPostSourceByUrlPart(id);
    const { data: postSettings, content } = matter(postSource);
    addPostDataDefaults(postSettings);

    const postImage = postSettings.cover || postSettings.thumbnail;

    return (
        <div id="PostPage">
            <div className="box py-12">
                <div className="flex flex-col">
                    <BlurredSidesImg
                        className="mb-8"
                        src={
                            postImage?.png ||
                            postImage
                        }
                        webp={postImage?.webp}
                        alt={`Cover image for project "${postSettings.title}"`}
                        imgClassName="max-h-[200px]"
                    />
                    <h1 className="text-3xl font-accent mb-6">
                        {postSettings.title}
                    </h1>
                    <div className="post-content">
                        <MDXRemote
                            source={content}
                            components={MDXComponents}
                            options={MDXOptions}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {postSettings.otherImages?.map((imageData, index) => {
                            return (
                                <ClickableImage
                                    key={imageData.src}
                                    src={imageData.src}
                                    alt={`Image #${index + 1} for project "${postSettings.title}"`}
                                    visibleAlt={imageData.alt}
                                    className="h-[300px]"
                                />
                            );
                        })}
                    </div>
                    {
                        postSettings.showAIDisclaimer
                        &&
                        <div className="text-muted-foreground mt-4">
                            Disclaimer: Some of the images included in this post were generated using artificial-intelligence tools for illustrative purposes.
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return (await getPostsUrlParts()).map((urlPart) => ({
        id: urlPart,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const postSettings = await readPostSettings(id);
    addPostDataDefaults(postSettings);

    const title = postSettings.seoTitle;
    const description = postSettings.seoDescription;
    const keywords = postSettings.seoKeywords;
    const baseUrl = "https://alexprisacariu.dev";
    const url = `${baseUrl}/posts/${id}`;
    const images = [];
    if (postSettings.cover) {
        images.push(postSettings.cover?.png || postSettings.cover);
    }
    if (postSettings.thumbnail) {
        images.push(postSettings.thumbnail?.png || postSettings.thumbnail);
    }

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images,
        },
        alternates: {
            canonical: url,
        },
    };
}