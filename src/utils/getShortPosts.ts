//= Functions & Modules
// Own
import getPostsDirectories from './getPostsDirectories';
import getPostFileData from './getPostFileData';

//= Structures & Data
// Own
import Post from '../data/Post';

export default (length: number): Post[] => {
    const directories = getPostsDirectories(length);

    let posts: Post[] = [];

    for (const postDirName of directories) {
        const postData = getPostFileData(postDirName);

        if (postData.skip) continue;

        postData.content = postData.content.substring(0, postData.content.search(/^$/gm));
        posts.push(postData);
    }

    return posts;
};
