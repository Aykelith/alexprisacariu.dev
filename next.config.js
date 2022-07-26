module.exports = {
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname,
    },
    redirects: () => [
        {
            source: '/posts/post1_dev_ideas_1_handle_data_between_tabs_components',
            destination: '/posts/post008_dev_ideas_1_handle_data_between_tabs_components',
            permanent: true,
        },
        {
            source: '/posts/post2_creating_a_radio_station_on_a_raspberry_pi_using_darkice_and_icecast2',
            destination: '/posts/post009_creating_a_radio_station_on_a_raspberry_pi_using_darkice_and_icecast2',
            permanent: true,
        },
    ],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.resolve.fallback = { fs: false };

        return config;
    },
};
