import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    // https://images.unsplash.com/photo-1789207051591-05b3c423cc14
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/photo-1789207051591-05b3c423cc14",
          search: "",
        },
      ],
    },


};

export default nextConfig;
