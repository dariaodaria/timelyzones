import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Los Angeles to Sydney Time Converter - PST/PDT to AEST/AEDT | TimelyZones',
  description: 'Convert time from Los Angeles (PST/PDT) to Sydney (AEST/AEDT). Perfect for scheduling meetings between USA West Coast and Australia across 17-19 hour time difference.',
  keywords: [
    'Los Angeles to Sydney time',
    'PST to AEST converter',
    'LA to Sydney time difference',
    'USA to Australia time',
    'Pacific timezone to Australia',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'Los Angeles to Sydney Time Converter - PST/PDT to AEST/AEDT',
    description: 'Convert time from Los Angeles (PST/PDT) to Sydney (AEST/AEDT). Perfect for US-Australia business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/los-angeles-to-sydney',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Angeles to Sydney Time Converter - PST/PDT to AEST/AEDT',
    description: 'Convert time from Los Angeles (PST/PDT) to Sydney (AEST/AEDT).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/los-angeles-to-sydney',
  }
}

export default function LosAngelestoSydneyPage() {
  const fromCity = getCityBySlug('los-angeles')!
  const toCity = getCityBySlug('sydney')!

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
              Los Angeles to Sydney Time Converter
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
                <span className="text-sm font-medium">Australia</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  AEST/AEDT
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between Los Angeles and Sydney instantly. Perfect for scheduling 
              meetings between USA West Coast and Australia across the 17-19 hour time difference.
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
                  <strong>Sydney is 17-19 hours ahead of LA</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in LA, it's 5:00-7:00 AM next day in Sydney
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
                  <strong>6:00 AM - 8:00 AM PST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (11:00 PM - 1:00 AM AEST next day)
                </div>
                <div className="text-sm text-secondary">
                  Early LA, late Sydney business hours
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
                  Difference varies: 17-19 hours
                </div>
                <div className="text-sm text-secondary">
                  DST periods are opposite seasons
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for USA West Coast ↔ Australia Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 6:00 AM - 8:00 AM PST (11:00 PM - 1:00 AM AEST)</li>
                  <li>• 7:00 AM - 9:00 AM PST (12:00 AM - 2:00 AM AEST)</li>
                  <li>• Very early LA = Very late Sydney</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Extremely challenging time difference</li>
                  <li>• Consider asynchronous communication</li>
                  <li>• Plan for next-day responses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Pacific Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'Sydney', to: 'LA', path: '/sydney-to-los-angeles' },
              { from: 'LA', to: 'Melbourne', path: '/los-angeles-to-melbourne' },
              { from: 'Sydney', to: 'SF', path: '/sydney-to-san-francisco' },
              { from: 'LA', to: 'Perth', path: '/los-angeles-to-perth' },
              { from: 'Sydney', to: 'Seattle', path: '/sydney-to-seattle' },
              { from: 'LA', to: 'Brisbane', path: '/los-angeles-to-brisbane' },
              { from: 'Sydney', to: 'Portland', path: '/sydney-to-portland' },
              { from: 'LA', to: 'Auckland', path: '/los-angeles-to-auckland' },
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
