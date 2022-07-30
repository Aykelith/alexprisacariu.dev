//= Functions & Modules
// Own
import { getProjectsDirectories } from './getProjectsDirectories';
import { getProjectFileData } from './getProjectFileData';

//= Structures & Data
// Own
import { PinnedProject } from '../data/PinnedProject';

export function getPinnedProjects(): PinnedProject[] {
    const directories = getProjectsDirectories();

    let projects: PinnedProject[] = [];

    for (const projectDirName of directories) {
        const projectData = getProjectFileData(projectDirName);

        delete projectData.content;
        projects.push(projectData);
    }

    return projects;
}
