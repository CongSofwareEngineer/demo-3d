/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      swcMinify:true,
      compiler:{
        styledComponents:{
          displayName:true,
          ssr:true,
          minify:true
        }
      },
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

module.exports = nextConfig
