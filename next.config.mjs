
// next.config.js
const nextConfig = {
  // New configuration for images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgflip.com', 
        port: '', // 
        pathname: '/**', 
      },
    ],
  },
};


export default nextConfig;