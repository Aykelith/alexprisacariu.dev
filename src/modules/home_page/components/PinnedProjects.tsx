//= Structures & Data
// Own
import { PinnedProject } from '../../projects';

//= React components
// Own
import Section from './Section';
import { ShortProject } from '../../projects';
// Others
import Link from 'next/link';

type Props = { pinnedProjects: PinnedProject[] };

export default function PinnedProjects({ pinnedProjects }: Props) {
    return (
        <Section title="Some projects">
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {pinnedProjects.map((project) => (
                    <Link key={project.id} href={"#"/*`/project/${project.id}`*/}>
                        <a className="hover:no-underline">
                            <ShortProject project={project} />
                        </a>
                    </Link>
                ))}
            </div>
            <div>
                <Link href="#">
                    <a href="#" className="font-bold">
                        See more projects
                    </a>
                </Link>
            </div>
        </Section>
    );
}
