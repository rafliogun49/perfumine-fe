/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Ensure compatibility with Next.js App Router
    },
    images: {
      unoptimized: true, // Cloudflare Pages doesn't support Next.js Image Optimization
    },
  };
  
  export default nextConfig;
  