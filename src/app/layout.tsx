import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientLayout } from '@/components/client-layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://timelyzones.com'),
  title: 'TimelyZones - Fast Time Zone Converter',
  description: 'Convert time zones instantly. Clean, fast, mobile-friendly time zone converter with smart suggestions.',
  keywords: ['time zone', 'converter', 'world clock', 'timezone', 'time conversion'],
  authors: [{ name: 'TimelyZones' }],
  openGraph: {
    title: 'TimelyZones - Fast Time Zone Converter',
    description: 'Convert time zones instantly. Clean, fast, mobile-friendly.',
    url: 'https://timelyzones.com',
    siteName: 'TimelyZones',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TimelyZones - Fast Time Zone Converter',
    description: 'Convert time zones instantly. Clean, fast, mobile-friendly.',
  },

  robots: 'index, follow',
  // manifest: '/manifest.json', // Disabled temporarily to prevent icon errors
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TimelyZones'
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'TimelyZones',
    'application-name': 'TimelyZones',
    'msapplication-TileColor': '#2563eb',
    'theme-color': '#2563eb',
    'google-site-verification': 'gKfsELv_2U3MpKuRO5H_i73PgGurfoCd9o6pHrIuZRs'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
