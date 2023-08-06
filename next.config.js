/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      // Generate a static page for the root path
      '/': { page: '/home' },
      ...defaultPathMap
    };
  },
};

module.exports = nextConfig;
