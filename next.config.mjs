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
      // Keyword variants that buyers actually type, pointed at the real pages.
      { source: '/premium-plots', destination: '/premium-plots-in-bangalore', permanent: true },
      { source: '/premium-plots-bangalore', destination: '/premium-plots-in-bangalore', permanent: true },
      { source: '/premium-plots-in-bengaluru', destination: '/premium-plots-in-bangalore', permanent: true },
      { source: '/plots-in-bengaluru', destination: '/plots-in-bangalore', permanent: true },
      { source: '/plots-near-nandi-hills', destination: '/plots-in-chikkaballapura', permanent: true },
      { source: '/plots-in-nandi-hills', destination: '/plots-in-chikkaballapura', permanent: true },
      { source: '/villa-plots-in-chikkaballapura', destination: '/plots-in-chikkaballapura', permanent: true },
      { source: '/plots-in-jigani', destination: '/plots-in-south-bangalore', permanent: true },
      { source: '/plots-on-kanakapura-road', destination: '/plots-in-south-bangalore', permanent: true },
      { source: '/apartments-near-bangalore-airport', destination: '/property-near-bangalore-airport', permanent: true },
      { source: '/property-in-devanahalli', destination: '/property-near-bangalore-airport', permanent: true },
      { source: '/apartments-near-airport', destination: '/property-near-bangalore-airport', permanent: true },
    ];
  },
};

export default nextConfig;
