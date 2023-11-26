//= Types & Enums & Consts
// Own
import { ShortProject } from '../data/ShortProject';

//= React components
// Own
import { ProjectTag } from '../../tags';
// Others
import Link from "next/link";

type Props = {
    project: ShortProject;
};

export default function ShortProjectComponent({ project }: Props) {
    return (
        <div className="flex flex-col w-full md:w-56 shadow-lg">
            <Link href={`/project/${project.id}`} className="cursor-pointer overflow-hidden rounded-t">
                <img src={project.coverImage} className="w-full object-cover h-36 hover:scale-105 transition duration-500" loading="lazy"/>
            </Link>
            <div className="bg-gray-50 py-2 px-3 rounded-b">
                <div className="font-bold mr-2">
                    <Link href={`/project/${project.id}`} className="cursor-pointer hover:underline">
                        {project.title}
                    </Link>
                </div>
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
