//= Types & Enums & Consts
// Own
import { Post } from '../../posts';

export type BlogPageProps = {
    posts: Post[];
    pagesCount: number;
    currentPage: number;
};
