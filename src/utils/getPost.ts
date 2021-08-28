//= Functions & Modules
// Own
import getPostFileData from './getPostFileData';

//= Structures & Data
// Own
import Post from '../data/Post';

export default (postDirName: string): Post => getPostFileData(postDirName);
