export interface Project {
    id: string;
    title: string;
    dirName: string;
    content: string;
    image: string;
    tags: string[];
    description: string;
    pinned?: 1;
    url?: string;
}
