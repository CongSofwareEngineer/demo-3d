import { Inter } from 'next/font/google';
import './globals.css';
import ClientRender from './components/ClientRender';
import LanguageProvider from './components/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tree',
  description: 'coming soon'
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientRender >
          <LanguageProvider>
            {children}

          </LanguageProvider>
        </ClientRender>
      </body>
    </html>
  );
}
