/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.webpagesthatconvert.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
