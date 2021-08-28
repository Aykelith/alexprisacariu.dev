//= Structures & Data
// Own
import Post from '../../data/Post';

//= React components
// Own
import ShortPost from '../ShortPost';
// Others
import Link from 'next/link';

export default function RecentPosts({ shortPosts }: { shortPosts: Post[] }) {
    return (
        <div className="flex flex-col space-y-3">
            <h2 className="text-2xl font-bold">Sometimes I write</h2>
            <div className="flex flex-col">
                {shortPosts &&
                    shortPosts.map((shortPost: any) => {
                        return <ShortPost {...shortPost} />;
                    })}
            </div>
            <div>
                <Link href="#">
                    <a href="#" className="text-indigo-700 font-bold">
                        Read more posts
                    </a>
                </Link>
            </div>
        </div>
    );
}
