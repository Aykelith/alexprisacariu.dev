// Methods
import getListingProjects from "@/utilities/server/projects/getListingProjects";

// Components
import ProjectsGrid from "./ProjectsGrid";

export const metadata = {
    title: "Projects Grid",
    description: "All projects in a filterable, searchable grid view.",
    robots: { index: false, follow: false },
};

export default async function ProjectsGridPage() {
    const projects = await getListingProjects(true);

    return (
        <div id="ProjectsGridPage" className="page">
            <div className="box">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold">Projects Grid</h1>
                    <div className="text-muted-foreground">
                        Search, filter, and sort all projects
                    </div>
                </div>
                <ProjectsGrid projects={projects} />
            </div>
        </div>
    );
}
