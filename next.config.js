const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['thumbs.dfs.ivi.ru', 'solea-parent.dfs.ivi.ru', 'st.kp.yandex.net'],
  },
};

module.exports = nextConfig;
