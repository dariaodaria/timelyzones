import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'San Francisco to Singapore Time Converter - PST/PDT to SGT | TimelyZones',
  description: 'Convert time from San Francisco (PST/PDT) to Singapore (SGT). Perfect for US West Coast-Singapore business coordination.',
  keywords: ['San Francisco to Singapore time', 'PST to SGT converter', 'business hours', 'international meetings'],
  openGraph: {
    title: 'San Francisco to Singapore Time Converter - PST/PDT to SGT',
    description: 'Convert time from San Francisco (PST/PDT) to Singapore (SGT). Perfect for US West Coast-Singapore business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/san-francisco-to-singapore',
  },
  alternates: { canonical: 'https://timelyzones.com/san-francisco-to-singapore' }
}

export default function SanFranciscoToSingaporePage() {
  const fromCity = getCityBySlug('san-francisco')!
  const toCity = getCityBySlug('singapore')!

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
            <TypographyH1 className="mb-3">San Francisco to Singapore Time Converter</TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">PST/PDT</span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Singapore</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">SGT</span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between San Francisco and Singapore instantly. Perfect for US West Coast-Singapore business coordination.
            </TypographyP>
          </div>
          <TimeConverter defaultFromCity={fromCity} defaultToCity={toCity} />
        </div>
      </section>
    </main>
  )
}
