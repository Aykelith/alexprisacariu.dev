//= Functions & Modules
// Own
import getPublishedDateString from '../utils/getPublishedDateString';

//= Structures & Data
// Own
import Post from '../data/Post';

//= React components
// Own
import Link from './Link';
import PostTags from './PostTags';

export default function ShortPost(post: Post) {
    return (
        <div className="flex flex-col">
            <Link href={`/posts/${post.dirName}`}>
                <a>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                </a>
            </Link>
            <div className="flex mb-1 items-center">
                <div className="text-sm mr-3">{getPublishedDateString(post.publishedOn)}</div>
                <PostTags tags={post.tags} />
            </div>
            <div>
                {post.content}
                <Link href={`/posts/${post.dirName}`}>
                    <a>{'Read more >'}</a>
                </Link>
            </div>
        </div>
    );
}
