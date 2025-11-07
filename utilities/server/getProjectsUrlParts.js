// Methods
import readProjectsByUrlPartFile from "./readProjectsByUrlPartFile";

export default async function getProjectsUrlParts() {
    return Object.keys(await readProjectsByUrlPartFile());
}
