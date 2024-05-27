//= Functions & Modules
// Own
import { getPostsDirectories } from './getPostsDirectories';
import { getPostFileData } from './getPostFileData';
import { createShortPostFromPost } from './createShortPostFromPost';

//= Structures & Data
// Own
import { Post } from '../data/Post';

export function getShortPosts(length?: number, start: number = 0): Post[] {
    const directories = getPostsDirectories(length, start);

    let posts: Post[] = [];

    for (const postDirName of directories) {
        const postData = getPostFileData(postDirName);

        if (postData.skip) continue;

        posts.push(createShortPostFromPost(postData));
    }

    return posts;
}
