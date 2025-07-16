import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Los Angeles to Seoul Time Converter - PST/PDT to KST | TimelyZones',
  description: 'Convert time from Los Angeles (PST/PDT) to Seoul (KST). Perfect for scheduling meetings between US West Coast and South Korea across 16-17 hour time difference.',
  keywords: [
    'Los Angeles to Seoul time',
    'PST to KST converter',
    'LA to Seoul time difference',
    'USA to Korea time',
    'LA Seoul meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'Los Angeles to Seoul Time Converter - PST/PDT to KST',
    description: 'Convert time from Los Angeles (PST/PDT) to Seoul (KST). Perfect for US West Coast-South Korea business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/los-angeles-to-seoul',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Angeles to Seoul Time Converter - PST/PDT to KST',
    description: 'Convert time from Los Angeles (PST/PDT) to Seoul (KST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/los-angeles-to-seoul',
  }
}

export default function LosAngelesToSeoulPage() {
  const fromCity = getCityBySlug('los-angeles')!
  const toCity = getCityBySlug('seoul')!

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
              Los Angeles to Seoul Time Converter
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
                <span className="text-sm font-medium">South Korea</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  KST
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between Los Angeles and Seoul instantly. Perfect for scheduling 
              meetings between US West Coast and South Korea across the 16-17 hour time difference.
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
                  <strong>Seoul is 16-17 hours ahead of LA</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in LA, it's 4:00-5:00 AM next day in Seoul
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
                  <strong>5:00 PM - 7:00 PM PST</strong>
                </div>
                <div className="text-sm text-secondary">
                  (10:00 AM - 12:00 PM KST next day)
                </div>
                <div className="text-sm text-secondary">
                  End of LA day, morning Seoul
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for USA West Coast ↔ South Korea Business</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 5:00 PM - 7:00 PM PST (10:00 AM - 12:00 PM KST)</li>
                  <li>• End of LA business day = Morning Seoul</li>
                  <li>• Consider 30-60 minute windows max</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">🇰🇷 Seoul Business Culture:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Tech hub with Samsung, LG, Hyundai</li>
                  <li>• Strong gaming and electronics industries</li>
                  <li>• Popular for US-Korea tech partnerships</li>
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
              { from: 'Seoul', to: 'LA', path: '/seoul-to-los-angeles' },
              { from: 'LA', to: 'Osaka', path: '/los-angeles-to-osaka' },
              { from: 'Seoul', to: 'SF', path: '/seoul-to-san-francisco' },
              { from: 'LA', to: 'Manila', path: '/los-angeles-to-manila' },
              { from: 'Seoul', to: 'Seattle', path: '/seoul-to-seattle' },
              { from: 'LA', to: 'Singapore', path: '/los-angeles-to-singapore' },
              { from: 'Seoul', to: 'Vancouver', path: '/seoul-to-vancouver' },
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
