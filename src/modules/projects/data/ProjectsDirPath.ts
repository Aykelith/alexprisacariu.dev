//= Functions & Modules
// Others
import path from 'path';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export const ProjectsDirPath = path.join(serverRuntimeConfig.PROJECT_ROOT, 'projects');
