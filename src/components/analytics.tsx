"use client"

import { useEffect } from 'react'

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Google Analytics 4 tracking
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
  }
}

export function useAnalytics() {
  const trackEvent = (event: AnalyticsEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      })
    }

    // Console logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event)
    }
  }

  const trackConversion = (fromCity: string, toCity: string, timeSet: string) => {
    trackEvent({
      action: 'timezone_conversion',
      category: 'conversions',
      label: `${fromCity}_to_${toCity}`,
      value: 1
    })
  }

  const trackFeatureUsage = (feature: string, details?: string) => {
    trackEvent({
      action: 'feature_used',
      category: 'features',
      label: feature,
      value: 1
    })
  }

  const trackError = (error: string, component: string) => {
    trackEvent({
      action: 'error_encountered',
      category: 'errors',
      label: `${component}: ${error}`,
      value: 1
    })
  }

  return {
    trackEvent,
    trackConversion,
    trackFeatureUsage,
    trackError
  }
}

// Google Analytics component
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  useEffect(() => {
    if (!gaId) return

    // Load Google Analytics script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      ;(window as any).dataLayer = (window as any).dataLayer || []
      // eslint-disable-next-line prefer-rest-params
      ;(window as any).dataLayer.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', gaId, {
      page_title: document.title,
      page_location: window.location.href,
    })

    return () => {
      document.head.removeChild(script)
    }
  }, [gaId])

  return null
}

// Performance monitoring component
export function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    if ('web-vital' in window) {
      return
    }

    const trackWebVital = (metric: any) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.value),
          non_interaction: true,
        })
      }
    }

    // Load web-vitals library
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(trackWebVital)
      onFID(trackWebVital)
      onFCP(trackWebVital)
      onLCP(trackWebVital)
      onTTFB(trackWebVital)
    })
  }, [])

  return null
}

// Custom error tracking
export function ErrorTracker() {
  const { trackError } = useAnalytics()

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackError(event.error?.message || 'Unknown error', 'global')
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(
        event.reason?.message || 'Unhandled promise rejection',
        'promise'
      )
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [trackError])

  return null
}

// Usage tracking for timezone conversions
export function useTimezoneAnalytics() {
  const { trackConversion, trackFeatureUsage } = useAnalytics()

  const trackTimezoneConversion = (fromCity: string, toCity: string) => {
    trackConversion(fromCity, toCity, new Date().toISOString())
  }

  const trackMultiLocationUsage = (locationCount: number) => {
    trackFeatureUsage('multi_location_conversion', `${locationCount}_locations`)
  }

  const trackTimeFormatToggle = (format: '12h' | '24h') => {
    trackFeatureUsage('time_format_toggle', format)
  }

  const trackCitySearch = (searchTerm: string) => {
    trackFeatureUsage('city_search', searchTerm)
  }

  const trackLinkShare = (conversionType: string) => {
    trackFeatureUsage('link_share', conversionType)
  }

  const trackSwapCities = () => {
    trackFeatureUsage('swap_cities')
  }

  return {
    trackTimezoneConversion,
    trackMultiLocationUsage,
    trackTimeFormatToggle,
    trackCitySearch,
    trackLinkShare,
    trackSwapCities
  }
}
