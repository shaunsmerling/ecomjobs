const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  module.exports = withBundleAnalyzer({})

  const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});