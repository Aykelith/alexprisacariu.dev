//= Structures & Data
// Own
import {Project} from '../data/Project';

type Props = {
    project: Project;
};

export default function ShortProject({ project }: Props) {
    return (
        <div className="py-2 px-3 rounded bg-gray-50">
            <div className="font-bold">{project.title}</div>
        </div>
    );
}
