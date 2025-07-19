import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

// if (isGithubActions) {
//   const repo = 'personal-website'
//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static export
  reactStrictMode: true,
  images: {
    unoptimized: true // Required for GitHub Pages
  },
  basePath,
  assetPrefix,
  trailingSlash: true,
};

export default nextConfig;