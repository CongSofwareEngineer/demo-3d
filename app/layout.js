import { Inter } from 'next/font/google'
import './globals.css'
import '@/styles/global.scss'
import ReduxProvider from '@/components/ReduxProvider'
import StyledComponentsRegistry from '@/components/AntdRegistry'
import ClientRender from '@/components/ClientRender'
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TREE STUDIOS',
  description: 'coming soon',
  keywords: [],
  openGraph: {
    title: 'TREE STUDIOS',
    description: 'coming soon',
    images: '/favicon.ico',
    siteName: 'TREE STUDIOS',
    url: 'https://tree.net.vn'
  },
  url: 'https://tree.net.vn',
  bookmarks: 'https://tree.net.vn',
  type: 'website',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: { url: '/favicon.ico' },
    shortcut: { url: '/favicon.ico' },
    apple: { url: '/favicon.ico' }
  },
  twitter: {
    title: 'TREE STUDIOS',
    description: 'coming soon',
    card: 'summary_large_image',
    images: '/favicon.ico'
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
