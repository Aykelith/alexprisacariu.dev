// Components
import ConnectWithMeCard from "@/components/ConnectWithMeCard";
import Title from "./Title";
import HomeProjects from "./HomeProjects";
import HomeBlogPosts from "./HomeBlogPosts";

// Assets
import CodeSVG from "../components/icons/code.svg";

// Constants
import MailAddress from "../constants/MailAddress";
import AvailableForWork from "../constants/AvailableForWork";
import HomeTechstack from "../constants/HomeTechstack";

export default async function Home() {
    let workAvailabilityColor = "bg-green-500";
    if (AvailableForWork === 1) {
        workAvailabilityColor = "bg-yellow-500";
    } else if (AvailableForWork === 0) {
        workAvailabilityColor = "bg-red-500";
    }

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
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="flex-1 flex flex-col gap-6">
                            <ConnectWithMeCard />
                            <a href={`mailto:${MailAddress}`} className="flex-1 card flex flex-col gap-2 justify-center items-center">
                                <div className="flex justify-center my-2">
                                    <span className="relative flex h-4 w-4">
                                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${workAvailabilityColor} opacity-75`}></span>
                                        <span className={`relative inline-flex h-4 w-4 rounded-full ${workAvailabilityColor}`}></span>
                                    </span>
                                </div>
                                <div className="font-bold text-foreground text-center">
                                    {AvailableForWork === 2 ? "Available for work" : AvailableForWork === 1 ? "Limited work availability" : "Not available for work"}
                                </div>
                            </a>
                        </div>
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex-1 card flex flex-col gap-3 techstack-card">
                                <div className="flex items-center gap-2"><CodeSVG className="w-6 h-6" /> Techstack</div>
                                <div className="flex gap-3 flex-wrap">
                                    {HomeTechstack.map((tech, index) => (
                                        <a
                                            key={index}
                                            href={tech.url}
                                            target="_blank"
                                        >
                                            <div className={`${tech.color} w-2 h-2 mr-2 rounded-full`} />
                                            {tech.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span
                dangerouslySetInnerHTML={{
                    __html: `<!-- Website inspired by https://swajp.me/ -->`,
                    __html: `<!-- Icons from https://tabler.io/ -->`,
                }}
            ></span>
        </div>
    );
}
