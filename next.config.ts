import type { NextConfig } from 'next';
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
/*
reactStrictMode: true,
output: 'exports',
images: {
    unoptimized: true,
},
basePath: isProd ? "/<your-repo-name>" : "",
assetPrefix: isProd ? "/<your-repo-name>/" : "",
*/
};
export default nextConfig;
