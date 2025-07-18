import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // replace `my-portfolio` with your repo name
  const repo = 'personal-website'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static export
  reactStrictMode: true,
  images: {
    unoptimized: true // Required for GitHub Pages
  },
  basePath,
  assetPrefix,
};

export default nextConfig;