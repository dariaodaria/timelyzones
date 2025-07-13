import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New York to Tokyo Time Converter - EST/EDT to JST | TimelyZones',
  description: 'Convert time from New York (EST/EDT) to Tokyo (JST). Perfect for scheduling meetings between USA East Coast and Japan across 13-14 hour time difference.',
  keywords: [
    'New York to Tokyo time',
    'EST to JST converter',
    'NYC to Tokyo time difference',
    'USA to Japan time',
    'New York Tokyo meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'New York to Tokyo Time Converter - EST/EDT to JST',
    description: 'Convert time from New York (EST/EDT) to Tokyo (JST). Perfect for US-Japan business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/new-york-to-tokyo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York to Tokyo Time Converter - EST/EDT to JST',
    description: 'Convert time from New York (EST/EDT) to Tokyo (JST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/new-york-to-tokyo',
  }
}

export default function NewYorkToTokyoPage() {
  const fromCity = getCityBySlug('new-york')!
  const toCity = getCityBySlug('tokyo')!

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
              New York to Tokyo Time Converter
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
                <span className="text-sm font-medium">Japan</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  JST
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between New York and Tokyo instantly. Perfect for scheduling 
              meetings between USA East Coast and Japan across the 13-14 hour time difference.
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
                  <strong>Tokyo is 13-14 hours ahead of NYC</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in NYC, it's 1:00-2:00 AM next day in Tokyo
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
                  <strong>6:00 AM - 8:00 AM EST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (7:00 PM - 9:00 PM JST)
                </div>
                <div className="text-sm text-secondary">
                  Very early NYC, evening Tokyo
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
                  March - Nov: 13 hours difference
                </div>
                <div className="text-sm text-secondary">
                  Nov - March: 14 hours difference
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for USA East Coast ↔ Japan Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 6:00 AM - 8:00 AM EST (7:00 PM - 9:00 PM JST)</li>
                  <li>• 7:00 AM - 9:00 AM EST (8:00 PM - 10:00 PM JST)</li>
                  <li>• Very early NYC = Evening Tokyo</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Extremely challenging time difference</li>
                  <li>• Consider asynchronous communication</li>
                  <li>• Very early morning calls in NYC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Transpacific Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'Tokyo', to: 'NYC', path: '/tokyo-to-new-york' },
              { from: 'NYC', to: 'Osaka', path: '/new-york-to-osaka' },
              { from: 'Tokyo', to: 'Boston', path: '/tokyo-to-boston' },
              { from: 'NYC', to: 'Seoul', path: '/new-york-to-seoul' },
              { from: 'Tokyo', to: 'Chicago', path: '/tokyo-to-chicago' },
              { from: 'NYC', to: 'Manila', path: '/new-york-to-manila' },
              { from: 'Tokyo', to: 'Miami', path: '/tokyo-to-miami' },
              { from: 'NYC', to: 'Bangkok', path: '/new-york-to-bangkok' },
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
