//= Structures & Data
// Own
import Post from '../../data/Post';

//= React components
// Own
import Section from "./Section";
import ShortPost from '../ShortPost';
// Others
import Link from 'next/link';

export default function RecentPosts({ shortPosts }: { shortPosts: Post[] }) {
    return (
        <Section title="Sometimes I write">
            <div className="flex flex-col gap-4">
                {shortPosts &&
                    shortPosts.map((shortPost: any) => {
                        return <ShortPost {...shortPost} />;
                    })}
            </div>
            <div>
                <Link href="#">
                    <a href="#" className="font-bold">
                        Read more posts
                    </a>
                </Link>
            </div>
        </Section>
    );
}
