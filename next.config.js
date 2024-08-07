// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['estarch.com.bd', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
