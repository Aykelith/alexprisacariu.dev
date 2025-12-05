// Methods
import getHomeProjects from "@/utilities/server/projects/getHomeProjects";

// Components
import { ProgressBarLink } from "@/components/progress_bar";
import ShortProject from "@/components/ShortProject";

export default async function HomeProjects() {
    const projects = await getHomeProjects();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {projects.map((project) => {
                return <ShortProject key={project.title} project={project} />;
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
