import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './providers/auth-provider';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crime Reporting Platform',
  description: 'Community-driven crime reporting platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </body>
  </html>
  )
}
