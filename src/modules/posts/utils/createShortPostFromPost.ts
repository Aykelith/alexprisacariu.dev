//= Structures & Data
// Own
import { Post } from '../data/Post';

export function createShortPostFromPost(post: Post): Post {
    post.content = post.content.substring(0, post.content.search(/^$/gm));
    return post;
}
