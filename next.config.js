const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const drawioPaths = require('./drawio-path');

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  rewrites: async () => drawioPaths,
});
