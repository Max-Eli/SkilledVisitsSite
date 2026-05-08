import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: isDev,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      // Behold caches Instagram media on this CDN
      { protocol: "https", hostname: "feeds.behold.so" },
      // Direct Instagram CDN domains (used when Behold returns originals)
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-iad3-1.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-iad3-2.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-lga3-1.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-lga3-2.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-mia3-1.cdninstagram.com" },
      { protocol: "https", hostname: "scontent-mia3-2.cdninstagram.com" },
      { protocol: "https", hostname: "instagram.fmia2-1.fna.fbcdn.net" },
    ],
  },
};

export default nextConfig;
