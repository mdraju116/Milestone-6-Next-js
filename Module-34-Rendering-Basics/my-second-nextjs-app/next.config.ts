import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  //https://res.cloudinary.com/dj493l0jy/image/upload/v1773919153/foods/00dda1e9-bb86-42d3-98f5-8336c6a3dcc1.png
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },


};

export default nextConfig;
