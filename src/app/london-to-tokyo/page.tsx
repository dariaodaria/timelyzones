import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'London to Tokyo Time Converter - GMT/BST to JST | TimelyZones',
  description: 'Convert time from London (GMT/BST) to Tokyo (JST). Perfect for scheduling meetings between UK and Japan across 8-9 hour time difference.',
  keywords: [
    'London to Tokyo time',
    'GMT to JST converter',
    'UK to Japan time difference',
    'London Tokyo meeting times',
    'timezone converter',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'London to Tokyo Time Converter - GMT/BST to JST',
    description: 'Convert time from London (GMT/BST) to Tokyo (JST). Perfect for UK-Japan business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/london-to-tokyo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London to Tokyo Time Converter - GMT/BST to JST',
    description: 'Convert time from London (GMT/BST) to Tokyo (JST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/london-to-tokyo',
  }
}

export default function LondonToTokyoPage() {
  const fromCity = getCityBySlug('london')!
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
              London to Tokyo Time Converter
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
                <span className="text-sm font-medium">Japan</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  JST
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between London and Tokyo instantly. Perfect for scheduling 
              meetings between UK and Japan, considering the 8-9 hour time difference.
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
                  <strong>Tokyo is 8-9 hours ahead of London</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in London, it's 8:00-9:00 PM in Tokyo
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
                  <strong>8:00 AM - 10:00 AM GMT</strong>
                </div>
                <div className="text-sm text-secondary">
                  (5:00 PM - 7:00 PM JST)
                </div>
                <div className="text-sm text-secondary">
                  Early London, late Tokyo business hours
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
                  March - Oct: 8 hours difference
                </div>
                <div className="text-sm text-secondary">
                  Oct - March: 9 hours difference
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for UK ↔ Japan Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 8:00 AM - 10:00 AM GMT (5:00 PM - 7:00 PM JST)</li>
                  <li>• 9:00 AM - 11:00 AM GMT (6:00 PM - 8:00 PM JST)</li>
                  <li>• Early morning UK = End of day Japan</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Avoid calling Tokyo after 6:00 PM JST</li>
                  <li>• UK mornings work best for urgent matters</li>
                  <li>• Consider Japanese national holidays</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related International Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'London', to: 'Sydney', path: '/london-to-sydney' },
              { from: 'Tokyo', to: 'London', path: '/tokyo-to-london' },
              { from: 'London', to: 'Singapore', path: '/london-to-singapore' },
              { from: 'Tokyo', to: 'NYC', path: '/tokyo-to-new-york' },
              { from: 'London', to: 'Hong Kong', path: '/london-to-hong-kong' },
              { from: 'Tokyo', to: 'LA', path: '/tokyo-to-los-angeles' },
              { from: 'London', to: 'Mumbai', path: '/london-to-mumbai' },
              { from: 'Tokyo', to: 'Sydney', path: '/tokyo-to-sydney' },
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
