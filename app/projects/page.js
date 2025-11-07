// Method
import { ProgressBarLink } from "@/components/progress_bar";
import getListingProjects from "@/utilities/server/getListingProjects";

async function constructData() {
    const projects = await getListingProjects();
    const currentYear = new Date().getFullYear();
    const projectsPerYear = {
        [currentYear]: [],
    };

    let earlistYear = currentYear;
    for (const project of projects) {
        if (project.yearsActive[1] === "present") {
            projectsPerYear[currentYear].push(project);
        } else {
            const year = project.yearsActive[1];
            if (!projectsPerYear[year]) {
                projectsPerYear[year] = [];
            }

            projectsPerYear[year].push(project);

            if (year < earlistYear) {
                earlistYear = year;
            }
        }
    }

    const list = [];
    for (let year = currentYear; year >= earlistYear; year -= 1) {
        if (!projectsPerYear[year]) {
            continue;
        }

        list.push({
            year,
            projects: projectsPerYear[year],
        });
    }

    return list;
}

export default async function ProjectsPage() {
    const list = await constructData();
    const currentYear = new Date().getFullYear();

    return (
        <div id="ProjectsPage" className="page">
            <div className="box">
                <div className="timeline">
                    {list.map(({ year, projects }) => {
                        return (
                            <div key={year}>
                                <h2>
                                    {year === currentYear
                                        ? `Present / ${year}`
                                        : `Until ${year}`}
                                </h2>
                                <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
                                    {projects.map((project) => {
                                        return (
                                            <ProgressBarLink
                                                key={project.title}
                                                className="project-card w-[205px]"
                                                href={`/projects/${project.urlPart}`}
                                            >
                                                <div className="project-img">
                                                    <img
                                                        src={
                                                            project.coverShortProjectImage
                                                        }
                                                    />
                                                </div>
                                                <div className="project-body">
                                                    <div className="project-title">
                                                        {project.title}
                                                    </div>
                                                    <div className="project-desc">
                                                        {project.description}
                                                    </div>
                                                    <div className="flex-1 min-h-2"></div>
                                                    <div className="project-tags">
                                                        {project.tags.map(
                                                            (tag, index) => {
                                                                if (
                                                                    index >= 2
                                                                ) {
                                                                    if (
                                                                        index ==
                                                                        2
                                                                    ) {
                                                                        return (
                                                                            <div
                                                                                key="more"
                                                                                className="tag"
                                                                            >
                                                                                ...
                                                                            </div>
                                                                        );
                                                                    }

                                                                    return null;
                                                                }

                                                                return (
                                                                    <div
                                                                        key={
                                                                            tag
                                                                        }
                                                                        className="tag"
                                                                    >
                                                                        {tag}
                                                                    </div>
                                                                );
                                                            },
                                                        )}
                                                    </div>
                                                </div>
                                            </ProgressBarLink>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
