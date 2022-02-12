//= Functions & Modules
// Own
import getDirectories from '../../../utils/getDirectories';

//= Structures & Data
// Own
import { ProjectsDirPath } from '../data/ProjectsDirPath';

export default (length?: number) => {
    const directories = getDirectories(ProjectsDirPath).reverse();

    if (length) return directories.slice(0, length);
    return directories;
};

