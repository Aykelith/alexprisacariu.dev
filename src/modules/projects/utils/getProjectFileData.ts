//= Functions & Modules
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

    return {
        id: projectDirName,
        title: result.data.title,
        dirName: projectDirName,
        image: result.data.image,
        tags: result.data.tags,
        description: result.data.description,
        url: result.data.url,
        content: result.content || ""
    };
};

