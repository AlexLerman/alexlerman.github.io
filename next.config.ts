import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static export
  reactStrictMode: true,
  images: {
    unoptimized: true // Required for GitHub Pages
  }
};

export default nextConfig;