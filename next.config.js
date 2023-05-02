/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env:{
    baseURL:'https://fakestoreapi.com'
  },
  images: {
    domains: ['fakestoreapi.com'],
  },
}
