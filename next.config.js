module.exports = {
    fastRefresh: true,
    output: 'export',
    distDir: 'docs',
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.resolve.fallback = { fs: false };

        return config;
    },
};
