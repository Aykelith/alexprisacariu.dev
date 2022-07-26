//= Types & Enums & Consts
// Own
import { Post } from '../../posts';
// Others
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type PostPageProps = Omit<Post, 'content'> & {
    content: MDXRemoteSerializeResult;
};

