import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: isDev,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      // Behold caches Instagram media on its own CDN
      { protocol: "https", hostname: "feeds.behold.so" },
      // Instagram CDN — every region/subdomain (scontent-sof1-1, -iad3-2, etc.)
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
};

export default nextConfig;
