//= Types & Enums & Consts
// Own
import { Post } from '../../posts';
import { Project } from '../../projects';

export type HomePageProps = {
    shortPosts: Post[];
    pinnedProjects: Project[];
}

