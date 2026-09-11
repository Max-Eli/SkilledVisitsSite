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
  // Three drips were renamed on the updated menu. Keep the old per-drip
  // landing-page URLs working so existing links and search rankings survive.
  async redirects() {
    return [
      {
        source: "/services/iv-therapy/jet-lag-recovery",
        destination: "/services/iv-therapy/jet-lag-reset",
        permanent: true,
      },
      {
        source: "/services/iv-therapy/post-surgery-recovery",
        destination: "/services/iv-therapy/post-surgery-support",
        permanent: true,
      },
      {
        source: "/services/iv-therapy/prenatal-support",
        destination: "/services/iv-therapy/prenatal-care",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
