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

export default (projectDirName: string): Project => {
    const result = matter(readFileSync(path.join(ProjectsDirPath, projectDirName, ProjectContentFileName), { encoding: 'utf8' }).toString());

    return {
        title: result.data.title,
        dirName: projectDirName,
        content: result.content || "",
        skip: result.data.skip || null
    };
};

