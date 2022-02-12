//= Functions & Modules
// Own
import getShortPosts from '../utils/getShortPosts';
import getPinnedProjects from '../modules/projects/utils/getPinnedProjects';
import classNames from "classnames";

//= React components
// Own
import RecentPosts from '../components/home/RecentPosts';
import PinnedProjects from '../components/home/PinnedProjects';
// Others
import Head from 'next/head';

//= Structures & Data
// Own
import Post from '../data/Post';
import { Project } from "../modules/projects/data/Project";
// Others
import { GetStaticProps } from 'next';

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
                            <div className="mt-2 flex divide-x-2 divide-gray-400">
                                {[
                                    { url: 'https://gitlab.com/AlexxanderX', label: 'GitLab' },
                                    { url: 'https://github.com/Aykelith', label: 'GitHub' },
                                    { url: 'mailto:alex@alexprisacariu.dev', label: 'alex@alexprisacariu.dev' },
                                ].map((data, index) => (
                                    <a
                                        key={data.label}
                                        href={data.url}
                                        className={index == 0 ? 'pr-2' : 'px-2'}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {data.label}
                                    </a>
                                ))}
                            </div>
                        </header>
                        <main className="flex flex-col space-y-8">
                            <div className=""></div>
                            <RecentPosts shortPosts={shortPosts} />
                            <PinnedProjects pinnedProjects={pinnedProjects}/>
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
