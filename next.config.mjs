/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/CloudWave/',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
