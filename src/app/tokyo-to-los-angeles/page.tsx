import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tokyo to Los Angeles Time Converter - JST to PST/PDT | TimelyZones',
  description: 'Convert time from Tokyo (JST) to Los Angeles (PST/PDT). Perfect for scheduling meetings between Japan and USA West Coast across 16-17 hour time difference.',
  keywords: [
    'Tokyo to Los Angeles time',
    'JST to PST converter',
    'Tokyo to LA time difference',
    'Japan to USA time',
    'Tokyo LA meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'Tokyo to Los Angeles Time Converter - JST to PST/PDT',
    description: 'Convert time from Tokyo (JST) to Los Angeles (PST/PDT). Perfect for Japan-US West Coast business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/tokyo-to-los-angeles',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokyo to Los Angeles Time Converter - JST to PST/PDT',
    description: 'Convert time from Tokyo (JST) to Los Angeles (PST/PDT).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/tokyo-to-los-angeles',
  }
}

export default function TokyoToLosAngelesPage() {
  const fromCity = getCityBySlug('tokyo')!
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
              Tokyo to Los Angeles Time Converter
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Japan</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  JST
                </span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  PST/PDT
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between Tokyo and Los Angeles instantly. Perfect for scheduling 
              meetings between Japan and US West Coast across the 16-17 hour time difference.
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
                  <strong>LA is 16-17 hours behind Tokyo</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in Tokyo, it's 7:00-8:00 PM previous day in LA
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
                  <strong>10:00 AM - 12:00 PM JST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (5:00 PM - 7:00 PM PST previous day)
                </div>
                <div className="text-sm text-secondary">
                  Morning Tokyo, evening LA
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
                  <strong>Only LA observes DST</strong>
                </div>
                <div className="text-sm text-secondary">
                  March - Nov: 16 hours difference
                </div>
                <div className="text-sm text-secondary">
                  Nov - March: 17 hours difference
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for Japan ↔ USA West Coast Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 10:00 AM - 12:00 PM JST (5:00 PM - 7:00 PM PST)</li>
                  <li>• 11:00 AM - 1:00 PM JST (6:00 PM - 8:00 PM PST)</li>
                  <li>• Morning Japan = Evening California</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Challenging time difference</li>
                  <li>• Consider asynchronous communication</li>
                  <li>• Late evening calls in LA</li>
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
              { from: 'LA', to: 'Tokyo', path: '/los-angeles-to-tokyo' },
              { from: 'Tokyo', to: 'SF', path: '/tokyo-to-san-francisco' },
              { from: 'LA', to: 'Osaka', path: '/los-angeles-to-osaka' },
              { from: 'Tokyo', to: 'Seattle', path: '/tokyo-to-seattle' },
              { from: 'LA', to: 'Seoul', path: '/los-angeles-to-seoul' },
              { from: 'Tokyo', to: 'Portland', path: '/tokyo-to-portland' },
              { from: 'LA', to: 'Manila', path: '/los-angeles-to-manila' },
              { from: 'Tokyo', to: 'Vancouver', path: '/tokyo-to-vancouver' },
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
