/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/Cafe-demo" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
