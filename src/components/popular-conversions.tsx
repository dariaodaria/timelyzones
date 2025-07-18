'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface PopularConversion {
  from: string
  to: string
  fromCity: string
  toCity: string
}

const conversions: PopularConversion[] = [
  { from: 'EST', to: 'PST', fromCity: 'new-york', toCity: 'los-angeles' },
  { from: 'GMT', to: 'JST', fromCity: 'london', toCity: 'tokyo' },
  { from: 'EST', to: 'CET', fromCity: 'new-york', toCity: 'paris' },
  { from: 'PST', to: 'AEST', fromCity: 'los-angeles', toCity: 'sydney' },
  { from: 'EST', to: 'GMT', fromCity: 'new-york', toCity: 'london' },
  { from: 'JST', to: 'PST', fromCity: 'tokyo', toCity: 'los-angeles' },
  { from: 'SGT', to: 'GMT', fromCity: 'singapore', toCity: 'london' },
  { from: 'AEST', to: 'GMT', fromCity: 'sydney', toCity: 'london' },
  { from: 'EST', to: 'JST', fromCity: 'new-york', toCity: 'tokyo' },
  { from: 'GMT', to: 'EST', fromCity: 'london', toCity: 'new-york' },
  { from: 'CET', to: 'EST', fromCity: 'paris', toCity: 'new-york' }
]

export function PopularConversions() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Popular Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="p-3 bg-white dark:bg-slate-800 border border-border rounded-lg animate-pulse">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold mb-4">Popular Conversions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {conversions.map(conversion => (
            <Link 
              key={`${conversion.fromCity}-${conversion.toCity}`}
              href={`/${conversion.fromCity}-to-${conversion.toCity}`}
              className="p-3 bg-white dark:bg-slate-800 border border-border rounded-lg hover:shadow-md transition-shadow text-sm font-medium text-center"
              prefetch={true}
            >
              {conversion.from} → {conversion.to}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
