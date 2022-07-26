//= React components
// Own
import { Header } from '../../general';
// Others
import Head from 'next/head';

export default function AboutMePage() {
    return (
        <>
            <Head>
                <title>About me</title>
            </Head>
            <div id="AboutMePage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false}/>
                    <main className="flex flex-col">

                    </main>
                </div>
            </div>
        </>
    );
}
