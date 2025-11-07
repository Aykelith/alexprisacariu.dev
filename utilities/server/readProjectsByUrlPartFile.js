// Methods
import path from "path";
import fs from "fs/promises";

// Constants
import ProjectsDirectoryPath from "@/constants/server/ProjectsDirectoryPath";
import ProjectsByUrlPartFileName from "@/constants/server/ProjectsByUrlPartFileName";

export default async function readProjectsByUrlPartFile() {
    const filePath = path.join(
        ProjectsDirectoryPath,
        ProjectsByUrlPartFileName,
    );

    return JSON.parse(await fs.readFile(filePath, "utf-8"));
}
