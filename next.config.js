/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ["./src"],
  },
  // Empty turbopack config to silence the warning
  // Turbopack handles fonts and assets by default
  turbopack: {},
};

export default nextConfig;
