export const PROJECT_STATUSES = {
    idea: { label: "Idea", className: "bg-gray-500 text-white" },
    in_planning: { label: "In Planning", className: "bg-blue-500 text-white" },
    in_implementation: { label: "In Implementation", className: "bg-amber-500 text-white" },
    in_production: { label: "In Production", className: "bg-green-500 text-white" },
    done: { label: "Done", className: "bg-teal-500 text-white" },
    abandoned: { label: "Abandoned", className: "bg-red-500 text-white" },
    on_hold: { label: "On Hold", className: "bg-orange-500 text-white" },
};

export const ALL_STATUSES = Object.keys(PROJECT_STATUSES);
