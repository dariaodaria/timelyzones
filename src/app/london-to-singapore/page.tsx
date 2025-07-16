import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'London to Singapore Time Converter - GMT/BST to SGT | TimelyZones',
  description: 'Convert time from London (GMT/BST) to Singapore (SGT). Perfect for scheduling meetings between UK and Southeast Asia across 7-8 hour time difference.',
  keywords: [
    'London to Singapore time',
    'GMT to SGT converter',
    'London to Singapore time difference',
    'UK to Singapore time',
    'London Singapore meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'London to Singapore Time Converter - GMT/BST to SGT',
    description: 'Convert time from London (GMT/BST) to Singapore (SGT). Perfect for UK-Southeast Asia business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/london-to-singapore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London to Singapore Time Converter - GMT/BST to SGT',
    description: 'Convert time from London (GMT/BST) to Singapore (SGT).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/london-to-singapore',
  }
}

export default function LondonToSingaporePage() {
  const fromCity = getCityBySlug('london')!
  const toCity = getCityBySlug('singapore')!

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <TypographyH1 className="mb-3">
              London to Singapore Time Converter
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United Kingdom</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  GMT/BST
                </span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Singapore</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  SGT
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between London and Singapore instantly. Perfect for scheduling 
              meetings between UK and Southeast Asia across the 7-8 hour time difference.
            </TypographyP>
          </div>
          
          <TimeConverter 
            defaultFromCity={fromCity}
            defaultToCity={toCity}
          />
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Time Difference
              </h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Singapore is 7-8 hours ahead of London</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in London, it's 7:00-8:00 PM in Singapore
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Best Meeting Times
              </h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>9:00 AM - 11:00 AM GMT</strong>
                </div>
                <div className="text-sm text-secondary">
                  (4:00 PM - 6:00 PM SGT)
                </div>
                <div className="text-sm text-secondary">
                  Morning London, late afternoon Singapore
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-orange-600" />
                Daylight Saving
              </h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Only London observes DST</strong>
                </div>
                <div className="text-sm text-secondary">
                  March - Oct: 7 hours difference
                </div>
                <div className="text-sm text-secondary">
                  Oct - March: 8 hours difference
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for UK ↔ Singapore Business</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 9:00 AM - 11:00 AM GMT (4:00 PM - 6:00 PM SGT)</li>
                  <li>• Morning London = Late afternoon Singapore</li>
                  <li>• Avoid Singapore lunch hours (12:00-2:00 PM SGT)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">🏙️ London - Singapore Financial Hub:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Major financial centers with strong ties</li>
                  <li>• Popular for banking, fintech, and trading</li>
                  <li>• Consider market overlaps for financial meetings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Asia-Pacific Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'London', to: 'Tokyo', path: '/london-to-tokyo' },
              { from: 'London', to: 'Hong Kong', path: '/london-to-hong-kong' },
              { from: 'London', to: 'Mumbai', path: '/london-to-mumbai' },
              { from: 'Singapore', to: 'London', path: '/singapore-to-london' },
              { from: 'Paris', to: 'Singapore', path: '/paris-to-singapore' },
              { from: 'Berlin', to: 'Singapore', path: '/berlin-to-singapore' },
              { from: 'Singapore', to: 'Sydney', path: '/singapore-to-sydney' },
              { from: 'Amsterdam', to: 'Singapore', path: '/amsterdam-to-singapore' },
            ].map(conversion => (
              <Link 
                key={conversion.path}
                href={conversion.path}
                className="p-3 bg-white dark:bg-slate-800 border border-border rounded-lg hover:shadow-md transition-shadow text-sm font-medium text-center"
              >
                {conversion.from} → {conversion.to}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
