//= Structures & Data
// Own
import Post from '../../data/Post';
// Others
import { GetStaticPaths, GetStaticProps } from 'next';
import getPostsDirectories from '../../utils/getPostsDirectories';
import getPost from '../../utils/getPost';
import { serialize } from 'next-mdx-remote/serialize';

//= React components
// Others
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

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
        <div className="box">
            <main className="flex flex-col space-y-8">
                <h1 className="text-4xl">{post.title}</h1>
                <MDXRemote {...post.content} components={SharedComponents} />
            </main>
        </div>
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
