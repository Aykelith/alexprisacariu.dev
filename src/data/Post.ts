interface Post {
    title: string;
    tags: string[];
    publishedOn: string;
    dirName: string;
    content: string;
    skip?: 1;
}

export default Post;
