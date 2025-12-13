// Methods
import ConnectWithMeCard from "@/components/ConnectWithMeCard";

export default function AboutPage() {
    return (
        <div id="AboutPage">
            <div className="box py-12">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-accent mb-6">
                        About me
                    </h1>
                    <div className="post-content mb-6">
                        <p>
                            My name is <AltName>Alex</AltName> and I'm passionate programmer from Romania who loves coming out with solutions.
                            I also enjoy audio engineering, going hiking and playing ukulele and electric guitar.
                        </p>
                        <p>
                            I started programming from little in <LanguageName>Visual Basic 3</LanguageName> at a programming club,
                            progressed to <LanguageName>Visual Basic 6</LanguageName>. Switched to
                            <LanguageName>C++</LanguageName> as my passion of creating games increased. Later started learning web
                            development.
                        </p>
                        <p>
                            While I was studying for my bachelor's degree at <ProperName href="https://www.cs.ubbcluj.ro/">Babeș-Bolyai University (UBB) in Cluj-Napoca</ProperName>
                            I founded a tech company, <ProperName>Softprovider</ProperName>, with my uncle and we developed different
                            applications in the real estate domain, but our main software was <ProperName href="/projects/panoro-ro">PanoroCRM</ProperName>
                            and our 360 tours editor, <ProperName href="/projects/panorovr-editor">PanoroVR Editor</ProperName>.
                        </p>
                        <p>
                            Now, my main programming languages are <LanguageName>JavaScript</LanguageName>{" "}
                            (<LanguageName>TypeScript</LanguageName>), <LanguageName>Go</LanguageName> and
                            modern <LanguageName>C++</LanguageName>, with strong knowledge in <OSName>Linux</OSName>,{" "}
                            <LanguageName>Python</LanguageName>, <LanguageName>SQL</LanguageName> (<FrameworkName>MSSQL</FrameworkName>, <FrameworkName>PostgreSQL</FrameworkName>),{" "}
                            <FrameworkName>MongoDB</FrameworkName>, <FrameworkName>React</FrameworkName>,{" "}
                            <FrameworkName>Next.js</FrameworkName> and <FrameworkName>Qt</FrameworkName>.{" "}
                            I also have experimented with <LanguageName>Java</LanguageName> (also{" "}
                            <LanguageName>Kotlin</LanguageName>), <LanguageName>C#</LanguageName> and{" "}
                            <LanguageName>Ruby</LanguageName>. I also play with <LanguageName>Rust</LanguageName> from time to time.
                        </p>
                        <p>
                            My editor of choice, right now, is <ProperName>Antigravity</ProperName>, while having a terminal
                            prepared with <ProperName>Neovim</ProperName> for when I need to access fast some other project's files,
                            all running on <OSName>Linux Mint</OSName>.
                        </p>
                    </div>
                    <ConnectWithMeCard />
                </div>
            </div>
        </div>
    );
}

function ProperName({ children, href }) {
    return (
        <span className="blue">{href !== null ? <a href={href} target="_blank">{children}</a> : children}</span>
    );
}

function LanguageName({ children }) {
    return (
        <span className="green">{children}</span>
    );
}

function FrameworkName({ children }) {
    return (
        <span className="violet">{children}</span>
    );
}

function OSName({ children }) {
    return (
        <span className="pink">{children}</span>
    );
}

function AltName({ children }) {
    return (
        <span className="font-bold">{children}</span>
    );
}
