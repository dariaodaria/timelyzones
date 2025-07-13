import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sydney to London Time Converter - AEST/AEDT to GMT/BST | TimelyZones',
  description: 'Convert time from Sydney (AEST/AEDT) to London (GMT/BST). Perfect for scheduling meetings between Australia and UK across 9-11 hour time difference.',
  keywords: [
    'Sydney to London time',
    'AEST to GMT converter',
    'Sydney London time difference',
    'Australia to UK time',
    'Sydney UK meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'Sydney to London Time Converter - AEST/AEDT to GMT/BST',
    description: 'Convert time from Sydney (AEST/AEDT) to London (GMT/BST). Perfect for Australia-UK business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/sydney-to-london',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sydney to London Time Converter - AEST/AEDT to GMT/BST',
    description: 'Convert time from Sydney (AEST/AEDT) to London (GMT/BST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/sydney-to-london',
  }
}

export default function SydneyToLondonPage() {
  const fromCity = getCityBySlug('sydney')!
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
              Sydney to London Time Converter
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Australia</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  AEST/AEDT
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
              Convert time between Sydney and London instantly. Perfect for scheduling 
              meetings between Australia and UK across the 9-11 hour time difference.
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
                  <strong>Sydney is 9-11 hours ahead of London</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in Sydney, it's 1:00-3:00 AM in London
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
                  <strong>6:00 PM - 8:00 PM AEST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (8:00 AM - 10:00 AM GMT)
                </div>
                <div className="text-sm text-secondary">
                  Evening Sydney, morning London
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
                  Different seasons = varying difference
                </div>
                <div className="text-sm text-secondary">
                  9-11 hours throughout the year
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for Australia ↔ UK Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 6:00 PM - 8:00 PM AEST (8:00 AM - 10:00 AM GMT)</li>
                  <li>• 7:00 PM - 9:00 PM AEST (9:00 AM - 11:00 AM GMT)</li>
                  <li>• Evening Sydney = Morning London</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Challenging time difference</li>
                  <li>• Evening calls in Sydney</li>
                  <li>• Consider asynchronous communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Australia-Europe Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'London', to: 'Sydney', path: '/london-to-sydney' },
              { from: 'Sydney', to: 'Paris', path: '/sydney-to-paris' },
              { from: 'London', to: 'Melbourne', path: '/london-to-melbourne' },
              { from: 'Sydney', to: 'Berlin', path: '/sydney-to-berlin' },
              { from: 'London', to: 'Brisbane', path: '/london-to-brisbane' },
              { from: 'Sydney', to: 'Amsterdam', path: '/sydney-to-amsterdam' },
              { from: 'London', to: 'Perth', path: '/london-to-perth' },
              { from: 'Sydney', to: 'Zurich', path: '/sydney-to-zurich' },
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
