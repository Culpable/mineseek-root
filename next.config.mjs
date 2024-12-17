/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Essential for static site generation
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Recommended for GitHub Pages
}

export default nextConfig
