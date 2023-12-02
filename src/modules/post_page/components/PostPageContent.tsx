//= Functions & Modules
// Own
import { getPublishedDateString } from '../../posts';

//= Structures & Data
// Own
import { PostPageProps } from '../data/PostPageProps';

//= React components
// Own
import { Link, Header, ImageOnClickFullscreen } from '../../general';
import { PostTags } from '../../posts';
// Others
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';

//= Style & Assets
// Own
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const SharedComponents = {
    ImageOnClickFullscreen
};

export default function PostPage(post: PostPageProps) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <div id="PostPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false} showHome={true}/>
                    <main className="mt-8 flex flex-col">
                        <Link href="/blog/1">{'< See more posts'}</Link>
                        <h1 className="text-4xl mt-1 mb-2">{post.title}</h1>
                        <div className="flex flex-col md:flex-row md:items-center mb-8 md:space-x-3">
                            <div>{getPublishedDateString(post.publishedOn)}</div>
                            <PostTags tags={post.tags} />
                        </div>
                        <div className="postContent flex flex-col">
                            <MDXRemote {...post.content} components={SharedComponents} />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
