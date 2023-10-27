/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['m.media-amazon.com']
  }
}

module.exports = nextConfig