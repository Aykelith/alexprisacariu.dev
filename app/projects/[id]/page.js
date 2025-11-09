// Methods
import matter from "gray-matter";
import getProjectSourceByUrlPart from "@/utilities/server/projects/getProjectSourceByUrlPart";
import getProjectsUrlParts from "@/utilities/server/projects/getProjectsUrlParts";

// Components
import { MDXRemote } from "next-mdx-remote-client/rsc";
import ClickableImage from "@/components/ClickableImage";
import BlurredSidesImg from "@/components/BlurredSidesImg";
import transformProjectData from "@/utilities/server/projects/transformProjectData";

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
