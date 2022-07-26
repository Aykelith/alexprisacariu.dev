//= Functions & Modules
// Own
import { getPost, getPostsDirectories } from '../../modules/posts';

//= Structures & Data
// Others
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

//= React components
// Own
import { PostPageContent } from "../../modules/post_page";

export default PostPageContent;

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
