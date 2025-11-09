import Title from "./Title";
import HomeProjects from "./HomeProjects";
import HomeBlogPosts from "./HomeBlogPosts";

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
                    <HomeBlogPosts />
                </div>
                <div className="mb-12">
                    <h2>About me</h2>
                    <div>Short info about me</div>
                    <div className="flex gap-8">
                        <div className="card flex-1">
                            <div>Connect with me</div>
                        </div>
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex gap-6">
                                <div className="flex-1 card">
                                    <div>Available for work</div>
                                </div>
                                <div className="flex-1 card">
                                    <div>Location</div>
                                    <div>Cluj-Napoca, Romania</div>
                                </div>
                            </div>
                            <div className="card">
                                <div>Techstack</div>
                            </div>
                        </div>
                    </div>
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
