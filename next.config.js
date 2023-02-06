/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  reactStrictMode: true,
  env: {
    MY_SERVICE_ID: process.env.MY_SERVICE_ID,
    MY_USER_ID: process.env.MY_USER_ID,
    MY_TEMPLATE_ID: process.env.MY_TEMPLATE_ID,
    REACT_APP_SITE_KEY: process.env.REACT_APP_SITE_KEY,
  }
}

module.exports = nextConfig