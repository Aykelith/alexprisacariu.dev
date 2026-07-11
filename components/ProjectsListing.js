// Components
import ShortProject from "@/components/ShortProject";

function buildYearList(projects) {
    const currentYear = new Date().getFullYear();
    const perYear = { [currentYear]: [] };
    let earliestYear = currentYear;

    for (const project of projects) {
        if (project.yearsActive?.[1] === "present" || !project.yearsActive) {
            perYear[currentYear].push(project);
        } else {
            const year = project.yearsActive[1];
            if (!perYear[year]) perYear[year] = [];
            perYear[year].push(project);
            if (year < earliestYear) earliestYear = year;
        }
    }

    const list = [];
    for (let year = currentYear; year >= earliestYear; year -= 1) {
        if (!perYear[year]) continue;
        list.push({ year, projects: perYear[year] });
    }

    return { list, currentYear };
}

export default function ProjectsListing({ projects, title, description, showStatus = false }) {
    const { list, currentYear } = buildYearList(projects);

    return (
        <div id="ProjectsPage" className="page">
            <div className="box">
                <div className="timeline">
                    <div>
                        <h1 className="text-4xl font-bold">{title}</h1>
                        <div className="text-muted-foreground">{description}</div>
                    </div>
                    {list.map(({ year, projects: yearProjects }) => (
                        <div key={year} className="with-bullet">
                            <h2>
                                {year === currentYear
                                    ? `Present / ${year}`
                                    : `Until ${year}`}
                            </h2>
                            <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
                                {yearProjects.map((project) => (
                                    <ShortProject
                                        key={project.title}
                                        project={project}
                                        className="w-[205px]"
                                        showStatus={showStatus}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
