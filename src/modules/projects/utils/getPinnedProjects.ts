//= Functions & Modules
// Own
import { getProjectsDirectories } from './getProjectsDirectories';
import { getProjectFileData } from './getProjectFileData';

//= Structures & Data
// Own
import { Project } from '../data/Project';

export function getPinnedProjects(): Project[] {
    const directories = getProjectsDirectories();

    let projects: Project[] = [];

    for (const projectDirName of directories) {
        const projectData = getProjectFileData(projectDirName);

        if (projectData.skip) continue;

        projectData.content = projectData.content.substring(0, projectData.content.search(/^$/gm));
        projects.push(projectData);
    }

    return projects;
}
