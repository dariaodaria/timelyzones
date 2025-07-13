import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New York to Los Angeles Time Converter - EST to PST | TimelyZones',
  description: 'Convert time from New York (EST/EDT) to Los Angeles (PST/PDT). Perfect for scheduling meetings, calls, and coordinating across the US time zones.',
  keywords: [
    'New York to Los Angeles time',
    'EST to PST converter',
    'NYC to LA time difference',
    'East Coast to West Coast time',
    'timezone converter',
    'business hours',
    'meeting scheduler'
  ],
  openGraph: {
    title: 'New York to Los Angeles Time Converter - EST to PST',
    description: 'Convert time from New York (EST/EDT) to Los Angeles (PST/PDT). Perfect for scheduling meetings across US time zones.',
    type: 'website',
    url: 'https://timelyzones.com/new-york-to-los-angeles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York to Los Angeles Time Converter - EST to PST',
    description: 'Convert time from New York (EST/EDT) to Los Angeles (PST/PDT).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/new-york-to-los-angeles',
  }
}

export default function NewYorkToLosAngelesPage() {
  const fromCity = getCityBySlug('new-york')!
  const toCity = getCityBySlug('los-angeles')!

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
              New York to Los Angeles Time Converter
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">East Coast</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  EST/EDT
                </span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">West Coast</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  PST/PDT
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between New York (Eastern Time) and Los Angeles (Pacific Time) instantly. 
              Perfect for scheduling meetings, calls, and coordinating across US time zones.
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
                  <strong>Los Angeles is 3 hours behind New York</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in NYC, it's 9:00 AM in LA
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
                  <strong>12:00 PM - 3:00 PM EST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (9:00 AM - 12:00 PM PST)
                </div>
                <div className="text-sm text-secondary">
                  Both coasts are in business hours
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
                  <strong>Both cities observe DST</strong>
                </div>
                <div className="text-sm text-secondary">
                  March - November: EDT/PDT
                </div>
                <div className="text-sm text-secondary">
                  November - March: EST/PST
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for East Coast ↔ West Coast Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 12:00 PM - 3:00 PM EST (9:00 AM - 12:00 PM PST)</li>
                  <li>• 1:00 PM - 4:00 PM EST (10:00 AM - 1:00 PM PST)</li>
                  <li>• 2:00 PM - 5:00 PM EST (11:00 AM - 2:00 PM PST)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Avoid calling LA before 9:00 AM PST</li>
                  <li>• NYC business hours end at 6:00 PM (3:00 PM PST)</li>
                  <li>• Friday afternoons can be challenging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related US Time Zone Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'NYC', to: 'Chicago', path: '/new-york-to-chicago' },
              { from: 'LA', to: 'NYC', path: '/los-angeles-to-new-york' },
              { from: 'NYC', to: 'Miami', path: '/new-york-to-miami' },
              { from: 'LA', to: 'Seattle', path: '/los-angeles-to-seattle' },
              { from: 'Chicago', to: 'LA', path: '/chicago-to-los-angeles' },
              { from: 'NYC', to: 'Denver', path: '/new-york-to-denver' },
              { from: 'LA', to: 'Phoenix', path: '/los-angeles-to-phoenix' },
              { from: 'NYC', to: 'Boston', path: '/new-york-to-boston' },
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
