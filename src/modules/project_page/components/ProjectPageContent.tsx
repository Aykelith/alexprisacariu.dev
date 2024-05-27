//= Types & Enums & Consts
// Own
import { ProjectPageProps } from "../data/ProjectPageProps";

//= React components
// Own
import { Header, ImageOnClickFullscreen, Link } from '../../general';
import { ShortPost } from '../../posts';
// Others
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

const SharedComponents = {};

export default function ProjectPage({ title, content, coverProjectImage, otherImages, linkedPosts }: ProjectPageProps) {
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
                        <div className="overflow-hidden rounded cursor-pointer h-64 md:h-72 w-full">
                            <ImageOnClickFullscreen src={coverProjectImage} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div className="postContent mt-4">
                            <MDXRemote {...content} components={SharedComponents} />
                            {
                                (linkedPosts?.length >= 1)
                                &&
                                <div>
                                    <br/>
                                    <div>Read more about this project:</div>
                                    <div className="flex flex-col gap-2 mt-3">
                                        {
                                            linkedPosts.map((postData) => {
                                                return <ShortPost key={postData.dirName} {...postData} />
                                            })
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col mt-6">
                            <h2 className="text-2xl mb-2">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:col-span-2">
                                {
                                    otherImages.map((imagePath, _index) => {
                                        return (
                                            <div key={imagePath} className="overflow-hidden cursor-pointer rounded h-64 md:h-80 lg:h-96 w-full border border-gray-500/[0.05]">
                                                <ImageOnClickFullscreen src={imagePath} className="w-full h-full object-scale-down hover:scale-105 transition duration-500" loading="lazy"/>
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
