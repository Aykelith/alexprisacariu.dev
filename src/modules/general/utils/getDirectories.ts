//= Functions & Modules
// Others
import { readdirSync } from 'fs';

export const getDirectories = (source: string) =>
    readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
