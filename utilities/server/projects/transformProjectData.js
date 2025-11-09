export default function transformProjectData(projectSettings) {
    if (projectSettings.otherImages) {
        projectSettings.otherImages = projectSettings.otherImages.map(
            (entity) => {
                if (typeof entity === "string") {
                    return { src: entity };
                }

                return entity;
            },
        );
    }

    return projectSettings;
}
