//= Functions & Modules
// Own
import { getShortPosts } from '../modules/posts';
import { getPinnedProjects } from '../modules/projects';

//= React components
// Own
import { HomePageContent } from "../modules/home_page";

//= Types & Enums & Consts
// Others
import { GetStaticProps } from 'next';

export default HomePageContent;

export const getStaticProps: GetStaticProps = async (_context) => {
    const shortPosts = getShortPosts(3);
    const pinnedProjects = getPinnedProjects();

    return { props: { shortPosts, pinnedProjects } };
};
