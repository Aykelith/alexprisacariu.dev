// Methods
import clsx from "clsx";

// Components
import { ProgressBarLink } from "@/components/progress_bar";

export default function ShortProject({ project, className, maxTags = 2 }) {
    return (
        <ProgressBarLink
            key={project.title}
            className={clsx("project-card", className)}
            href={`/projects/${project.urlPart}`}
        >
            <div className="project-img">
                {project.coverShortProjectImage?.webp ? (
                    <picture>
                        <source
                            srcSet={
                                project.coverShortProjectImage.webp
                            }
                            type="image/webp"
                        />
                        <img
                            src={
                                project.coverShortProjectImage
                                    .png ||
                                project.coverShortProjectImage
                            }
                        />
                    </picture>
                ) : (
                    <img src={project.coverShortProjectImage} />
                )}
            </div>
            <div className="project-body">
                <div className="project-title">{project.title}</div>
                <div className="project-desc">
                    {project.description}
                </div>
                <div className="flex-1 min-h-2"></div>
                <div className="project-tags">
                    {project.tags.map((tag, index) => {
                        if (index >= maxTags) {
                            if (index == maxTags) {
                                return (
                                    <div key="more" className="tag">
                                        ...
                                    </div>
                                );
                            }

                            return null;
                        }

                        return (
                            <div key={tag} className="tag">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
        </ProgressBarLink>
    );
}