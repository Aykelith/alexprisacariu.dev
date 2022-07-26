export interface Project {
    title: string;
    dirName: string;
    content: string;
    image: string;
    tags: string[];
    description: string;
    pinned?: 1;
    skip?: 1;
}
