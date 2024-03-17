/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'io.google'],
    formats: ['image/webp'],
},
};

export default nextConfig;
