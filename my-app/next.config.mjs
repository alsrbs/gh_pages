/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  basePath: '/gh_pages',
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
