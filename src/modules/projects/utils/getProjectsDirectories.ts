//= Functions & Modules
// Own
import { getDirectories } from '../../general';

//= Structures & Data
// Own
import { ProjectsDirPath } from '../data/ProjectsDirPath';

export function getProjectsDirectories(length?: number) {
    const directories = getDirectories(ProjectsDirPath).reverse().filter(name => !name.startsWith("_"));;

    if (length) return directories.slice(0, length);
    return directories;
};

