//= Functions & Modules
// Own
import getDirectories from './getDirectories';

//= Structures & Data
// Own
import PostsDirPath from '../data/PostsDirPath';

export default (length?: number) => {
    const directories = getDirectories(PostsDirPath).reverse();

    if (length) return directories.slice(0, length);
    return directories;
};
