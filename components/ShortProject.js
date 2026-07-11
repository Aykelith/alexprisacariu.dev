// Methods
import clsx from "clsx";

// Components
import { ProgressBarLink } from "@/components/progress_bar";

// Constants
import { PROJECT_STATUSES } from "@/constants/ProjectStatuses";

export default function ShortProject({ project, className, maxTags = 2, showStatus = false }) {
    const statusInfo = showStatus && project.status ? PROJECT_STATUSES[project.status] : null;

    return (
        <ProgressBarLink
            key={project.title}
            className={clsx("project-card", className)}
            href={`/projects/${project.urlPart}`}
        >
            <div className="project-img relative">
                {statusInfo && (
                    <span className={clsx("absolute top-1 left-1 z-10 text-xs font-semibold px-1.5 py-0.5 rounded", statusInfo.className)}>
                        {statusInfo.label}
                    </span>
                )}
                {project.thumbnail?.webp ? (
                    <picture>
                        <source
                            srcSet={
                                project.thumbnail.webp
                            }
                            type="image/webp"
                        />
                        <img
                            src={
                                project.thumbnail
                                    .png ||
                                project.thumbnail
                            }
                        />
                    </picture>
                ) : (
                    <img src={project.thumbnail} />
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