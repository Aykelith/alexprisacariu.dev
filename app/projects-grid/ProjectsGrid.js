"use client";

import { useState, useMemo } from "react";
import clsx from "clsx";
import { ProgressBarLink } from "@/components/progress_bar";
import { PROJECT_STATUSES, ALL_STATUSES } from "@/constants/ProjectStatuses";

const DEFAULT_HIDDEN_STATUSES = new Set(["abandoned", "idea"]);

function daysSince(isoDate) {
    if (!isoDate) return null;
    const ms = Date.now() - new Date(isoDate).getTime();
    return Math.floor(ms / 86400000);
}

function ProjectCard({ project }) {
    const statusInfo = project.status ? PROJECT_STATUSES[project.status] : null;
    const daysStarted = daysSince(project.started_on);
    const daysActivity = daysSince(project.last_activity_on);

    return (
        <ProgressBarLink
            className="project-card w-full"
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
                        <source srcSet={project.thumbnail.webp} type="image/webp" />
                        <img src={project.thumbnail.png || project.thumbnail} alt={project.title} />
                    </picture>
                ) : (
                    <img src={project.thumbnail} alt={project.title} />
                )}
            </div>
            <div className="project-body">
                <div className="project-title">{project.title}</div>
                <div className="project-desc">{project.description}</div>
                <div className="flex-1 min-h-2"></div>
                {(daysStarted !== null || daysActivity !== null) && (
                    <div className="flex gap-3 text-xs text-muted-foreground mb-1">
                        {daysStarted !== null && (
                            <span>Started {daysStarted}d ago</span>
                        )}
                        {daysActivity !== null && (
                            <span>Active {daysActivity}d ago</span>
                        )}
                    </div>
                )}
                <div className="project-tags">
                    {project.tags?.slice(0, 2).map((tag) => (
                        <div key={tag} className="tag">{tag}</div>
                    ))}
                    {project.tags?.length > 2 && (
                        <div className="tag">...</div>
                    )}
                </div>
            </div>
        </ProgressBarLink>
    );
}

const SORT_OPTIONS = [
    { value: "alpha_asc", label: "A → Z" },
    { value: "alpha_desc", label: "Z → A" },
    { value: "started_asc", label: "Started (oldest first)" },
    { value: "started_desc", label: "Started (newest first)" },
    { value: "activity_asc", label: "Last activity (oldest first)" },
    { value: "activity_desc", label: "Last activity (newest first)" },
];

function sortProjects(projects, sortBy) {
    return [...projects].sort((a, b) => {
        switch (sortBy) {
            case "alpha_asc": return a.title.localeCompare(b.title);
            case "alpha_desc": return b.title.localeCompare(a.title);
            case "started_asc": return (a.started_on || "").localeCompare(b.started_on || "");
            case "started_desc": return (b.started_on || "").localeCompare(a.started_on || "");
            case "activity_asc": return (a.last_activity_on || "").localeCompare(b.last_activity_on || "");
            case "activity_desc": return (b.last_activity_on || "").localeCompare(a.last_activity_on || "");
            default: return 0;
        }
    });
}

export default function ProjectsGrid({ projects }) {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("alpha_asc");
    const [hiddenStatuses, setHiddenStatuses] = useState(DEFAULT_HIDDEN_STATUSES);

    const toggleStatus = (status) => {
        setHiddenStatuses((prev) => {
            const next = new Set(prev);
            if (next.has(status)) next.delete(status);
            else next.add(status);
            return next;
        });
    };

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return sortProjects(
            projects.filter((p) => {
                if (p.status && hiddenStatuses.has(p.status)) return false;
                if (q && !p.title.toLowerCase().includes(q) && !p.urlPart.toLowerCase().includes(q)) return false;
                return true;
            }),
            sortBy,
        );
    }, [projects, search, sortBy, hiddenStatuses]);

    return (
        <div>
            <div className="flex flex-col gap-3 mb-6">
                <div className="flex flex-wrap gap-3 items-center">
                    <input
                        type="search"
                        placeholder="Search projects…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded px-3 py-1.5 text-sm bg-background flex-1 min-w-[200px]"
                    />
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded px-3 py-1.5 text-sm bg-background"
                    >
                        {SORT_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-wrap gap-2">
                    {ALL_STATUSES.map((status) => {
                        const info = PROJECT_STATUSES[status];
                        const active = !hiddenStatuses.has(status);
                        return (
                            <button
                                key={status}
                                onClick={() => toggleStatus(status)}
                                className={clsx(
                                    "text-xs font-semibold px-2.5 py-1 rounded border transition-opacity",
                                    active ? info.className : "opacity-30 border-current",
                                )}
                            >
                                {info.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {filtered.length === 0 ? (
                <div className="text-muted-foreground text-sm">No projects match.</div>
            ) : (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(205px,1fr))] gap-3 md:gap-4">
                    {filtered.map((project) => (
                        <ProjectCard key={project.urlPart} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
}
