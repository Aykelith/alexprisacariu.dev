//= Functions & Modules
// Others
import path from 'path';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export default path.join(serverRuntimeConfig.PROJECT_ROOT, 'posts');
