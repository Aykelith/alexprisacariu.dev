//= Functions & Modules
// Own
import { getProjectFileData, getProjectsDirectories } from '../../modules/projects';

//= Structures & Data
// Others
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

//= React components
// Own
import { ProjectPageContent } from "../../modules/project_page";

export default ProjectPageContent;

export const getStaticPaths: GetStaticPaths = async () => {
    const projectsDirectories = getProjectsDirectories();

    const paths = projectsDirectories.map((postDirectory: string) => ({ params: { id: postDirectory } }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = getProjectFileData(params.id as string);

    return {
        props: {
            ...project,
            content: await serialize(project.content, {
                mdxOptions: {
                    remarkPlugins: [[require('remark-prism'), { plugins: ['line-numbers'] }]],
                },
            }),
        },
    };
};

