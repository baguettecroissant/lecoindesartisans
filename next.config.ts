import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/blog/autoconsommation-vente-totale-solaire-2026",
        destination: "/blog/autoconsommation-ou-vente-totale-panneaux-solaires",
        permanent: true,
      },
      {
        source: "/blog/pac-1-euro-arnaque",
        destination: "/blog/pompe-a-chaleur-1-euro-arnaque-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
