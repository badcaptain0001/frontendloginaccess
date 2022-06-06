/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // config hostname for images
  images: {
    domains: ['ecomsamp.herokuapp.com'],
    hostname: 'ecomsamp.herokuapp.com',
  },
}

module.exports = nextConfig
