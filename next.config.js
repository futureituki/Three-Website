const withTM = require('next-transpile-modules')(['@react-three/drei', 'three'])
const config = withTM()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = Object.assign(config, nextConfig)
