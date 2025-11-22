// Methods
import getHomeProjects from "@/utilities/server/projects/getHomeProjects";

// Components
import { ProgressBarLink } from "@/components/progress_bar";

export default async function HomeProjects() {
    const projects = await getHomeProjects();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {projects.map((project) => {
                return (
                    <ProgressBarLink
                        key={project.title}
                        className="project-card"
                        href={`/projects/${project.urlPart}`}
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
                                {project.tags.map((tag, index) => {
                                    if (index >= 2) {
                                        if (index == 2) {
                                            return (
                                                <div key="more" className="tag">
                                                    ...
                                                </div>
                                            );
                                        }

                                        return null;
                                    }

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
                className="project-card-base flex justify-center items-center font-bold text-center"
            >
                See more<br />projects
            </ProgressBarLink>
        </div>
    );
}
