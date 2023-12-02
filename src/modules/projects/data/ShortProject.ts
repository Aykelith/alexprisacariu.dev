//= Types & Enums & Consts
// Own
import { Project } from "./Project";

export type ShortProject = Pick<Project, "id" | "title" | "coverImage" | "tags" | "description" | "url">
