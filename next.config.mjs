/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Essential for static site generation
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Recommended for GitHub Pages
  
  // Configure static generation behavior
  experimental: {
    // Enable static generation of dynamic routes
    staticPageGenerationTimeout: 300,  // Increase timeout for static generation (in seconds)
  },
}

export default nextConfig
