import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a verification build run without replacing the `.next` folder that any
  // locally running server is already serving.
  distDir: process.env.NEXT_BUILD_DIR || '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
      {
        source: '/purva-sounds-of-water-villa',
        destination: '/purva-sounds-of-water',
        permanent: true,
      },
      {
        source: '/purva-sounds-of-water-5bhk-luxury-villa',
        destination: '/purva-sounds-of-water',
        permanent: true,
      },
      {
        source: '/purva-villa',
        destination: '/purva-sounds-of-water',
        permanent: true,
      },
      {
        source: '/purva',
        destination: '/purva-sounds-of-water',
        permanent: true,
      },
      {
        source: '/villa-plots',
        destination: '/plots-in-bangalore',
        permanent: true,
      },
      {
        source: '/villa-plots-bangalore',
        destination: '/plots-in-bangalore',
        permanent: true,
      },
      {
        source: '/villa-plots-in-bangalore',
        destination: '/plots-in-bangalore',
        permanent: true,
      },
      {
        source: '/plots',
        destination: '/plots-in-bangalore',
        permanent: true,
      },
      {
        source: '/residential-plots',
        destination: '/plots-in-bangalore',
        permanent: true,
      },
      {
        source: '/villas',
        destination: '/luxury-villas-bangalore',
        permanent: true,
      },
      {
        source: '/luxury-villas',
        destination: '/luxury-villas-bangalore',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
