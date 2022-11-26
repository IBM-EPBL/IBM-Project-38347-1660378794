/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  experimental: { esmExternals: true },
  images: {
    domains: ["external-content.duckduckgo.com"],
  },
};

module.exports = nextConfig;
