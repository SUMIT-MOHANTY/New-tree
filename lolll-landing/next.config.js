/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}

console.log(' Next.js config loaded successfully');
module.exports = nextConfig;
