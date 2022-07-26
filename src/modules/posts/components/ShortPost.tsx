//= Functions & Modules
// Own
import { getPublishedDateString } from '../utils/getPublishedDateString';

//= Types & Enums & Consts
// Own
import { Post } from '../data/Post';

//= React components
// Own
import PostTags from './PostTags';
import { Link } from '../../general';

export default function ShortPost(post: Post) {
    return (
        <div className="flex flex-col">
            <Link href={`/posts/${post.dirName}`}>
                <h3 className="text-xl font-bold">{post.title}</h3>
            </Link>
            <div className="flex mb-1 items-center">
                <div className="text-sm mr-3">{getPublishedDateString(post.publishedOn)}</div>
                <PostTags tags={post.tags} />
            </div>
            <div>
                {post.content}
                <Link href={`/posts/${post.dirName}`} className="whitespace-nowrap">{'Read more >'}</Link>
            </div>
        </div>
    );
}
