/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const path = isProd ? "/portfolio-example" : "";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  assetPrefix: isProd ? "/portfolio-example" : undefined,
  basePath: path,
};

module.exports = nextConfig;
