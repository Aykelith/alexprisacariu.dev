//= Functions & Modules
// Own
import getPublishedDateString from '../../utils/getPublishedDateString';

//= Structures & Data
// Own
import Post from '../../data/Post';
// Others
import { GetStaticPaths, GetStaticProps } from 'next';
import getPostsDirectories from '../../utils/getPostsDirectories';
import getPost from '../../utils/getPost';
import { serialize } from 'next-mdx-remote/serialize';

//= React components
// Own
import Link from '../../components/Link';
import PostTags from '../../components/PostTags';
// Others
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';

//= Style & Assets
// Own
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const SharedComponents = {};

type PagePost = Omit<Post, 'content'> & {
    content: MDXRemoteSerializeResult;
};

export default function PostPage(post: PagePost) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <div id="PostPage" className="page">
                <div className="box">
                    <main className="flex flex-col">
                        <Link href="#">{'< See more posts'}</Link>
                        <h1 className="text-4xl mt-1 mb-2">{post.title}</h1>
                        <div className="flex items-center mb-8 space-x-3">
                            <div>{getPublishedDateString(post.publishedOn)}</div>
                            <PostTags tags={post.tags} />
                        </div>
                        <div className="postContent">
                            <MDXRemote {...post.content} components={SharedComponents} />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const postsDirectories = getPostsDirectories();

    const paths = postsDirectories.map((postDirectory: string) => ({ params: { dirName: postDirectory } }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = getPost(params.dirName as string);

    return {
        props: {
            ...post,
            content: await serialize(post.content, {
                mdxOptions: {
                    remarkPlugins: [[require('remark-prism'), { plugins: ['line-numbers'] }]],
                },
            }),
        },
    };
};
