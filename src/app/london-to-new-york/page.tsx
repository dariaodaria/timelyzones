import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'London to New York Time Converter - GMT/BST to EST/EDT | TimelyZones',
  description: 'Convert time from London (GMT/BST) to New York (EST/EDT). Perfect for scheduling meetings between UK and USA across 5-hour time difference.',
  keywords: [
    'London to New York time',
    'GMT to EST converter',
    'London NYC time difference',
    'UK to USA time',
    'transatlantic timezone',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'London to New York Time Converter - GMT/BST to EST/EDT',
    description: 'Convert time from London (GMT/BST) to New York (EST/EDT). Perfect for UK-US business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/london-to-new-york',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London to New York Time Converter - GMT/BST to EST/EDT',
    description: 'Convert time from London (GMT/BST) to New York (EST/EDT).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/london-to-new-york',
  }
}

export default function LondonToNewYorkPage() {
  const fromCity = getCityBySlug('london')!
  const toCity = getCityBySlug('new-york')!

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
              London to New York Time Converter
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
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  EST/EDT
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time from London to New York instantly. The reverse of the most popular 
              transatlantic business route with a convenient 5-hour time difference.
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
                  <strong>New York is 5 hours behind London</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 5:00 PM in London, it's 12:00 PM in NYC
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
                  <strong>2:00 PM - 6:00 PM GMT</strong>
                </div>
                <div className="text-sm text-secondary">
                  (9:00 AM - 1:00 PM EST)
                </div>
                <div className="text-sm text-secondary">
                  Afternoon London, morning NYC
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
                  Time difference stays constant at 5 hours
                </div>
                <div className="text-sm text-secondary">
                  DST transitions are similar
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for UK ↔ USA Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 2:00 PM - 6:00 PM GMT (9:00 AM - 1:00 PM EST)</li>
                  <li>• 3:00 PM - 7:00 PM GMT (10:00 AM - 2:00 PM EST)</li>
                  <li>• Afternoon London = Morning NYC</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Avoid calling US before 9:00 AM EST</li>
                  <li>• London afternoons work best</li>
                  <li>• Friday afternoons are excellent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Transatlantic Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'NYC', to: 'London', path: '/new-york-to-london' },
              { from: 'London', to: 'Boston', path: '/london-to-boston' },
              { from: 'NYC', to: 'Edinburgh', path: '/new-york-to-edinburgh' },
              { from: 'London', to: 'Chicago', path: '/london-to-chicago' },
              { from: 'NYC', to: 'Manchester', path: '/new-york-to-manchester' },
              { from: 'London', to: 'Miami', path: '/london-to-miami' },
              { from: 'NYC', to: 'Dublin', path: '/new-york-to-dublin' },
              { from: 'London', to: 'Toronto', path: '/london-to-toronto' },
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
