/** @type {import('next').NextConfig} */
const { LOCAL } = process.env;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  basePath: LOCAL === "development" ? "" : "/portfolio-example",
};

module.exports = nextConfig;
