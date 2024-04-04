import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/global.scss'
import ReduxProvider from '@/components/ReduxProvider'
import StyledComponentsRegistry from '@/components/AntdRegistry'
import ClientRender from '@/components/ClientRender'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ReactQueryProvider from '@/components/ReactQueryProvider'
/** @type {import('next').Metadata} */
const inter = Inter({ subsets: ['latin'] })

const BaseMeta = {
  title: 'TREE STUDIOS',
  des: 'Tree Studios is an art outsourcing studio for game art, concept art, 2D/ 3D environment, assets and animations specializing in stylized art styles.'
}
export const metadata = {
  metadataBase: new URL('https://tree.net.vn/'),
  title: BaseMeta.title,
  description: BaseMeta.des,
  keywords: [],
  openGraph: {
    title: BaseMeta.title,
    description: BaseMeta.des,
    images: 'https://www.tree.net.vn/favicon.ico',
    siteName: BaseMeta.title,
    url: 'https://tree.net.vn'
  },
  url: 'https://tree.net.vn',
  bookmarks: 'https://tree.net.vn',
  type: 'website',
  icons: {
    icon: { url: 'https://www.tree.net.vn/favicon.ico' },
    shortcut: { url: 'https://www.tree.net.vn/favicon.ico' },
    apple: { url: 'https://www.tree.net.vn/favicon.ico' }
  },
  twitter: {
    title: BaseMeta.title,
    description: BaseMeta.des,
    card: 'summary_large_image',
    images: 'https://www.tree.net.vn/favicon.ico'
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

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body >
        <main className="flex min-h-screen flex-col items-center justify-between">
          <ReduxProvider>
            <AntdRegistry >
              <ReactQueryProvider>
                <StyledComponentsRegistry >
                  <ClientRender>
                    {children}
                  </ClientRender>
                </StyledComponentsRegistry>
              </ReactQueryProvider>
            </AntdRegistry>
          </ReduxProvider>
        </main>
      </body>
    </html>
  )
}
