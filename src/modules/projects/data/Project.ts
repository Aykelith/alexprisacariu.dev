export interface Project {
    id: string;
    title: string;
    dirName: string;
    content: string;
    coverImage: string;
    tags: string[];
    description: string;
    pinned?: 1;
    url?: string;
    otherImages?: string[];
    linkedPosts?: { url: string, title: string }[];
    useCoverImage?: 1;
}
