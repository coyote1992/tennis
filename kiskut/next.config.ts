import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
  // two root layouts (A at /, B at /b) share one 404 page
  experimental: { globalNotFound: true },
};

export default nextConfig;
