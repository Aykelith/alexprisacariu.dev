//= Functions & Modules
// Own
import { getPost, createShortPostFromPost } from '../../posts';
// Others
import matter from 'gray-matter';
import path from 'path';
import { readFileSync } from 'fs';

//= Structures & Data
// Own
import { ProjectsDirPath } from '../data/ProjectsDirPath';
import { ProjectContentFileName } from '../data/ProjectContentFileName';
import { Project } from '../data/Project';

export function getProjectFileData(projectDirName: string): Project {
    const result = matter(readFileSync(path.join(ProjectsDirPath, projectDirName, ProjectContentFileName), { encoding: 'utf8' }).toString());

    const linkedPosts: Project["linkedPosts"] = [];
    if (result.data?.linkedPosts) {
        for (const linkedPostUrl of result.data.linkedPosts) {
            linkedPosts.push(createShortPostFromPost(getPost(linkedPostUrl)));
        }
    }

    return {
        id: projectDirName,
        title: result.data.title,
        dirName: projectDirName,
        coverProjectImage: result.data.coverProjectImage,
        coverShortProjectImage: result.data.coverShortProjectImage,
        tags: result.data.tags,
        description: result.data.description,
        url: result.data.url,
        content: result.content || "",
        pinned: result.data.pinned,
        otherImages: result.data?.otherImages || [],
        linkedPosts
    };
};

