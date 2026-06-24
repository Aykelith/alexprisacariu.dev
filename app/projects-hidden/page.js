// Methods
import getListingProjects from "@/utilities/server/projects/getListingProjects";

// Components
import ProjectsListing from "@/components/ProjectsListing";

export const metadata = {
    robots: { index: false, follow: false },
    title: "All Projects (including hidden)",
};

export default async function ProjectsHiddenPage() {
    const projects = await getListingProjects(true);

    return (
        <ProjectsListing
            projects={projects}
            title="Projects (all)"
            description="All projects including hidden ones"
            showStatus={true}
        />
    );
}
