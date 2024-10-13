// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https', // اگر آپ صرف HTTPS پروٹوکول استعمال کرنا چاہتے ہیں
          hostname: 'i.imgflip.com', // ڈومین یہاں شامل کریں
          port: '', // عام طور پر پورٹ نہیں شامل کی جاتی، لیکن آپ یہاں کوئی خاص پورٹ دے سکتے ہیں
        },
      ],
    },
  };
  
  export default nextConfig;
  