/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    baseURL: "http://localhost:8000/api"
  },
  images: {
    domains:[''],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns : [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000'
        },
        {
            protocol: 'https',
            hostname: 'www.smkmvp.sch.id',
            port: ''
        },
        {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '',
            pathname: '/img/**'
        }
    ],
}
}

module.exports = nextConfig
