//= React components
// Own
import { Header } from '../../general';
// Others
import Head from 'next/head';

export default function ProjectPage() {
    return (
        <>
            <Head>
                <title>My Project</title>
            </Head>
            <div id="ProjectPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false}/>
                    <main className="flex flex-col">

                    </main>
                </div>
            </div>
        </>
    );
}
