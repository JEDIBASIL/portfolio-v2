/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(pdf)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        fallback: 'file-loader',
                        publicPath: '/_next/static/',
                        outputPath: 'static/',
                        name: '[name].[hash].[ext]',
                    },
                },
            ],
        });

        return config;
    },
}

module.exports = nextConfig
