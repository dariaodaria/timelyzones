import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New York to Berlin Time Converter - EST/EDT to CET/CEST | TimelyZones',
  description: 'Convert time from New York (EST/EDT) to Berlin (CET/CEST). Perfect for scheduling meetings between US East Coast and Germany across 6-hour time difference.',
  keywords: [
    'New York to Berlin time',
    'EST to CET converter',
    'NYC to Berlin time difference',
    'USA to Germany time',
    'New York Berlin meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'New York to Berlin Time Converter - EST/EDT to CET/CEST',
    description: 'Convert time from New York (EST/EDT) to Berlin (CET/CEST). Perfect for US East Coast-Germany business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/new-york-to-berlin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York to Berlin Time Converter - EST/EDT to CET/CEST',
    description: 'Convert time from New York (EST/EDT) to Berlin (CET/CEST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/new-york-to-berlin',
  }
}

export default function NewYorkToBerlinPage() {
  const fromCity = getCityBySlug('new-york')!
  const toCity = getCityBySlug('berlin')!

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
              New York to Berlin Time Converter
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  EST/EDT
                </span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Germany</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  CET/CEST
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between New York and Berlin instantly. Perfect for scheduling 
              meetings between US East Coast and Germany across the 6-hour time difference.
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
                  <strong>Berlin is 6 hours ahead of NYC</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in New York, it's 6:00 PM in Berlin
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
                  <strong>9:00 AM - 12:00 PM EST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (3:00 PM - 6:00 PM CET)
                </div>
                <div className="text-sm text-secondary">
                  Morning NYC, afternoon Berlin
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
                  Time difference remains constant at 6 hours
                </div>
                <div className="text-sm text-secondary">
                  Transitions happen at similar times
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for US East Coast ↔ Germany Business</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 9:00 AM - 12:00 PM EST (3:00 PM - 6:00 PM CET)</li>
                  <li>• Morning NYC = Afternoon Berlin</li>
                  <li>• Avoid German lunch hours (12:00-1:00 PM CET)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">🏭 NYC - Berlin Business Hub:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Major tech and automotive industries</li>
                  <li>• Popular for manufacturing and engineering</li>
                  <li>• Consider German punctuality in scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related European Business Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'NY', to: 'Paris', path: '/new-york-to-paris' },
              { from: 'NY', to: 'Amsterdam', path: '/new-york-to-amsterdam' },
              { from: 'NY', to: 'Zurich', path: '/new-york-to-zurich' },
              { from: 'Berlin', to: 'NY', path: '/berlin-to-new-york' },
              { from: 'Boston', to: 'Berlin', path: '/boston-to-berlin' },
              { from: 'Chicago', to: 'Berlin', path: '/chicago-to-berlin' },
              { from: 'Berlin', to: 'London', path: '/berlin-to-london' },
              { from: 'NY', to: 'Frankfurt', path: '/new-york-to-frankfurt' },
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
