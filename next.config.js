/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['cs'],
    defaultLocale: 'cs',
  },
  env: {},
};

module.exports = nextConfig;
