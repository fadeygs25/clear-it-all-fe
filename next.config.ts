// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,     
  images: {
    domains: ['cdn.builder.io'], 
  },
};

export default nextConfig;
