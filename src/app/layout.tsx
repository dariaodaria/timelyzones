import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeToggle } from '@/components/theme-toggle'
import { ErrorBoundary } from '@/components/error-boundary'
import { GoogleAnalytics, PerformanceMonitor } from '@/components/analytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  },
  robots: 'index, follow',
  manifest: '/manifest.json',
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
        <ErrorBoundary>
          <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <h1 className="text-xl font-bold">
                <a href="/" className="hover:opacity-80 transition-opacity">
                  <span className="text-primary">Timely</span>Zones
                </a>
              </h1>
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </div>
          </header>
          
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          
          <footer className="border-t border-border mt-16 bg-muted/30">
            <div className="container mx-auto px-4 py-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">TimelyZones</h3>
                  <p className="text-sm text-secondary">
                    Fast, modern time zone converter built for distributed teams.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Features</h3>
                  <ul className="text-sm text-secondary space-y-1">
                    <li>Instant time conversion</li>
                    <li>Smart call suggestions</li>
                    <li>Mobile-friendly design</li>
                    <li>Real-time updates</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border mt-6 pt-6 text-center">
                <p className="text-sm text-secondary">
                  &copy; 2025 TimelyZones. Built for speed and simplicity.
                </p>
              </div>
            </div>
          </footer>
          
          {/* Google Analytics */}
          <GoogleAnalytics gaId="G-BL6LMLT710" />
          <PerformanceMonitor />
        </ErrorBoundary>
      </body>
    </html>
  )
}
