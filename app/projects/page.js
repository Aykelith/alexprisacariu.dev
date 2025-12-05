// Method
import getListingProjects from "@/utilities/server/projects/getListingProjects";

// Components
import ShortProject from "@/components/ShortProject";

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
                    <div>
                        <h1 className="text-4xl font-bold">Projects</h1>
                        <div className="text-muted-foreground">
                            List of projects I created or contributed to
                        </div>
                    </div>
                    {list.map(({ year, projects }) => {
                        return (
                            <div key={year} className="with-bullet">
                                <h2>
                                    {year === currentYear
                                        ? `Present / ${year}`
                                        : `Until ${year}`}
                                </h2>
                                <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
                                    {projects.map((project) => {
                                        return <ShortProject key={project.title} project={project} className="w-[205px]" />;
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
