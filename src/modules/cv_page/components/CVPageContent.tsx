//= React components
// Own
import { Header } from '../../general';
// Others
import Head from 'next/head';

export default function CVPage() {
    return (
        <>
            <Head>
                <title>My CV</title>
            </Head>
            <div id="CVPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false}/>
                    <main className="flex flex-col">
                        
                    </main>
                </div>
            </div>
        </>
    );
}
