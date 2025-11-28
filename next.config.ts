import type { NextConfig } from "next";

const marketingSlugs = [
  "messaging",
  "videochat",
  "screenshare",
  "stories",
  "friends",
  "genz",
  "help",
  "privacy",
  "terms",
  "about",
  "cookies",
  "signup",
];

const nextConfig: NextConfig = {
  async rewrites() {
    const marketingRewrites = marketingSlugs.map((slug) => ({
      source: `/${slug}`,
      destination: "/",
    }));

    return [
      {
        source: "/login",
        destination: "/",
      },
      {
        source: "/login/:path*",
        destination: "/",
      },
      {
        source: "/Login",
        destination: "/",
      },
      {
        source: "/Login/:path*",
        destination: "/",
      },
      ...marketingRewrites,
    ];
  },
};

export default nextConfig;
