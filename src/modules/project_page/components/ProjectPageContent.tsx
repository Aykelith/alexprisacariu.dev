//= Types & Enums & Consts
// Own
import { ProjectPageProps } from "../data/ProjectPageProps";

//= React components
// Own
import { Header, ImageOnClickFullscreen, Link } from '../../general';
// Others
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

const SharedComponents = {};

export default function ProjectPage({ title, content, coverImage, otherImages, linkedPosts, useCoverImage }: ProjectPageProps) {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>
            <div id="ProjectPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false} showHome={true}/>
                    <main className="flex flex-col">
                        <h1 className="text-4xl mt-1 mb-2">{title}</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="overflow-hidden rounded cursor-pointer">
                                <ImageOnClickFullscreen src={useCoverImage ? coverImage : otherImages[0]} className="w-full object-scale-down h-64 md:h-80 lg:h-min hover:scale-105 transition duration-500" />
                            </div>
                            <div className="postContent">
                                <MDXRemote {...content} components={SharedComponents} />
                                {
                                    (linkedPosts?.length >= 1)
                                    &&
                                    <div>
                                        <br/>
                                        <div>Read more about this project:</div>
                                        <div className="flex flex-col">
                                            {
                                                linkedPosts.map((postData) => {
                                                    return <Link href={postData.url}>{postData.title}</Link>
                                                })
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:col-span-2">
                                {
                                    otherImages.map((imagePath, index) => {
                                        if (!useCoverImage && index === 0) return null;

                                        return (
                                            <div key={imagePath} className="overflow-hidden cursor-pointer rounded">
                                                <ImageOnClickFullscreen src={imagePath} className="w-full object-scale-down h-64 md:h-80 lg:h-96 lg:h-min hover:scale-105 transition duration-500" loading="lazy"/>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
