/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/mofarmland--website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mofarmland--website/' : '',
}

module.exports = nextConfig
