/** @type {import('next').NextConfig} */
import createBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // Bundle analyzer only works with Webpack, not Turbopack
  // So we'll only apply it when ANALYZE=true
  ...(process.env.ANALYZE === 'true' ? {} : {})
};

export default process.env.ANALYZE === 'true' 
  ? withBundleAnalyzer(nextConfig) 
  : nextConfig;
