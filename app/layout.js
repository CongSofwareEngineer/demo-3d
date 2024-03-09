import { Inter } from 'next/font/google'
import './globals.css'
import '@/styles/global.scss'
import ReduxProvider from '@/components/ReduxProvider'
import StyledComponentsRegistry from '@/components/AntdRegistry'
import ClientRender from '@/components/ClientRender'
import { AntdRegistry } from '@ant-design/nextjs-registry';
/** @type {import('next').Metadata} */
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://tree.net.vn/'),
  title: 'TREE STUDIOS',
  description: 'coming soon',
  keywords: [],
  openGraph: {
    title: 'TREE STUDIOS',
    description: 'coming soon',
    images: 'https://www.tree.net.vn/favicon.ico',
    siteName: 'TREE STUDIOS',
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
    title: 'TREE STUDIOS',
    description: 'coming soon',
    card: 'summary_large_image',
    images: 'https://www.tree.net.vn/favicon.ico'
  },
  verification: {
    google: 't1w9GTio8AJGDTzsGbJVaMX1yHocs4zCvyLqa_kQmAg'
  },
  appleWebApp: {
    title: 'TREE STUDIOS'
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
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <AntdRegistry >
            <StyledComponentsRegistry >
              <ReduxProvider>
                <ClientRender>
                  {children}
                </ClientRender>
              </ReduxProvider>
            </StyledComponentsRegistry>
          </AntdRegistry>

        </main>

      </body>
    </html>
  )
}
