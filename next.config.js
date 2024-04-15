/** @type {import('next').NextConfig} */
const path = require('path')
const env = require('./env.json')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false
})

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
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
