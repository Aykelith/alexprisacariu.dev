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
                    <Header small useH2 showContacts={false} />
                    <main className="flex flex-col gap-6">
                        <div>
                            My name is <Highlight>Alex</Highlight> and I'm an programmer from Romania with a passion for writing software
                            and audio engineering. I also enjoy going hiking and playing my ukulele and electric guitar.
                        </div>
                        <div>
                            Started programming from little in Visual Basic 3 at a programming club, progressed to Visual Basic 6. Switched
                            to C++ as my passion of creating games increased. Later started learning web development.
                        </div>
                        <div>
                            While I was doing my bachelor degree at [xxx] I founded a tech company, Softprovider, with my uncle and we
                            developed different applications in the domain of real estate, but as our main software is PanoroCRM and our 360
                            tours editor.
                        </div>
                        <div>
                            Now, my main programming languages are modern C++ and JavaScript, with strong knowledge in Linux, MongoDB, SQL,
                            ReactJS, NextJS and Qt. I also have experimented with Java(also Kotlin), C#, . Now I'm learning Rust (and I like
                            it).
                        </div>
                        <div>You can find me on:</div>
                    </main>
                </div>
            </div>
        </>
    );
}

function Highlight({ children }: React.PropsWithChildren<{}>) {
    return <span>{children}</span>;
}
