//= Functions & Modules
// Own
import getPostFileData from './getPostFileData';

//= Structures & Data
// Own
import Post from '../data/Post';

export default (postDirName: string): Post => {
    const postData = getPostFileData(postDirName);

    return { content: postData.content, title: postData.data.title, dirName: postDirName };
};
