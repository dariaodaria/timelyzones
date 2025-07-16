import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New York to Hong Kong Time Converter - EST/EDT to HKT | TimelyZones',
  description: 'Convert time from New York (EST/EDT) to Hong Kong (HKT). Perfect for scheduling meetings between US East Coast and Asia across 12-13 hour time difference.',
  keywords: [
    'New York to Hong Kong time',
    'EST to HKT converter',
    'NYC to HK time difference',
    'USA to Hong Kong time',
    'New York Hong Kong meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'New York to Hong Kong Time Converter - EST/EDT to HKT',
    description: 'Convert time from New York (EST/EDT) to Hong Kong (HKT). Perfect for US East Coast-Asia business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/new-york-to-hong-kong',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York to Hong Kong Time Converter - EST/EDT to HKT',
    description: 'Convert time from New York (EST/EDT) to Hong Kong (HKT).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/new-york-to-hong-kong',
  }
}

export default function NewYorkToHongKongPage() {
  const fromCity = getCityBySlug('new-york')!
  const toCity = getCityBySlug('hong-kong')!

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
              New York to Hong Kong Time Converter
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
                <span className="text-sm font-medium">Hong Kong SAR</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  HKT
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between New York and Hong Kong instantly. Perfect for scheduling 
              meetings between US East Coast and Asia across the 12-13 hour time difference.
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
                  <strong>Hong Kong is 12-13 hours ahead of NYC</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in New York, it's 12:00-1:00 AM next day in Hong Kong
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
                  <strong>8:00 AM - 10:00 AM EST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (9:00 PM - 11:00 PM HKT)
                </div>
                <div className="text-sm text-secondary">
                  Morning NYC, evening Hong Kong
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
                  <strong>Only NYC observes DST</strong>
                </div>
                <div className="text-sm text-secondary">
                  March - Nov: 12 hours difference
                </div>
                <div className="text-sm text-secondary">
                  Nov - March: 13 hours difference
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for US East Coast ↔ Hong Kong Business</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 8:00 AM - 10:00 AM EST (9:00 PM - 11:00 PM HKT)</li>
                  <li>• Early morning NYC = Evening Hong Kong</li>
                  <li>• Avoid Hong Kong lunch hours (12:00-2:00 PM HKT)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">🏙️ NYC - Hong Kong Financial Hub:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Major financial centers with significant overlap</li>
                  <li>• Popular for banking, trading, and investment</li>
                  <li>• Consider market hours for financial meetings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Financial Hub Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'NY', to: 'Singapore', path: '/new-york-to-singapore' },
              { from: 'NY', to: 'Tokyo', path: '/new-york-to-tokyo' },
              { from: 'NY', to: 'Shanghai', path: '/new-york-to-shanghai' },
              { from: 'London', to: 'HK', path: '/london-to-hong-kong' },
              { from: 'HK', to: 'NY', path: '/hong-kong-to-new-york' },
              { from: 'SF', to: 'HK', path: '/san-francisco-to-hong-kong' },
              { from: 'Chicago', to: 'HK', path: '/chicago-to-hong-kong' },
              { from: 'NY', to: 'Mumbai', path: '/new-york-to-mumbai' },
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
