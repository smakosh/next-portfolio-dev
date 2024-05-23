// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  swcMinify: true,
  experimental: {
    reactCompiler: true,
    ppr: true,
  },
};

module.exports = nextConfig;
