/** @type {import('next').NextConfig} */
const config = {
  // Enable strict mode for better error catching
  reactStrictMode: true,
  
  // Configure image domains
  images: {
    domains: ['assets.leetcode.com', 'avatars.githubusercontent.com', 'github.com', 'leetcode.com'],
  },

  // Webpack configuration for TypeScript and module resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
  },
}

module.exports = config
