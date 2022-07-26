//= Functions & Modules
// Own
import { getDirectories } from '../../general';

//= Structures & Data
// Own
import { PostsDirPath } from '../data/PostsDirPath';

export function getPostsDirectories(length?: number, start: number = 0) {
    const directories = getDirectories(PostsDirPath).reverse().filter(name => !name.startsWith("_"));

    if (length) return directories.slice(start, start + length);

    return directories;
};
