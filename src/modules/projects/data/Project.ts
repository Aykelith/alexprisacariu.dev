//= Structures & Data
// Own
import { Post } from "../../posts";

export interface Project {
    id: string;
    title: string;
    dirName: string;
    content: string;
    coverShortProjectImage: string;
    coverProjectImage: string;
    tags: string[];
    description: string;
    pinned?: 1;
    url?: string;
    otherImages?: string[];
    linkedPosts?: Post[];
}
