//= Structures & Data
// Own
import { ProjectsPageProps } from '../data/ProjectsPageProps';

//= React components
// Own
import { Header } from '../../general';
import { ShortProjectComponent } from '../../projects';
// Others
import Head from 'next/head';

export default function ProjectsPage({ projects }: ProjectsPageProps) {
    return (
        <>
            <Head>
                <title>My projects</title>
            </Head>
            <div id="ProjectsPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false} showHome={true}/>
                    <main className="flex flex-col">
                        <div className="flex flex-wrap justify-center md:justify-start gap-5">
                            {projects.map((project) => (
                                <ShortProjectComponent key={project.id} project={project} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
