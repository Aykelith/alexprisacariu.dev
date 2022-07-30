//= Types & Enums & Consts
// Own
import { Project } from '../../projects';
// Others
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type ProjectPageProps = Omit<Project, 'content'> & {
    content: MDXRemoteSerializeResult;
};

