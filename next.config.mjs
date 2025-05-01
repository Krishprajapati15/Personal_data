/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores linting during builds, to prevent blocking
  },
  output: "export", // For static site generation (SSG)
  reactStrictMode: true, // Enables strict mode to catch potential issues during development
};

export default nextConfig;
