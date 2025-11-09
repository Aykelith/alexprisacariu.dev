// Method
import readProjectSource from "./readProjectSource";

export default async function getProjectSourceByUrlPart(urlPart) {
    return readProjectSource(urlPart);
}
