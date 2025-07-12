import type { NextConfig } from "next";
import crypto from 'crypto';

const nextConfig: NextConfig = {
  // Only use export mode for production builds when explicitly enabled
  ...(process.env.NODE_ENV === 'production' && process.env.EXPORT_MODE === 'true' ? { output: 'export' } : {}),
  trailingSlash: true,
  // Prevent build errors with images
  images: {
    unoptimized: true,
    domains: ['assets.leetcode.com', 'avatars.githubusercontent.com', 'github.com', 'leetcode.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.leetcode.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
  // Webpack optimization settings
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 70000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
            priority: 40,
            enforce: true
          },
          lib: {
            test(module: any) {
              return module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier());
            },
            name(module: any) {
              const hash = crypto.createHash('sha1');
              hash.update(module.identifier());
              return hash.digest('hex').slice(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true
          }
        }
      }
    };

    return config;
  },
  // Enable module resolution features
  experimental: {
    serverComponentsExternalPackages: ['next'],
  }
};

export default nextConfig;
