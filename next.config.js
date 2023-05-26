/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env:{
    baseURL:'https://fakestoreapi.com',
    baseURL2:'https://gnews.io/api/v4/search?q=indonesia&lang=en&country=us&max=10&apikey=c3b691cd40a6ef29d8519c686d0d9f27',
    apiKey:'07d68c05a1cd42f38909f7e8b54ce5f9'
  },
  images: {
    domains: [
      'fakestoreapi.com',
      'media.cnn.com',
      'www.reuters.com',
      'techcrunch.com',
      'i-invdn-com.investing.com',
      'www.digitalnewsasia.com',
      'cdnph.upi.com'
    ],
  },
}
