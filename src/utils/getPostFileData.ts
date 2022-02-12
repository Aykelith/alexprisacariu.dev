//= Functions & Modules
// Others
import matter from 'gray-matter';
import path from 'path';
import { readFileSync } from 'fs';

//= Structures & Data
// Own
import PostsDirPath from '../data/PostsDirPath';
import PostContentFileName from '../data/PostContentFileName';
import Post from '../data/Post';

export default (postDirName: string): Post => {
    const result = matter(readFileSync(path.join(PostsDirPath, postDirName, PostContentFileName), { encoding: 'utf8' }).toString());

    return {
        title: result.data.title,
        tags: result.data.tags,
        publishedOn: result.data.publishedOn,
        dirName: postDirName,
        content: result.content,
        skip: result.data.skip || null
    };
};
