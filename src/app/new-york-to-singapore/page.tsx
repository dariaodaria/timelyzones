import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New York to Singapore Time Converter - EST/EDT to SGT | TimelyZones',
  description: 'Convert time from New York (EST/EDT) to Singapore (SGT). Perfect for scheduling meetings between US East Coast and Southeast Asia across 12-13 hour time difference.',
  keywords: [
    'New York to Singapore time',
    'EST to SGT converter',
    'NYC to Singapore time difference',
    'USA to Singapore time',
    'business hours',
    'international meetings'
  ],
  openGraph: {
    title: 'New York to Singapore Time Converter - EST/EDT to SGT',
    description: 'Convert time from New York (EST/EDT) to Singapore (SGT). Perfect for US East Coast-Singapore business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/new-york-to-singapore',
  },
  alternates: {
    canonical: 'https://timelyzones.com/new-york-to-singapore',
  }
}

export default function NewYorkToSingaporePage() {
  const fromCity = getCityBySlug('new-york')!
  const toCity = getCityBySlug('singapore')!

  return (
    <main className="min-h-screen">
      <section className="py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <TypographyH1 className="mb-3">New York to Singapore Time Converter</TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">EST/EDT</span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Singapore</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">SGT</span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between New York and Singapore instantly. Perfect for scheduling 
              meetings between US East Coast and Southeast Asia across the 12-13 hour time difference.
            </TypographyP>
          </div>
          
          <TimeConverter defaultFromCity={fromCity} defaultToCity={toCity} />
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Time Difference
              </h3>
              <div className="space-y-2">
                <div className="text-sm"><strong>Singapore is 12-13 hours ahead of NYC</strong></div>
                <div className="text-sm text-secondary">When it's 12:00 PM in New York, it's 12:00-1:00 AM next day in Singapore</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Best Meeting Times
              </h3>
              <div className="space-y-2">
                <div className="text-sm"><strong>8:00 AM - 10:00 AM EST</strong></div>
                <div className="text-sm text-secondary">(9:00 PM - 11:00 PM SGT)</div>
                <div className="text-sm text-secondary">Morning NYC, evening Singapore</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-orange-600" />
                Daylight Saving
              </h3>
              <div className="space-y-2">
                <div className="text-sm"><strong>Only NYC observes DST</strong></div>
                <div className="text-sm text-secondary">March - Nov: 12 hours difference</div>
                <div className="text-sm text-secondary">Nov - March: 13 hours difference</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
