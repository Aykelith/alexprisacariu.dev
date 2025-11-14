// Method
import matter from "gray-matter";
import rehypeShiki from "@shikijs/rehype";
import { transformerMetaHighlight } from "@shikijs/transformers";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import getPostSourceByUrlPart from "@/utilities/server/blog/getPostSourceByUrlPart";
import getPostsUrlParts from "@/utilities/server/blog/getPostsUrlParts";
import {
    transformerLineNumbers,
    transformerAutoLink,
} from "@/utilities/rehypeTransformers";

// Components
import { MDXRemote } from "next-mdx-remote-client/rsc";
import ClickableImage from "@/components/ClickableImage";
import BlurredSidesImg from "@/components/BlurredSidesImg";

const MDXComponents = {
    ClickableImage,
};

const MDXOptions = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [
                rehypeShiki,
                {
                    themes: {
                        light: "github-light",
                        dark: "github-dark",
                    },
                    transformers: [
                        transformerMetaHighlight(), // highlight lines like {2,4-6}
                        transformerLineNumbers(),
                        // transformerAutoLink(),
                    ],
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

    return (
        <div id="ProjectPage">
            <div className="box py-12">
                <div className="flex flex-col">
                    <BlurredSidesImg
                        className="mb-8"
                        src={postSettings.coverProjectImage}
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
