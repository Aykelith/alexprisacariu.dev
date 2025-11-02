import Title from "./Title";
import HomeProjects from "./HomeProjects";

export default async function Home() {
    return (
        <div id="HomePage" className="page">
            <div className="box">
                <div className="flex flex-col font-normal">
                    <main className="flex flex-col space-y-8">
                        <Title />
                        <div className="text-xl text-center -mt-1 max-w-140 self-center">
                            A developer from Romania. Passionate about finding
                            solutions and creating modern applications in any
                            technology.
                        </div>
                    </main>
                </div>
                <div>
                    <h2>Projects showcase</h2>
                    <div>Some projects I worked on</div>
                    <HomeProjects />
                </div>
                <div>
                    <h2>Blog</h2>
                    <div>Sometimes I like to write</div>
                </div>
                <div>
                    <h2>About me</h2>
                    <div>Short info about me</div>
                </div>
            </div>
            <span
                dangerouslySetInnerHTML={{
                    __html: `<!-- Website inspired by https://swajp.me/ -->`,
                }}
            ></span>
        </div>
    );
}
