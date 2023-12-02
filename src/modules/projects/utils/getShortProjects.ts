//= Functions & Modules
// Own
import { getProjectsDirectories } from './getProjectsDirectories';
import { getProjectFileData } from './getProjectFileData';

//= Structures & Data
// Own
import { ShortProject } from '../data/ShortProject';
import { Project } from '../data/Project';

export function getShortProjects(length?: number, filterCondition?: (projectData: Project) => boolean): ShortProject[] {
    const directories = getProjectsDirectories(length);

    let projects: ShortProject[] = [];

    for (const projectDirName of directories) {
        const projectData = getProjectFileData(projectDirName);

        if (filterCondition && !filterCondition(projectData)) continue;

        delete projectData.content;
        projects.push(projectData);
    }

    return projects;
}
