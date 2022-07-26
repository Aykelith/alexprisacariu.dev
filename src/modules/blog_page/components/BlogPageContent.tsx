//= Structures & Data
// Own
import { BlogPageProps } from '../data/BlogPageProps';

//= React components
// Own
import { Link, Header } from '../../general';
import { ShortPost } from '../../posts';
// Others
import Head from 'next/head';

export default function BlogPage({ posts }: BlogPageProps) {
    return (
        <>
            <Head>
                <title>TODO</title>
            </Head>
            <div id="BlogPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false}/>
                    <main className="flex flex-col gap-6">
                        {posts.map((shortPost: any) => {
                            return <ShortPost {...shortPost} />;
                        })}
                    </main>
                </div>
            </div>
        </>
    );
}
