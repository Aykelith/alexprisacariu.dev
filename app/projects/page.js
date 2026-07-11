// Methods
import getListingProjects from "@/utilities/server/projects/getListingProjects";

// Components
import ProjectsListing from "@/components/ProjectsListing";

export default async function ProjectsPage() {
    const projects = await getListingProjects();

    return (
        <ProjectsListing
            projects={projects}
            title="Projects"
            description="List of projects I created or contributed to"
            showStatus={false}
        />
    );
}
