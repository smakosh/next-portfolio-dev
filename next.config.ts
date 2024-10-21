import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  swcMinify: true,
  experimental: {
    reactCompiler: true,
  },
};

module.exports = nextConfig;
