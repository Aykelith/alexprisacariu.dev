//= Types & Enums & Consts
// Own
import { Project } from "./Project";

export type ShortProject = Pick<Project, "id" | "title" | "coverShortProjectImage" | "tags" | "description" | "url">
