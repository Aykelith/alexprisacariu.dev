//= Functions & Modules
// Own
import { getShortProjects } from './getShortProjects';

//= Structures & Data
// Own
import { ShortProject } from '../data/ShortProject';

export function getPinnedProjects(): ShortProject[] {
    return getShortProjects(undefined, project => project.pinned === 1);
}
