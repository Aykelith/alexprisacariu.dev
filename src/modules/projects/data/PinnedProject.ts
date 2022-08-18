//= Types & Enums & Consts
// Own
import { Project } from "./Project";

export type PinnedProject = Pick<Project, "id" | "title" | "image" | "tags" | "description" | "url">
