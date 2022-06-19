const withTM = require('next-transpile-modules')(['@react-three/drei', 'three'])
const config = withTM()
const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = Object.assign(config, nextConfig)
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};