/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ansjewelry.com',
      },
      {
        protocol: 'https',
        hostname: 'i.etsystatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ubykate.com',
      },
      {
        protocol: 'https',
        hostname: 'hfgnext.s3.eu-west-3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '5.imimg.com',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'static.malabargoldanddiamonds.com',
      },
    ],
  },
}

module.exports = nextConfig
