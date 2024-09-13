/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/CloudWave',
    assetPrefix: '/CloudWave',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
