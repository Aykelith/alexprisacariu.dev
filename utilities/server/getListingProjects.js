// Methods
import getProjects from "./getProjects";

const ProjectsDataVariablesNames = [
    "title",
    "description",
    "coverShortProjectImage",
    "tags",
    "yearsActive",
    "urlPart",
];

export default async function getListingProjects(
    includeIgnoredProjects = false,
) {
    return getProjects(
        ProjectsDataVariablesNames,
        null,
        includeIgnoredProjects,
    );
}
