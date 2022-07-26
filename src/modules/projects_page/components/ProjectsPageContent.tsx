//= React components
// Own
import { Header } from '../../general';
// Others
import Head from 'next/head';

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>My projects</title>
            </Head>
            <div id="ProjectsPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false}/>
                    <main className="flex flex-col">

                    </main>
                </div>
            </div>
        </>
    );
}
