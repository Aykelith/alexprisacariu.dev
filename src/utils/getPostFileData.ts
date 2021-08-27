//= Functions & Modules
// Others
import matter from 'gray-matter';
import path from 'path';
import { readFileSync } from 'fs';

//= Structures & Data
// Own
import PostsDirPath from '../data/PostsDirPath';
import PostContentFileName from '../data/PostContentFileName';

type Data = { content: string; data: { title: string } };

export default (postDirName: string): Data => {
    const result = matter(readFileSync(path.join(PostsDirPath, postDirName, PostContentFileName), { encoding: 'utf8' }).toString());

    return (<unknown>result) as Data;
};
