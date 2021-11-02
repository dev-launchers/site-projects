const withPlugins = require("next-compose-plugins");
const imagesPlugin = require("next-optimized-images");

const nextConfig = {
  basePath: '/projects',
  images: {
    /*
      next-images plugin is conflicting with Next.js 11 static import feature.
      see the discussion here:
      https://github.com/twopluszero/next-images/issues/73
    */
    domains: [
      "images.prismic.io",
      "devlaunchersproduction.blob.core.windows.net",
    ],
    disableStaticImages: true,
  },
  webpack5: true,
  reactStrictMode: true, // It helps you avoid legacy code, and deprecated APIs.
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // we have too many errors if you run npm run lint ,but after bug fixes we could enforce this.
    ignoreDuringBuilds: false,
  },
};
module.exports = withPlugins([[imagesPlugin], nextConfig]);
