//= React components
// Own
import ShortPost from '../ShortPost';
// Others
import Link from 'next/link';

export default function RecentPosts({ shortPosts }: { shortPosts: any[] }) {
    return (
        <div className="flex flex-col space-y-3">
            <h2 className="text-2xl font-bold">Sometimes I write</h2>
            <div className="flex flex-col">
                {shortPosts &&
                    shortPosts.map((shortPost: any) => {
                        return <ShortPost title={shortPost.title} dirName={shortPost.dirName} />;
                    })}
            </div>
            <div>
                <Link href="#">
                    <a href="#" className="text-blue-400 underline">
                        Read more posts
                    </a>
                </Link>
            </div>
        </div>
    );
}
