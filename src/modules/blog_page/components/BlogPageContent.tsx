//= Structures & Data
// Own
import { BlogPageProps } from '../data/BlogPageProps';

//= React components
// Own
import { Link, Header, Pagination } from '../../general';
import { ShortPost } from '../../posts';
// Others
import Head from 'next/head';

export default function BlogPage({ posts, pagesCount, currentPage }: BlogPageProps) {
    return (
        <>
            <Head>
                <title>My blog</title>
            </Head>
            <div id="BlogPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false} showHome={true}/>
                    <main className="flex flex-col gap-6">
                        {posts.map((shortPost: any) => {
                            return <ShortPost {...shortPost} />;
                        })}
                        <Pagination count={pagesCount} currentPage={currentPage} baseURL={"/blog/PAGE_NUMBER"} onPageChange={() => {}} />
                    </main>
                </div>
            </div>
        </>
    );
}
