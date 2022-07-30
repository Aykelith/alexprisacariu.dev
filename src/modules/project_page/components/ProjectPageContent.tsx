//= Types & Enums & Consts
// Own
import { ProjectPageProps } from "../data/ProjectPageProps";

//= React components
// Own
import { Header } from '../../general';
// Others
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

const SharedComponents = {};

export default function ProjectPage({ title, content }: ProjectPageProps) {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>
            <div id="ProjectPage" className="page">
                <div className="box">
                    <Header small useH2 showContacts={false}/>
                    <main className="flex flex-col">

                        <div className="postContent">
                            <MDXRemote {...content} components={SharedComponents} />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
