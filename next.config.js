const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n,
  images: {
    domains: ['thumbs.dfs.ivi.ru', 'solea-parent.dfs.ivi.ru'],
  },
};
