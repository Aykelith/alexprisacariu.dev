//= Functions & Modules
// Own
import getPostsDirectories from './getPostsDirectories';
import getPostFileData from './getPostFileData';
import getPostFirstParagrah from './getPostFirstParagraph';

//= Structures & Data
// Own
import Post from '../data/Post';

export default (length: number): Post[] => {
    const directories = getPostsDirectories(length);
    console.log('directories', directories);

    let posts: Post[] = [];

    for (const postDirName of directories) {
        const postData = getPostFileData(postDirName);
        const postFirstParagraph = getPostFirstParagrah(postDirName);

        posts.push({ title: postData.data.title, dirName: postDirName, content: '' });
    }

    return posts;
};
