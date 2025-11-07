// Methods
import matter from "gray-matter";
import getProjectSourceByUrlPart from "@/utilities/server/getProjectSourceByUrlPart";
import getProjectsUrlParts from "@/utilities/server/getProjectsUrlParts";

// Components
import { MDXRemote } from "next-mdx-remote-client/rsc";
import ClickableImage from "@/components/ClickableImage";

const StatisticsRows = [
    {
        label: "Period involved",
        field: "",
    },
    {
        label: "Tech stack",
        field: "",
    },
    {
        label: "My involvment",
        field: "",
    },
];

export default async function Project({ params }) {
    const { id } = await params;
    const projectSource = await getProjectSourceByUrlPart(id);
    const { data: projectSettings, content } = matter(projectSource);

    return (
        <div id="ProjectPage">
            <div className="box py-12">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-accent mb-6">
                        {projectSettings.title}
                    </h1>
                    <img
                        src={projectSettings.coverProjectImage}
                        alt={`Cover image for project "${projectSettings.title}"`}
                        className="object-contain max-h-[200px]"
                    />
                    <div className="statistics">
                        {StatisticsRows.map((rowData) => {
                            return (
                                <div key={rowData.label}>
                                    <div>{rowData.label}:</div>
                                    <div></div>
                                </div>
                            );
                        })}
                    </div>
                    <MDXRemote source={content} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projectSettings.otherImages?.map((imageSrc, index) => {
                            return (
                                <ClickableImage
                                    key={imageSrc}
                                    src={imageSrc}
                                    alt={`Image #${index + 1} for project "${projectSettings.title}"`}
                                    className="h-[300px]"
                                />
                            );
                        })}
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
