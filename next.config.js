/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
