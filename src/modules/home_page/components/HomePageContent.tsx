//= React components
// Own
import RecentPosts from './RecentPosts';
import PinnedProjects from './PinnedProjects';
import { Header } from "../../general";
// Others
import Head from 'next/head';

//= Types & Enums & Consts
// Own
import { HomePageProps } from "../data/HomePageProps";

export default function HomePageContent({ shortPosts, pinnedProjects }: HomePageProps) {
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
                        <Header/>
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
