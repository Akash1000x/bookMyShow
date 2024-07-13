/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets-in.bmscdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
