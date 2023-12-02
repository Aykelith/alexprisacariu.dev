//= Functions
// Others
import classNames from 'classnames';

//= React components
// Own
import { Header } from '../../general';
import { GitLabTag, GitHubTag, MyEmailTag, LinkedInTag } from '../../tags';
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
                    <Header small useH2 showContacts={false} showHome={true} />
                    <main className="flex flex-col gap-6">
                        <div>
                            My name is <HighlightName>Alex</HighlightName> and I'm a programmer from Romania with a passion for coming out
                            with solutions and audio engineering. I also enjoy going hiking and playing my ukulele and electric guitar.
                        </div>
                        <div>
                            Started programming from little in <HighlightLanguage>Visual Basic 3</HighlightLanguage> at a programming club,
                            progressed to <HighlightLanguage>Visual Basic 6</HighlightLanguage>. Switched to{' '}
                            <HighlightLanguage>C++</HighlightLanguage> as my passion of creating games increased. Later started learning web
                            development.
                        </div>
                        <div>
                            While I was doing my bachelor's degree at{' '}
                            <HighlightName>Babeș-Bolyai University (UBB) in Cluj-Napoca</HighlightName> I founded a tech company,{' '}
                            <HighlightName>Softprovider</HighlightName>, with my uncle and we developed different applications in the domain
                            of real estate, but as our main software is <HighlightSoftware>PanoroCRM</HighlightSoftware> and our 360 tours editor.
                        </div>
                        <div>
                            Now, my main programming languages are modern <HighlightLanguage>C++</HighlightLanguage> and{' '}
                            <HighlightLanguage>JavaScript</HighlightLanguage>, with strong knowledge in <HighlightOS>Linux</HighlightOS>,{' '}
                            <HighlightLanguage>Python</HighlightLanguage>, <HighlightLanguage>SQL</HighlightLanguage>,{' '}
                            <HighlightTechnology>MongoDB</HighlightTechnology>, <HighlightTechnology>React</HighlightTechnology>,{' '}
                            <HighlightTechnology>Next.js</HighlightTechnology> and <HighlightTechnology>Qt</HighlightTechnology>. I also have
                            experimented with <HighlightLanguage>Java</HighlightLanguage> (also <HighlightLanguage>Kotlin</HighlightLanguage>
                            ), <HighlightLanguage>C#</HighlightLanguage> and <HighlightLanguage>Ruby</HighlightLanguage>. Now I'm learning{' '}
                            <HighlightLanguage>Rust</HighlightLanguage> (and I like it).
                        </div>
                        <div>
                            My editor of choice is <HighlightSoftware>NeoVim</HighlightSoftware> and all the programming I do is inside a container running <HighlightOS>Alpine</HighlightOS>.
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>You can find me on:</div>
                            <div className="flex flex-wrap gap-2">
                                <GitLabTag />
                                <GitHubTag />
                                <LinkedInTag />
                                <MyEmailTag />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

function Highlight({ children, className }: React.PropsWithChildren<{ className?: string }>) {
    return <span className={classNames('font-bold', className)}>{children}</span>;
}

function HighlightName({ children }: React.PropsWithChildren<{}>) {
    return <Highlight className="text-blue-800">{children}</Highlight>;
}

function HighlightLanguage({ children }: React.PropsWithChildren<{}>) {
    return <Highlight className="text-green-800">{children}</Highlight>;
}

function HighlightTechnology({ children }: React.PropsWithChildren<{}>) {
    return <Highlight className="text-violet-800">{children}</Highlight>;
}

function HighlightOS({ children }: React.PropsWithChildren<{}>) {
    return <Highlight className="text-pink-800">{children}</Highlight>;
}

function HighlightSoftware({ children }: React.PropsWithChildren<{}>) {
    return <Highlight className="text-sky-800">{children}</Highlight>;
}
