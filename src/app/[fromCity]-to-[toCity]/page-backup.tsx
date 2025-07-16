// Backup of original file
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TimeConverter } from '@/components/time-converter'
import { getCityBySlug, getTimezoneAbbreviation } from '@/lib/timezone'
import { TypographyH1, TypographyP } from '@/components/ui/typography'
import Link from 'next/link'
import { ArrowLeft, Clock, Globe } from 'lucide-react'

interface ConversionPageProps {
  params: {
    fromCity: string
    toCity: string
  }
  searchParams: {
    at?: string
  }
}

export async function generateMetadata({ 
  params 
}: ConversionPageProps): Promise<Metadata> {
  const fromCity = getCityBySlug(params.fromCity)
  const toCity = getCityBySlug(params.toCity)
  
  if (!fromCity || !toCity) {
    return {
      title: 'City Not Found - TimelyZones',
      description: 'The requested city conversion page could not be found. Please check the city names and try again.',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const fromTz = getTimezoneAbbreviation(fromCity)
  const toTz = getTimezoneAbbreviation(toCity)
  
  const title = `${fromCity.name} to ${toCity.name} Time Converter - ${fromTz} to ${toTz}`
  const description = `Convert time from ${fromCity.name}, ${fromCity.country} (${fromTz}) to ${toCity.name}, ${toCity.country} (${toTz}). Fast, accurate timezone conversion with business hours awareness.`
  
  return {
    title,
    description,
    keywords: [
      'time conversion',
      `${fromCity.name} to ${toCity.name}`,
      `${fromTz} to ${toTz}`,
      'timezone converter',
      'world clock',
      fromCity.name,
      toCity.name,
      fromTz,
      toTz
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://timelyzones.com/${params.fromCity}-to-${params.toCity}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://timelyzones.com/${params.fromCity}-to-${params.toCity}`,
    }
  }
}

export default function ConversionPage({ 
  params, 
  searchParams 
}: ConversionPageProps) {
  const fromCity = getCityBySlug(params.fromCity)
  const toCity = getCityBySlug(params.toCity)
  
  if (!fromCity || !toCity) {
    notFound()
  }

  const fromTz = getTimezoneAbbreviation(fromCity)
  const toTz = getTimezoneAbbreviation(toCity)
  
  // Parse time from URL parameter
  const selectedTime = searchParams.at ? parseTimeParam(searchParams.at) : new Date()

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
              {fromCity.name} to {toCity.name}
            </TypographyH1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">{fromCity.country}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {fromTz}
                </span>
              </div>
              <span className="text-secondary">→</span>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">{toCity.country}</span>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                  {toTz}
                </span>
              </div>
            </div>
            <TypographyP className="text-secondary max-w-2xl mx-auto">
              Convert time between {fromCity.name} and {toCity.name} instantly. 
              Perfect for scheduling meetings, calls, and coordinating across time zones.
            </TypographyP>
          </div>
          
          <TimeConverter 
            defaultFromCity={fromCity}
            defaultToCity={toCity}
            defaultTime={selectedTime}
          />
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Time Zone Info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">From:</span>
                  <span className="text-sm font-medium">
                    {fromCity.name} ({fromTz})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">To:</span>
                  <span className="text-sm font-medium">
                    {toCity.name} ({toTz})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-secondary">Time Difference:</span>
                  <span className="text-sm font-medium">
                    {calculateTimeDifference(fromCity, toCity)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                Popular Times
              </h3>
              <div className="space-y-2">
                <div className="text-sm">
                  <strong>Business Hours:</strong> 9 AM - 6 PM in both locations
                </div>
                <div className="text-sm">
                  <strong>Best Call Times:</strong> When both cities are in business hours
                </div>
                <div className="text-sm text-secondary">
                  The converter shows green when it's a good time to call!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conversions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-semibold mb-4">Related Conversions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {getRelatedConversions(fromCity, toCity).map(conversion => (
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

function parseTimeParam(timeParam: string): Date {
  try {
    const [hours, minutes] = timeParam.split(':').map(Number)
    const date = new Date()
    date.setHours(hours, minutes, 0, 0)
    return date
  } catch {
    return new Date()
  }
}

function calculateTimeDifference(fromCity: any, toCity: any): string {
  const now = new Date()
  const fromTime = new Date(now.toLocaleString('en-US', { timeZone: fromCity.timezone }))
  const toTime = new Date(now.toLocaleString('en-US', { timeZone: toCity.timezone }))
  
  const diffInHours = Math.round((toTime.getTime() - fromTime.getTime()) / (1000 * 60 * 60))
  
  if (diffInHours === 0) return 'Same time'
  if (diffInHours > 0) return `${diffInHours} hours ahead`
  return `${Math.abs(diffInHours)} hours behind`
}

function getRelatedConversions(fromCity: any, toCity: any) {
  const popular = [
    { from: 'EST', to: 'PST', path: '/new-york-to-los-angeles' },
    { from: 'UTC', to: 'JST', path: '/london-to-tokyo' },
    { from: 'EST', to: 'CET', path: '/new-york-to-paris' },
    { from: 'PST', to: 'AEST', path: '/los-angeles-to-sydney' },
    { from: 'CET', to: 'EST', path: '/paris-to-new-york' },
    { from: 'JST', to: 'PST', path: '/tokyo-to-los-angeles' },
    { from: 'AEST', to: 'GMT', path: '/sydney-to-london' },
    { from: 'GMT', to: 'CST', path: '/london-to-chicago' },
  ]
  
  return popular
    .filter(conv => conv.path !== `/${fromCity.id}-to-${toCity.id}`)
    .slice(0, 8)
}
