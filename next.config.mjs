/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lz-4-playground-demo',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig