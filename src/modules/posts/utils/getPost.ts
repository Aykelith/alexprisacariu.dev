//= Functions & Modules
// Own
import { getPostFileData } from './getPostFileData';

//= Structures & Data
// Own
import { Post } from '../data/Post';

export const getPost = (postDirName: string): Post => getPostFileData(postDirName);
