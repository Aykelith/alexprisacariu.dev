//= Functions & Modules
// Own
import { getShortPosts, getPostsDirectories } from '../../../modules/posts';

//= Types & Enums & Consts
// Own
import { BlogPageURLParams } from '../../../modules/blog_page';

//= React components
// Own
import { BlogPageContent, BlogPageProps } from '../../../modules/blog_page';
// Others
import { GetStaticPaths } from 'next';

//= Types & Enums & Consts
// Others
import { GetStaticProps } from 'next';

export default BlogPageContent;

const PostsPerPage = 8;

export const getStaticProps: GetStaticProps<BlogPageProps, BlogPageURLParams> = async (context) => {
    const posts = getShortPosts(PostsPerPage, (Number.parseInt(context.params.pageNumber) - 1) * PostsPerPage);
    const pagesCount = 2;
    const currentPage = Number.parseInt(context.params.pageNumber);
    console.log(posts.length, pagesCount, currentPage);

    return { props: { posts, pagesCount, currentPage } };
};

export const getStaticPaths: GetStaticPaths<BlogPageURLParams> = async () => {
    if (process.env.NO_STATIC_PROPS_ALL || process.env.NO_STATIC_PROPS_ESTATE_PAGE) {
        return {
            paths: [],
            fallback: 'blocking',
        };
    }

    const paths: { params: BlogPageURLParams }[] = [];

    const postsDirectoriesLength = getPostsDirectories().length;
    const pages = Math.ceil(postsDirectoriesLength / PostsPerPage);

    for (let i = 1; i <= pages; ++i) {
        paths.push({ params: { pageNumber: i.toString() } });
    }

    return {
        paths,
        fallback: false,
    };
};
