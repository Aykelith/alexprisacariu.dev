//= Types & Enums & Consts
// Own
import { PinnedProject } from '../data/PinnedProject';

//= React components
// Own
import { ProjectTag } from '../../tags';

type Props = {
    project: PinnedProject;
};

export default function ShortProject({ project }: Props) {
    return (
        <div className="flex flex-col w-56 shadow-lg">
            <img src={project.image} className="w-full object-cover h-36 rounded-t" />
            <div className="bg-gray-50 py-2 px-3 rounded-b">
                <div className="font-bold mr-2">{project.title}</div>
                <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                        <ProjectTag>{tag}</ProjectTag>
                    ))}
                </div>
                <div className="text-sm mt-1">{project.description}</div>
            </div>
        </div>
    );
}
