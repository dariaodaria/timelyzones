import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'San Francisco to London Time Converter - PST/PDT to GMT/BST | TimelyZones',
  description: 'Convert time from San Francisco (PST/PDT) to London (GMT/BST). Perfect for scheduling meetings between US West Coast and UK across 8-hour time difference.',
  keywords: [
    'San Francisco to London time',
    'PST to GMT converter',
    'SF to London time difference',
    'USA to UK time',
    'San Francisco London meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'San Francisco to London Time Converter - PST/PDT to GMT/BST',
    description: 'Convert time from San Francisco (PST/PDT) to London (GMT/BST). Perfect for US West Coast-UK business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/san-francisco-to-london',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Francisco to London Time Converter - PST/PDT to GMT/BST',
    description: 'Convert time from San Francisco (PST/PDT) to London (GMT/BST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/san-francisco-to-london',
  }
}

export default function SanFranciscoToLondonPage() {
  const fromCity = getCityBySlug('san-francisco')!
  const toCity = getCityBySlug('london')!

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
              San Francisco to London Time Converter
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  PST/PDT
                </span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United Kingdom</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  GMT/BST
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between San Francisco and London instantly. Perfect for scheduling 
              meetings between US West Coast and UK across the 8-hour time difference.
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
                  <strong>London is 8 hours ahead of SF</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in San Francisco, it's 8:00 PM in London
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
                  <strong>8:00 AM - 10:00 AM PST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (4:00 PM - 6:00 PM GMT)
                </div>
                <div className="text-sm text-secondary">
                  Morning SF, late afternoon London
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
                  <strong>Both observe DST</strong>
                </div>
                <div className="text-sm text-secondary">
                  Time difference remains constant at 8 hours
                </div>
                <div className="text-sm text-secondary">
                  Transitions happen at different dates
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for US West Coast ↔ UK Business</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 8:00 AM - 10:00 AM PST (4:00 PM - 6:00 PM GMT)</li>
                  <li>• Early morning SF = End of business day London</li>
                  <li>• Avoid Friday afternoon London (weekend mode)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">🌉 Silicon Valley - London Corridor:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Major tech companies have offices in both cities</li>
                  <li>• Popular for fintech and startup collaborations</li>
                  <li>• Consider cultural differences in meeting styles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Business Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'SF', to: 'Paris', path: '/san-francisco-to-paris' },
              { from: 'SF', to: 'Berlin', path: '/san-francisco-to-berlin' },
              { from: 'LA', to: 'London', path: '/los-angeles-to-london' },
              { from: 'NY', to: 'London', path: '/new-york-to-london' },
              { from: 'London', to: 'SF', path: '/london-to-san-francisco' },
              { from: 'SF', to: 'Amsterdam', path: '/san-francisco-to-amsterdam' },
              { from: 'Seattle', to: 'London', path: '/seattle-to-london' },
              { from: 'SF', to: 'Zurich', path: '/san-francisco-to-zurich' },
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
