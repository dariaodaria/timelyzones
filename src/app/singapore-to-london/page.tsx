import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Singapore to London Time Converter - SGT to GMT/BST | TimelyZones',
  description: 'Convert time from Singapore (SGT) to London (GMT/BST). Perfect for scheduling meetings between Asia and Europe across 7-8 hour time difference.',
  keywords: [
    'Singapore to London time',
    'SGT to GMT converter',
    'Singapore London time difference',
    'Asia to Europe time',
    'Singapore UK meeting times',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'Singapore to London Time Converter - SGT to GMT/BST',
    description: 'Convert time from Singapore (SGT) to London (GMT/BST). Perfect for Asia-Europe business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/singapore-to-london',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Singapore to London Time Converter - SGT to GMT/BST',
    description: 'Convert time from Singapore (SGT) to London (GMT/BST).',
  },
  alternates: {
    canonical: 'https://timelyzones.com/singapore-to-london',
  }
}

export default function SingaporeToLondonPage() {
  const fromCity = getCityBySlug('singapore')!
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
              Singapore to London Time Converter
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Singapore</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  SGT
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
              Convert time between Singapore and London instantly. Perfect for scheduling 
              meetings between Asia and Europe across the 7-8 hour time difference.
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
                  <strong>Singapore is 7-8 hours ahead of London</strong>
                </div>
                <div className="text-sm text-secondary">
                  When it's 12:00 PM in Singapore, it's 4:00-5:00 AM in London
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
                  <strong>4:00 PM - 6:00 PM SGT</strong>
                </div>
                <div className="text-sm text-secondary">
                  (8:00 AM - 10:00 AM GMT)
                </div>
                <div className="text-sm text-secondary">
                  Late afternoon Singapore, morning London
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
                  March - Oct: 7 hours difference
                </div>
                <div className="text-sm text-secondary">
                  Oct - March: 8 hours difference
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
            <h2 className="text-lg font-semibold mb-4">💡 Pro Tips for Singapore ↔ UK Collaboration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">⏰ Optimal Meeting Windows:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• 4:00 PM - 6:00 PM SGT (8:00 AM - 10:00 AM GMT)</li>
                  <li>• 5:00 PM - 7:00 PM SGT (9:00 AM - 11:00 AM GMT)</li>
                  <li>• Late afternoon Singapore = Morning London</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">📞 Call Considerations:</h3>
                <ul className="text-sm space-y-1 text-secondary">
                  <li>• Avoid calling UK after 6:00 PM GMT</li>
                  <li>• Singapore afternoons work best</li>
                  <li>• Consider UK lunch break (12-2 PM)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Asia-Europe Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'London', to: 'Singapore', path: '/london-to-singapore' },
              { from: 'Singapore', to: 'Paris', path: '/singapore-to-paris' },
              { from: 'London', to: 'Hong Kong', path: '/london-to-hong-kong' },
              { from: 'Singapore', to: 'Berlin', path: '/singapore-to-berlin' },
              { from: 'London', to: 'Bangkok', path: '/london-to-bangkok' },
              { from: 'Singapore', to: 'Amsterdam', path: '/singapore-to-amsterdam' },
              { from: 'London', to: 'Mumbai', path: '/london-to-mumbai' },
              { from: 'Singapore', to: 'Zurich', path: '/singapore-to-zurich' },
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
