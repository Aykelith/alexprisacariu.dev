//= Functions & Modules
// Own
import getShortPosts from '../utils/getShortPosts';

//= React components
// Own
import RecentPosts from '../components/home/RecentPosts';
// Others
import Head from 'next/head';

//= Structures & Data
// Own
import Post from '../data/Post';
// Others
import { GetStaticProps } from 'next';

export default function Home({ shortPosts }: { shortPosts: Post[] }) {
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
                        </header>
                        <main className="flex flex-col space-y-8">
                            <div className=""></div>
                            <RecentPosts shortPosts={shortPosts} />
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (_context) => {
    const shortPosts = getShortPosts(3);

    return { props: { shortPosts } };
};
