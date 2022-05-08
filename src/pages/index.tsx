//= Functions & Modules
// Own
import getShortPosts from '../utils/getShortPosts';
import getPinnedProjects from '../modules/projects/utils/getPinnedProjects';
import classNames from "classnames";

//= React components
// Own
import RecentPosts from '../components/home/RecentPosts';
import PinnedProjects from '../components/home/PinnedProjects';
import { GitLabTag, GitHubTag, MyEmailTag } from "../components/tags";
// Others
import Head from 'next/head';

//= Types & Enums & Consts
// Own
import Post from '../data/Post';
import { Project } from "../modules/projects/data/Project";
// Others
import { GetStaticProps } from 'next';

//= Assets
// Own

type Props = {
    shortPosts: Post[];
    pinnedProjects: Project[];
}

export default function Home({ shortPosts, pinnedProjects }: Props) {
    return (
        <>
            <Head>
                <title>Alexandru Priscariu: The Website</title>
                <meta name="description" content="Place of Alexandru Prisacariu" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page">
                <div className="box">
                    <div className="flex flex-col font-normal">
                        <header>
                            <h1 className="font-accent text-4xl font-bold">Alexandru Prisacariu</h1>
                            <div className="mt-2 flex gap-2 flex-wrap">
                                <GitLabTag/>
                                <GitHubTag/>
                                <MyEmailTag/>
                            </div>
                        </header>
                        <main className="flex flex-col space-y-8">
                            <div className=""></div>
                            <RecentPosts shortPosts={shortPosts} />
                            {/*<PinnedProjects pinnedProjects={pinnedProjects}/>*/}
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (_context) => {
    const shortPosts = getShortPosts(3);
    const pinnedProjects = getPinnedProjects();

    console.log("PinnedProjects", pinnedProjects);

    return { props: { shortPosts, pinnedProjects } };
};
