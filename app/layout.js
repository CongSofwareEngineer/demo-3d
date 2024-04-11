import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/global.scss'
import ReduxProvider from '@/components/ReduxProvider'
import StyledComponentsRegistry from '@/components/AntdRegistry'
import ClientRender from '@/components/ClientRender'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import ReactQueryProvider from '@/components/ReactQueryProvider'
// import ParallaxProvider from '@/components/ParallaxProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import LoadingFirst from '@/components/LoadingFirstPage'
/** @type {import('next').Metadata} */
const inter = Inter({ subsets: ['latin'] })

const BaseMeta = {
  title: 'TREE STUDIOS',
  des: 'Tree Studios is an art outsourcing studio for game art, concept art, 2D/ 3D environment, assets and animations specializing in stylized art styles.',
  image: 'https://www.tree.net.vn/favicon.ico'
}
export const metadata = {
  metadataBase: new URL('https://tree.net.vn/'),
  title: BaseMeta.title,
  description: BaseMeta.des,
  keywords: [],
  openGraph: {
    title: BaseMeta.title,
    description: BaseMeta.des,
    images: BaseMeta.image,
    siteName: BaseMeta.title,
    url: 'https://tree.net.vn'
  },
  url: 'https://tree.net.vn',
  bookmarks: 'https://tree.net.vn',
  type: 'website',
  icons: {
    icon: { url: BaseMeta.image },
    shortcut: { url: BaseMeta.image },
    apple: { url: BaseMeta.image }
  },
  twitter: {
    title: BaseMeta.title,
    description: BaseMeta.des,
    card: 'summary_large_image',
    images: BaseMeta.image
  },
  verification: {
    google: 't1w9GTio8AJGDTzsGbJVaMX1yHocs4zCvyLqa_kQmAg'
  },
  appleWebApp: {
    title: BaseMeta.title
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
}

export default function RootLayout (props) {
  return (
    <html lang="en">
      <body >
        <main className="flex min-h-screen flex-col items-center justify-between relative">
          {/* <div className='absolute pointer-events-none'>
            serverside
          </div> */}

          {/* <ParallaxProvider> */}
          <ReduxProvider>
            {/* <AntdRegistry > */}
            <ReactQueryProvider>
              <LoadingFirst/>
              <StyledComponentsRegistry >
                <ClientRender>
                  {props.children}
                </ClientRender>
              </StyledComponentsRegistry>
            </ReactQueryProvider>
            {/* </AntdRegistry> */}
          </ReduxProvider>
          {/* </ParallaxProvider> */}
          <SpeedInsights/>
        </main>
      </body>
    </html>
  )
}
