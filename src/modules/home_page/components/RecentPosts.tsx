//= Structures & Data
// Own
import { Post } from '../../posts';

//= React components
// Own
import Section from './Section';
import { ShortPost } from '../../posts';
// Others
import Link from 'next/link';

export default function RecentPosts({ shortPosts }: { shortPosts: Post[] }) {
    return (
        <Section title="Sometimes I write">
            <div className="flex flex-col gap-4">
                {shortPosts &&
                    shortPosts.map((shortPost: Post) => {
                        return <ShortPost key={shortPost.dirName} {...shortPost} />;
                    })}
            </div>
            <div>
                <Link href="/blog/1" className="font-bold">
                    Read more posts
                </Link>
            </div>
        </Section>
    );
}
