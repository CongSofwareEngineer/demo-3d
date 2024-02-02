import { Inter } from 'next/font/google'
import './globals.css'
import '@/styles/global.scss'
import ReduxProvider from '@/components/ReduxProvider'
import StyledComponentsRegistry from '@/components/AntdRegistry'
import ClientRender from '@/components/ClientRender'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TREE STUDIOS',
  description: 'coming soon'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <StyledComponentsRegistry >
            <ReduxProvider>
              <ClientRender>
                {children}
              </ClientRender>
            </ReduxProvider>
          </StyledComponentsRegistry>
        </main>

      </body>
    </html>
  )
}
