/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://javanoroeste.com.br",
        port: '',
        pathname: '/javanoroeste/javaday_riopreto/src/assets/**'
      }
    ]
  }
};

export default nextConfig;
