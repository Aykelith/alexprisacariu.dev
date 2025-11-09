/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.(".svg"),
        );
        fileLoaderRule.exclude = /\.svg$/;
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
    async redirects() {
        return [
            // Basic redirect
            {
                source: "/blog",
                destination: "/blog/1",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
