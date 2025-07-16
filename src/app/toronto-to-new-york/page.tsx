import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Toronto to New York Time Converter - EST/EDT to EST/EDT | TimelyZones',
  description: 'Convert time from Toronto (EST/EDT) to New York (EST/EDT). Perfect for Canada-US business coordination.',
  keywords: ['Toronto to New York time', 'EST to EST converter', 'Canada to USA time', 'business hours'],
  openGraph: {
    title: 'Toronto to New York Time Converter - EST/EDT to EST/EDT',
    description: 'Convert time from Toronto (EST/EDT) to New York (EST/EDT). Perfect for Canada-US business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/toronto-to-new-york',
  },
  alternates: { canonical: 'https://timelyzones.com/toronto-to-new-york' }
}

export default function TorontoToNewYorkPage() {
  const fromCity = getCityBySlug('toronto')!
  const toCity = getCityBySlug('new-york')!

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
            <TypographyH1 className="mb-3">Toronto to New York Time Converter</TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Canada</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">EST/EDT</span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">EST/EDT</span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between Toronto and New York instantly. Both cities share the same time zone for seamless coordination.
            </TypographyP>
          </div>
          <TimeConverter defaultFromCity={fromCity} defaultToCity={toCity} />
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border max-w-2xl mx-auto text-center">
            <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-primary" />Same Time Zone
            </h3>
            <div className="text-sm"><strong>Toronto and New York are in the same time zone</strong></div>
            <div className="text-sm text-secondary">Both observe Eastern Standard Time (EST/EDT)</div>
          </div>
        </div>
      </section>
    </main>
  )
}
