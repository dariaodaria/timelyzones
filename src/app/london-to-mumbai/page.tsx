import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'London to Mumbai Time Converter - GMT/BST to IST | TimelyZones',
  description: 'Convert time from London (GMT/BST) to Mumbai (IST). Perfect for scheduling meetings between UK and India across 4.5-5.5 hour time difference.',
  keywords: [
    'London to Mumbai time',
    'GMT to IST converter',
    'London to Mumbai time difference',
    'UK to India time',
    'London Mumbai meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'London to Mumbai Time Converter - GMT/BST to IST',
    description: 'Convert time from London (GMT/BST) to Mumbai (IST). Perfect for UK-India business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/london-to-mumbai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'London to Mumbai Time Converter - GMT/BST to IST',
    description: 'Convert time from London (GMT/BST) to Mumbai (IST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/london-to-mumbai',
  }
}

export default function LondonToMumbaiPage() {
  const fromCity = getCityBySlug('london')!
  const toCity = getCityBySlug('mumbai')!

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
              London to Mumbai Time Converter
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
                <span className="text-sm font-medium">India</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  IST
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between London and Mumbai instantly. Perfect for scheduling 
              meetings between UK and India across the 4.5-5.5 hour time difference.
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
                  <strong>Mumbai is 4.5-5.5 hours ahead of London</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in London, it's 4:30-5:30 PM in Mumbai
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
                  <strong>9:00 AM - 12:00 PM GMT</strong>
                </div>
                <div className="text-sm text-secondary">
                  (1:30 PM - 4:30 PM IST)
                </div>
                <div className="text-sm text-secondary">
                  Morning London, afternoon Mumbai
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
                  March - Oct: 4.5 hours difference
                </div>
                <div className="text-sm text-secondary">
                  Oct - March: 5.5 hours difference
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for UK ↔ India Business</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 9:00 AM - 12:00 PM GMT (1:30 PM - 4:30 PM IST)</li>
                  <li>• Morning London = Afternoon Mumbai</li>
                  <li>• Avoid Indian lunch hours (12:00-1:00 PM IST)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">🏙️ London - Mumbai Business Hub:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Major financial and IT outsourcing centers</li>
                  <li>• Popular for banking, consulting, and tech</li>
                  <li>• Consider Indian holidays and festivals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related South Asian Business Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'London', to: 'Delhi', path: '/london-to-delhi' },
              { from: 'London', to: 'Bangalore', path: '/london-to-bangalore' },
              { from: 'Mumbai', to: 'London', path: '/mumbai-to-london' },
              { from: 'NY', to: 'Mumbai', path: '/new-york-to-mumbai' },
              { from: 'SF', to: 'Mumbai', path: '/san-francisco-to-mumbai' },
              { from: 'London', to: 'Chennai', path: '/london-to-chennai' },
              { from: 'Dublin', to: 'Mumbai', path: '/dublin-to-mumbai' },
              { from: 'Mumbai', to: 'Dubai', path: '/mumbai-to-dubai' },
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
