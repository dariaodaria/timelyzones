import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe, Users, CalendarDays } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New York to Amsterdam Time Converter - EST/EDT to CET/CEST | TimelyZones',
  description: 'Convert time from New York (EST/EDT) to Amsterdam (CET/CEST). Perfect for scheduling meetings between US East Coast and Netherlands across 6-hour time difference.',
  keywords: ['New York to Amsterdam time', 'EST to CET converter', 'NYC to Amsterdam time difference', 'business hours', 'international meetings'],
  openGraph: {
    title: 'New York to Amsterdam Time Converter - EST/EDT to CET/CEST',
    description: 'Convert time from New York (EST/EDT) to Amsterdam (CET/CEST). Perfect for US East Coast-Netherlands business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/new-york-to-amsterdam',
  },
  alternates: { canonical: 'https://timelyzones.com/new-york-to-amsterdam' }
}

export default function NewYorkToAmsterdamPage() {
  const fromCity = getCityBySlug('new-york')!
  const toCity = getCityBySlug('amsterdam')!

  return (
    <main className="min-h-screen">
      <section className="py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />Back to Home
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <TypographyH1 className="mb-3">New York to Amsterdam Time Converter</TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">EST/EDT</span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Netherlands</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">CET/CEST</span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between New York and Amsterdam instantly. Perfect for US East Coast-Netherlands business coordination.
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
                <Clock className="h-5 w-5 text-primary" />Time Difference
              </h3>
              <div className="text-sm"><strong>Amsterdam is 6 hours ahead of NYC</strong></div>
              <div className="text-sm text-secondary">When it's 12:00 PM in New York, it's 6:00 PM in Amsterdam</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />Best Meeting Times
              </h3>
              <div className="text-sm"><strong>9:00 AM - 12:00 PM EST</strong></div>
              <div className="text-sm text-secondary">(3:00 PM - 6:00 PM CET)</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-orange-600" />Daylight Saving
              </h3>
              <div className="text-sm"><strong>Both observe DST</strong></div>
              <div className="text-sm text-secondary">Constant 6-hour difference</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
