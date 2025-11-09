// Methods
import getProjects from "./getProjects";

const ProjectsDataVariablesNames = [
    "title",
    "description",
    "coverShortProjectImage",
    "tags",
    "pinned",
    "urlPart",
];

export default async function getHomeProjects(includeIgnoredProjects = false) {
    return getProjects(
        ProjectsDataVariablesNames,
        (projectSettings) => !!projectSettings.pinned,
        includeIgnoredProjects,
    );
}
