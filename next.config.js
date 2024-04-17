/** @type {import('next').NextConfig} */
const path = require('path')
const env = require('./env.json')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

const nextConfig = {
  experimental: {
    swcMinify: true,
    optimizeCss: true,
    gzipSize: true,
    forceSwcTransforms: true,
    serverMinification: true,
    optimizePackageImports: [
      'react-toastify',
      'redux-persist',
      'three',
      'styled-components',
      'bignumber.js',
      '@tanstack/react-query',
      '@react-three/drei',
      '@ant-design/icons',
      '@ant-design/nextjs-registry',
      '@react-spring/three',
      '@react-three/fiber',
      '@reduxjs/toolkit',
      'antd',
      'axios',
      'react-intersection-observer',
      'react-lottie'
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  optimizeFonts: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      minify: true
    }
  },
  env,
  images: {
    domains: [
      'images.unsplash.com',
      'ipfs.pantograph.app',
      'ipfs.pantograph.app/ipfs',
      'ipfsgw.bountykinds.com',
      'skywalker.infura-ipfs.io',
      'ipfs.filebase.io',
      'ucarecdn.com'
    ]
  }

}

// module.exports = withBundleAnalyzer({ nextConfig })
module.exports = nextConfig
