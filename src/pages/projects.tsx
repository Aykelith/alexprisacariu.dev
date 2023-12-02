//= Functions & Modules
// Own
import { getShortProjects } from '../modules/projects';

//= React components
// Own
import { ProjectsPageContent } from "../modules/projects_page";

//= Types & Enums & Consts
// Others
import { GetStaticProps } from 'next';

export default ProjectsPageContent;

export const getStaticProps: GetStaticProps = async (_context) => {
    const projects = getShortProjects();

    return { props: { projects } };
};

