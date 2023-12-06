/** @type {import('next').NextConfig} */

const withPwa = require("next-pwa");
const nextConfig = {
  ...withPwa({
    dest: "public",
    refister: "true",
    skipWaiting: "true",
  }),
};

module.exports = nextConfig;
