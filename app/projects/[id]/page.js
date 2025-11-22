// Methods
import matter from "gray-matter";
import getProjectSourceByUrlPart from "@/utilities/server/projects/getProjectSourceByUrlPart";
import getProjectsUrlParts from "@/utilities/server/projects/getProjectsUrlParts";
import transformProjectData from "@/utilities/server/projects/transformProjectData";
import readPostSettings from "@/utilities/server/blog/readPostSettings";
import constructPostData from "@/utilities/server/blog/constructPostData";

// Components
import { MDXRemote } from "next-mdx-remote-client/rsc";
import ClickableImage from "@/components/ClickableImage";
import BlurredSidesImg from "@/components/BlurredSidesImg";
import BlogPostsList from "@/components/BlogPostsList";

// Constants
import { HomePostsDataVariablesNames } from "@/utilities/server/blog/getHomePosts";

const StatisticsRows = [
    {
        label: "Period involved",
        data: (data) => (
            <div>
                {data.yearsActive[0]} - {data.yearsActive[1]}
            </div>
        ),
    },
    {
        label: "Tech stack",
        data: (data) => <div>{data.techStack?.join(", ")}</div>,
    },
    {
        label: "My involvement",
        data: (data) => <div>{data.myInvolvement}</div>,
    },
];

export default async function Project({ params }) {
    const { id } = await params;
    const projectSource = await getProjectSourceByUrlPart(id);
    const { data: projectSettings, content } = matter(projectSource);
    transformProjectData(projectSettings);

    const linkedPosts = projectSettings.linkedPosts?.length > 0 ? await Promise.all(projectSettings.linkedPosts.map(async (postId) => {
        return constructPostData(
            await readPostSettings(postId),
            postId,
            HomePostsDataVariablesNames,
        );
    })) : [];

    return (
        <div id="ProjectPage">
            <div className="box py-12">
                <div className="flex flex-col">
                    <BlurredSidesImg
                        className="mb-8"
                        src={projectSettings.coverProjectImage}
                        alt={`Cover image for project "${projectSettings.title}"`}
                        imgClassName="max-h-[200px]"
                    />
                    <h1 className="text-3xl font-accent mb-6">
                        {projectSettings.title}
                    </h1>
                    <div className="statistics">
                        {StatisticsRows.map((rowData) => {
                            return (
                                <div key={rowData.label}>
                                    <div>{rowData.label}:</div>
                                    {rowData.data(projectSettings)}
                                </div>
                            );
                        })}
                    </div>
                    <div className="post-content">
                        <MDXRemote source={content} />
                    </div>
                    {linkedPosts.length > 0 && (
                        <>
                            <h2 className="text-2xl font-accent mb-6">
                                Blog posts
                            </h2>
                            <BlogPostsList
                                posts={linkedPosts}
                                addSeeMore={false}
                                className="mb-6"
                            />
                        </>
                    )}
                    <h2 className="text-2xl font-accent mb-6">Images</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projectSettings.otherImages?.map(
                            (imageData, index) => {
                                return (
                                    <ClickableImage
                                        key={imageData.src}
                                        src={imageData.src}
                                        alt={`Image #${index + 1} for project "${projectSettings.title}"`}
                                        visibleAlt={imageData.alt}
                                        className="h-[300px]"
                                    />
                                );
                            },
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return (await getProjectsUrlParts()).map((urlPart) => ({
        id: urlPart,
    }));
}
