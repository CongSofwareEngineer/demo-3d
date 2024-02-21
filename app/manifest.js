import { MetadataRoute } from 'next'

export default function manifest () {
  return {
    name: 'TREE STUDIO',
    short_name: 'TREE STUDIO',
    description: 'TREE STUDIO',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
    //   {
    //     src: '/favicon.ico',
    //     sizes: 'any',
    //     type: 'image/x-icon'
    //   }
      {
        src: 'favicon36.png',
        sizes: '36x36',
        type: 'image/png'
      },
      {
        src: 'favicon48.png',
        sizes: '48x48',
        type: 'image/png'
      },
      {
        src: 'favicon72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: 'favicon96.png',
        sizes: '96x96',
        type: 'image/png'
      },
      {
        src: 'favicon144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: 'favicon192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  }
}
