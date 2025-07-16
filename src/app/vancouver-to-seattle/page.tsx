import { Metadata } from 'next'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vancouver to Seattle Time Converter - PST/PDT to PST/PDT | TimelyZones',
  description: 'Convert time from Vancouver (PST/PDT) to Seattle (PST/PDT). Perfect for Canada-US Pacific Northwest business coordination.',
  keywords: ['Vancouver to Seattle time', 'PST to PST converter', 'Canada to USA time', 'Pacific Northwest business'],
  openGraph: {
    title: 'Vancouver to Seattle Time Converter - PST/PDT to PST/PDT',
    description: 'Convert time from Vancouver (PST/PDT) to Seattle (PST/PDT). Perfect for Canada-US Pacific Northwest business coordination.',
    type: 'website',
    url: 'https://timelyzones.com/vancouver-to-seattle',
  },
  alternates: { canonical: 'https://timelyzones.com/vancouver-to-seattle' }
}

export default function VancouverToSeattlePage() {
  const fromCity = getCityBySlug('vancouver')!
  const toCity = getCityBySlug('seattle')!

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
            <TypographyH1 className="mb-3">Vancouver to Seattle Time Converter</TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Canada</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">PST/PDT</span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">United States</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">PST/PDT</span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between Vancouver and Seattle instantly. Both cities share the same time zone for seamless Pacific Northwest coordination.
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
            <div className="text-sm"><strong>Vancouver and Seattle are in the same time zone</strong></div>
            <div className="text-sm text-secondary">Both observe Pacific Standard Time (PST/PDT)</div>
          </div>
        </div>
      </section>
    </main>
  )
}
