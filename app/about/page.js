// Methods
import ConnectWithMeCard from "@/components/ConnectWithMeCard";

export default function AboutPage() {
    return (
        <div id="PostPage">
            <div className="box py-12">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-accent mb-6">
                        About me
                    </h1>
                    <div className="post-content mb-6">
                        <p>
                            My name is <span className="text-blue-800 font-bold">Alex</span> and I'm a programmer from Romania with a passion for coming out with solutions and audio engineering. I also enjoy going hiking and playing my ukulele and electric guitar.
                        </p>
                        <p>
                            Started programming from little in <span className="text-green-800 font-bold">Visual Basic 3</span> at a programming club, progressed to <span className="text-green-800 font-bold">Visual Basic 6</span>. Switched to <span className="text-green-800 font-bold">C++</span> as my passion of creating games increased. Later started learning web development.
                        </p>
                        <p>
                            While I was doing my bachelor's degree at <span className="text-blue-800 font-bold">Babeș-Bolyai University (UBB) in Cluj-Napoca</span> I founded a tech company, <span className="text-blue-800 font-bold">Softprovider</span>, with my uncle and we developed different applications in the domain of real estate, but as our main software is <span className="text-sky-800 font-bold">PanoroCRM</span> and our 360 tours editor.
                        </p>
                        <p>
                            Now, my main programming languages are modern <span className="text-green-800 font-bold">C++</span> and <span className="text-green-800 font-bold">JavaScript</span>, with strong knowledge in <span className="text-pink-800 font-bold">Linux</span>, <span className="text-green-800 font-bold">Python</span>, <span className="text-green-800 font-bold">SQL</span>, <span className="text-violet-800 font-bold">MongoDB</span>, <span className="text-violet-800 font-bold">React</span>, <span className="text-violet-800 font-bold">Next.js</span> and <span className="text-violet-800 font-bold">Qt</span>. I also have experimented with <span className="text-green-800 font-bold">Java</span> (also <span className="text-green-800 font-bold">Kotlin</span>), <span className="text-green-800 font-bold">C#</span> and <span className="text-green-800 font-bold">Ruby</span>. Now I'm learning <span className="text-green-800 font-bold">Rust</span> (and I like it).
                        </p>
                        <p>
                            My editor of choice is <span className="text-sky-800 font-bold">NeoVim</span> and all the programming I do is inside a container running <span className="text-pink-800 font-bold">Alpine</span>.
                        </p>
                    </div>
                    <ConnectWithMeCard />
                </div>
            </div>
        </div>
    );
}
