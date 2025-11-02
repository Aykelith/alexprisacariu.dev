import getHomeProjects from "@/utilities/server/getHomeProjects";
import { ProgressBarLink } from "@/components/progress_bar";

export default async function HomeProjects() {
    const projects = await getHomeProjects();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {projects.map((project) => {
                return (
                    <ProgressBarLink
                        key={project.title}
                        className="home-project"
                        href={`/projects/${project.id}`}
                    >
                        <div className="project-img">
                            <img src={project.coverShortProjectImage} />
                        </div>
                        <div className="project-body">
                            <div className="project-title">{project.title}</div>
                            <div className="project-desc">
                                {project.description}
                            </div>
                            <div className="flex-1 min-h-2"></div>
                            <div className="project-tags">
                                {project.tags.map((tag) => {
                                    return (
                                        <div key={tag} className="tag">
                                            {tag}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </ProgressBarLink>
                );
            })}
            <ProgressBarLink
                href="/projects"
                className="home-project-base flex justify-center items-center"
            >
                See more
            </ProgressBarLink>
        </div>
    );
}
