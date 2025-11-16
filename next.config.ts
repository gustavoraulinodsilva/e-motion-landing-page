import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a fully static site (writes into ./out)
  // Note: `next export` has been replaced by `output: 'export'` in modern Next.js
  output: 'export',
  // trailingSlash keeps routes as folder/index.html which GitHub Pages serves well
  trailingSlash: true,
};

export default nextConfig;
