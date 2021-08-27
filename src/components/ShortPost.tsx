//= React components
// Others
import Link from 'next/link';

export default function ShortPost({ title, dirName }) {
    return (
        <div className="flex flex-col">
            <Link href={`/posts/${dirName}`}>
                <a>
                    <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
                </a>
            </Link>
        </div>
    );
}
