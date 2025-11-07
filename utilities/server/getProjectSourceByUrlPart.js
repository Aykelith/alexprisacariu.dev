// Method
import readProjectsByUrlPartFile from "./readProjectsByUrlPartFile";
import readProjectSource from "./readProjectSource";

export default async function getProjectSourceByUrlPart(urlPart) {
    const projectsByUrlPart = await readProjectsByUrlPartFile();

    const projectDirName = projectsByUrlPart[urlPart];

    return readProjectSource(projectDirName);
}
