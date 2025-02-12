/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig = {
    experimental: {
      appDir: true, // Ensure compatibility with Next.js App Router
    },
    images: {
      unoptimized: true, // Cloudflare Pages doesn't support Next.js Image Optimization
    },
  };
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
  
  export default nextConfig;
  