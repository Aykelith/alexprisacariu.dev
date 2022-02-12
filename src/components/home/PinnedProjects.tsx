//= Structures & Data
// Own
import { Project } from "../../modules/projects/data/Project";

//= React components
// Own
import Section from "./Section";
import ShortProject from '../../modules/projects/components/ShortProject';
// Others
import Link from 'next/link';

type Props = { pinnedProjects: Project[] };

export default function PinnedProjects({ pinnedProjects }: Props) {
    return (
        <Section title="Some projects">
            <div className="flex flex-col">
                {
                    pinnedProjects.map(project => <ShortProject project={project}/>)
                }
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

