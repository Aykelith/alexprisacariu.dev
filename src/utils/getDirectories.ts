//= Functions & Modules
// Others
import { readdirSync } from 'fs';

export default (source: string) =>
    readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
