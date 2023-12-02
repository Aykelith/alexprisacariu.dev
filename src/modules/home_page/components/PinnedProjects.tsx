//= Structures & Data
// Own
import { ShortProject } from '../../projects';

//= React components
// Own
import Section from './Section';
import { ShortProjectComponent } from '../../projects';
// Others
import Link from 'next/link';

type Props = { pinnedProjects: ShortProject[] };

export default function PinnedProjects({ pinnedProjects }: Props) {
    return (
        <Section title="Some projects">
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {pinnedProjects.map((project) => (
                    <ShortProjectComponent key={project.id} project={project} />
                ))}
            </div>
            <div>
                <Link href="/projects" className="font-bold">
                    See more projects
                </Link>
            </div>
        </Section>
    );
}
