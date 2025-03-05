import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh5.googleusercontent.com"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
