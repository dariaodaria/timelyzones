import { TimeConverter } from '@/components/time-converter'
import { WorldClock } from '@/components/world-clock'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { Zap, Clock, Shield, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - More Compact */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <TypographyH1 className="mb-3">
              Time Zone Calculator – Instantly Convert & Compare World Times
            </TypographyH1>
            <TypographyP className="text-lg text-secondary max-w-2xl mx-auto">
              Effortlessly calculate time differences, plan international meetings, and stay updated on daylight saving changes with the most accurate online time zone converter.
            </TypographyP>
          </div>
          
          <TimeConverter />
        </div>
      </section>

      {/* World Clock Section - More Compact */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <WorldClock />
        </div>
      </section>

      {/* Coming Soon - No CTA */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg text-center">
              <h3 className="text-base font-semibold mb-2">Coming Soon: Team Groups</h3>
              <p className="text-sm text-secondary">
                Organize locations like "London Offices" or "APAC Team" to track multiple time zones at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Smaller Typography */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <TypographyH2 className="mb-3">Built for Modern Teams</TypographyH2>
            <p className="text-secondary max-w-2xl mx-auto">
              Whether you're coordinating with global offices or planning calls across time zones, 
              TimelyZones makes it simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <Zap className="h-7 w-7 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-base">Lightning Fast</h3>
              <p className="text-sm text-secondary">
                Instant conversions with real-time updates. No waiting, no bloat.
              </p>
            </div>
            <div className="text-center p-4">
              <Clock className="h-7 w-7 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-base">Smart Suggestions</h3>
              <p className="text-sm text-secondary">
                "Good time to call" indicators and business hours awareness.
              </p>
            </div>
            <div className="text-center p-4">
              <Globe className="h-7 w-7 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-base">Global Coverage</h3>
              <p className="text-sm text-secondary">
                Support for all major cities and time zones worldwide.
              </p>
            </div>
            <div className="text-center p-4">
              <Shield className="h-7 w-7 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2 text-base">Privacy First</h3>
              <p className="text-sm text-secondary">
                No tracking, no ads, just pure functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Conversions - More Compact */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Popular Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'EST', to: 'PST', path: '/new-york-to-los-angeles' },
              { from: 'GMT', to: 'JST', path: '/london-to-tokyo' },
              { from: 'EST', to: 'CET', path: '/new-york-to-paris' },
              { from: 'PST', to: 'AEST', path: '/los-angeles-to-sydney' },
              { from: 'EST', to: 'GMT', path: '/new-york-to-london' },
              { from: 'JST', to: 'PST', path: '/tokyo-to-los-angeles' },
              { from: 'SGT', to: 'GMT', path: '/singapore-to-london' },
              { from: 'AEST', to: 'GMT', path: '/sydney-to-london' },
              { from: 'EST', to: 'JST', path: '/new-york-to-tokyo' },
              { from: 'GMT', to: 'EST', path: '/london-to-new-york' },
              { from: 'CET', to: 'EST', path: '/paris-to-new-york' }
            ].map(conversion => (
              <Link 
                key={`${conversion.from}-${conversion.to}`}
                href={conversion.path}
                className="block p-3 bg-white dark:bg-slate-800 border border-border rounded-lg hover:shadow-md hover:bg-primary/5 transition-all text-sm font-medium text-center hover:border-primary/50"
              >
                {conversion.from} → {conversion.to}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - More Restrained */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <TypographyH2 className="mb-3">Ready to Simplify Time Zones?</TypographyH2>
          <p className="text-secondary mb-6 max-w-xl mx-auto">
            Join thousands of users who've made TimelyZones their go-to time zone converter.
          </p>
        </div>
      </section>
    </main>
  )
}
