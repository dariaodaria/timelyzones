"use client"

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { Copy, Calendar, RefreshCw, Clock, CheckCircle, Plus, X, AlertCircle } from 'lucide-react'
import { getCities, convertTimeBetweenCities, getCityBySlug } from '@/lib/timezone'
import { formatTime, cn } from '@/lib/utils'
import { CitySearchDropdown } from './city-search-dropdown'
import { LoadingSpinner, TimeDisplaySkeleton } from './ui/loading'
import { useAnalytics } from './analytics'
import type { City, TimezoneConversion } from '@/lib/timezone'

interface LocationResult {
  city: City
  time: Date
  isGoodTimeToCall: boolean
}

interface TimeConverterProps {
  defaultFromCity?: City
  defaultToCity?: City
  defaultTime?: Date
}

// PERFORMANCE FIX: Add timezone detection utilities
function getUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'America/New_York' // Fallback
  }
}

function findCityByTimezone(cities: City[], targetTimezone: string): City | null {
  // Try exact match first
  const exactMatch = cities.find(city => city.timezone === targetTimezone)
  if (exactMatch) return exactMatch
  
  // Common timezone mappings for better UX
  const timezoneMap: Record<string, string> = {
    'America/New_York': 'new-york',
    'America/Los_Angeles': 'los-angeles', 
    'America/Chicago': 'chicago',
    'America/Denver': 'denver',
    'Europe/London': 'london',
    'Europe/Paris': 'paris',
    'Europe/Berlin': 'berlin',
    'Europe/Rome': 'rome',
    'Europe/Amsterdam': 'amsterdam',
    'Europe/Madrid': 'madrid',
    'Europe/Zurich': 'zurich',
    'Europe/Stockholm': 'stockholm',
    'Europe/Vienna': 'vienna',
    'Europe/Prague': 'prague',
    'Europe/Warsaw': 'warsaw',
    'Europe/Budapest': 'budapest',
    'Europe/Zagreb': 'zagreb',
    'Europe/Belgrade': 'belgrade',
    'Europe/Ljubljana': 'ljubljana',
    'Asia/Tokyo': 'tokyo',
    'Asia/Singapore': 'singapore',
    'Asia/Hong_Kong': 'hong-kong',
    'Asia/Shanghai': 'shanghai',
    'Asia/Seoul': 'seoul',
    'Asia/Mumbai': 'mumbai',
    'Asia/Bangkok': 'bangkok',
    'Asia/Manila': 'manila',
    'Australia/Sydney': 'sydney',
    'Australia/Melbourne': 'melbourne',
    'Australia/Brisbane': 'brisbane',
    'Australia/Perth': 'perth',
    'Pacific/Auckland': 'auckland'
  }
  
  const mappedCityId = timezoneMap[targetTimezone]
  if (mappedCityId) {
    const mappedCity = cities.find(city => city.id === mappedCityId)
    if (mappedCity) return mappedCity
  }
  
  return null
}

// PERFORMANCE FIX: Add debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export function TimeConverter({ 
  defaultFromCity,
  defaultToCity,
  defaultTime
}: TimeConverterProps = {}) {
  const [cities] = useState(() => getCities())
  const [fromCity, setFromCity] = useState<City>(() => {
    // If a default is provided (like from URL), use it
    if (defaultFromCity) return defaultFromCity
    // Otherwise start with New York and detect user's timezone after mount
    return getCityBySlug('new-york') || cities[0]
  })
  const [toCities, setToCities] = useState<City[]>(() => 
    defaultToCity ? [defaultToCity] : [] // Empty by default
  )
  const [selectedTime, setSelectedTime] = useState(() => defaultTime || new Date())
  const [results, setResults] = useState<LocationResult[]>([])
  const [is24Hour, setIs24Hour] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Initialize analytics
  const { trackConversion, trackFeatureUsage } = useAnalytics()

  // Detect user's timezone after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true)
    
    // Only auto-detect if no defaultFromCity was provided
    if (!defaultFromCity) {
      const userTimezone = getUserTimezone()
      const userCity = findCityByTimezone(cities, userTimezone)
      
      if (userCity) {
        setFromCity(userCity)
      }
    }
    
    // Set current time
    if (!defaultTime) {
      setSelectedTime(new Date())
    }
  }, [defaultFromCity, defaultTime, cities])

  // PERFORMANCE FIX: Add debouncing to prevent excessive recalculations
  const debouncedFromCity = useDebounce(fromCity, 150)
  const debouncedToCities = useDebounce(toCities, 150)
  const debouncedSelectedTime = useDebounce(selectedTime, 300)

  // Memoize expensive calculations
  const excludedCities = useMemo(() => {
    const validToCities = toCities.filter(Boolean)
    return [fromCity, ...validToCities]
  }, [fromCity, toCities])

  const timeInputRef = useRef<HTMLInputElement>(null)

  const formatTimeInput = useCallback((date: Date): string => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
  }, [])

  const handleTimeInputClick = useCallback(() => {
    if (timeInputRef.current) {
      timeInputRef.current.focus()
      timeInputRef.current.showPicker?.()
    }
  }, [])

  // PERFORMANCE FIX: Optimized calculateResults (removed async/await)
  const calculateResults = useCallback(() => {
    try {
      setError(null)
      // Only calculate if there are cities to convert to
      if (debouncedToCities.length === 0) {
        setResults([])
        return
      }
      
      const newResults: LocationResult[] = debouncedToCities.map(toCity => {
        const conversion = convertTimeBetweenCities(debouncedFromCity, toCity, debouncedSelectedTime)
        return {
          city: toCity,
          time: conversion.toTime,
          isGoodTimeToCall: conversion.isGoodTimeToCall || false
        }
      })
      setResults(newResults)
      
      // Track timezone conversion (only on client side)
      if (debouncedToCities.length > 0 && typeof window !== 'undefined') {
        trackConversion(
          debouncedFromCity.name,
          debouncedToCities.map(city => city.name).join(', '),
          formatTimeInput(debouncedSelectedTime)
        )
      }
    } catch (err) {
      setError('Failed to convert times. Please try again.')
      console.error('Timezone conversion error:', err)
    }
  }, [debouncedFromCity, debouncedToCities, debouncedSelectedTime, trackConversion, formatTimeInput])

  // PERFORMANCE FIX: Use debounced values for calculations
  useEffect(() => {
    calculateResults()
  }, [calculateResults])

  const handleSwapCities = useCallback(() => {
    if (toCities.length === 1) {
      const temp = fromCity
      setFromCity(toCities[0])
      setToCities([temp])
      
      // Track swap feature usage (only on client side)
      if (typeof window !== 'undefined') {
        trackFeatureUsage('swap_cities', `${toCities[0].name} <-> ${fromCity.name}`)
      }
    }
  }, [fromCity, toCities, trackFeatureUsage])

  const handleCopyLink = useCallback(async () => {
    try {
      const timeParam = `${selectedTime.getHours()}:${selectedTime.getMinutes().toString().padStart(2, '0')}`
      const toCityParams = toCities.map(city => city.id).join(',')
      const url = `${window.location.origin}/${fromCity.id}-to-${toCityParams}?at=${timeParam}`
      
      await navigator.clipboard.writeText(url)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
      
      // Track copy link feature usage (only on client side)
      if (typeof window !== 'undefined') {
        trackFeatureUsage('copy_link', `${fromCity.name} to ${toCities.map(c => c.name).join(', ')}`)
      }
    } catch (error) {
      console.error('Failed to copy:', error)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = window.location.href
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
      
      // Track copy link feature usage (fallback method, only on client side)
      if (typeof window !== 'undefined') {
        trackFeatureUsage('copy_link_fallback', `${fromCity.name} to ${toCities.map(c => c.name).join(', ')}`)
      }
    }
  }, [selectedTime, toCities, fromCity, trackFeatureUsage])

  const handleTimeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const [hours, minutes] = e.target.value.split(':').map(Number)
      if (isNaN(hours) || isNaN(minutes)) return
      
      const newTime = new Date(selectedTime)
      newTime.setHours(hours, minutes)
      setSelectedTime(newTime)
    } catch (err) {
      console.error('Invalid time input:', err)
    }
  }, [selectedTime])

  // PERFORMANCE FIX: Optimized addToCity function
  const addToCity = useCallback(() => {
    // For subsequent cities, find any available city
    const availableCities = cities.filter(city => 
      !excludedCities.some(excluded => excluded.id === city.id)
    )
    if (availableCities.length > 0) {
      setToCities(prev => [...prev, availableCities[0]])
    }
  }, [cities, excludedCities])

  // PERFORMANCE FIX: Optimized removeToCity function
  const removeToCity = useCallback((cityToRemove: City) => {
    // Allow removing cities even if it's the last one (go back to empty state)
    setToCities(prev => prev.filter(city => city.id !== cityToRemove.id))
  }, [])

  // PERFORMANCE FIX: Optimized updateToCity function
  const updateToCity = useCallback((index: number, newCity: City) => {
    setToCities(prev => {
      const updated = [...prev]
      updated[index] = newCity
      
      // Track when user selects first destination city (only on client side)
      if (index === 0 && prev.length === 0 && typeof window !== 'undefined') {
        trackFeatureUsage('first_destination_selected', newCity.name)
      }
      
      return updated
    })
  }, [trackFeatureUsage])

  const getTimeDisplayClasses = useCallback((isGoodTime: boolean) => {
    return cn(
      "w-full p-3 text-center font-medium font-mono text-lg rounded-lg transition-colors group relative border",
      isGoodTime 
        ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
        : "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800"
    )
  }, [])

  const getTooltipText = useCallback((isGoodTime: boolean, cityName: string) => {
    return isGoodTime 
      ? `Perfect time to call ${cityName}! They're in business hours (9 AM - 6 PM, weekdays)`
      : `${cityName} is outside business hours. Consider calling during 9 AM - 6 PM on weekdays`
  }, [])

  // Error state
  if (error) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-red-200 dark:border-red-800 p-6">
          <div className="flex items-center gap-3 text-red-600 dark:text-red-400">
            <AlertCircle className="h-5 w-5" />
            <span className="font-medium">{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-auto px-3 py-1 text-sm bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-border p-6">
        {/* From Section */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
            <label 
              className="sm:col-span-1 text-sm font-medium text-secondary sm:pt-3"
              htmlFor="from-city-search"
            >
              From:
            </label>
            <div className="sm:col-span-8">
              <CitySearchDropdown
                value={fromCity}
                onChange={setFromCity}
                excludeCities={toCities}
                placeholder="Search for a city..."
              />
            </div>
            <div className="sm:col-span-3 relative pt-0">
              <div 
                onClick={handleTimeInputClick}
                className="relative cursor-pointer"
              >
                <input
                  ref={timeInputRef}
                  type="time"
                  value={formatTimeInput(selectedTime)}
                  onChange={handleTimeChange}
                  className="time-input w-full p-3 border border-border rounded-lg bg-background hover:bg-muted/50 hover:border-primary/50 focus:ring-2 focus:ring-primary focus:border-transparent text-center font-mono transition-colors cursor-pointer"
                  aria-label="Select time"
                />
              </div>
            </div>
          </div>

          {/* To Sections - Always show at least one */}
          <div className="space-y-3">
            {toCities.length === 0 ? (
              // Show empty "To:" dropdown when no cities selected
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <label 
                  className="sm:col-span-1 text-sm font-medium text-secondary sm:pt-3"
                  htmlFor="to-city-search-empty"
                >
                  To:
                </label>
                <div className="sm:col-span-8">
                  <CitySearchDropdown
                    value={null}
                    onChange={(city) => {
                      setToCities([city])
                      // Track first destination selection (only on client side)
                      if (typeof window !== 'undefined') {
                        trackFeatureUsage('first_destination_selected', city.name)
                      }
                    }}
                    excludeCities={[fromCity]}
                    placeholder="Select destination timezone..."
                  />
                </div>
                <div className="sm:col-span-3 relative pt-0">
                  <div className="w-full p-3 text-center font-medium font-mono text-lg rounded-lg border border-border bg-muted/30 text-muted-foreground">
                    --:--
                  </div>
                </div>
                <div className="sm:col-span-1 flex justify-center sm:pt-3">
                  {/* No remove button for empty state */}
                </div>
              </div>
            ) : (
              // Show actual city dropdowns when cities are selected
              toCities.map((toCity, index) => (
                <div key={`${toCity.id}-${index}`} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                  <label 
                    className="sm:col-span-1 text-sm font-medium text-secondary sm:pt-3"
                    htmlFor={`to-city-search-${index}`}
                  >
                    {index === 0 ? 'To:' : ''}
                  </label>
                  <div className="sm:col-span-8">
                    <CitySearchDropdown
                      value={toCity}
                      onChange={(city) => updateToCity(index, city)}
                      excludeCities={[fromCity, ...toCities.filter((_, i) => i !== index)]}
                      placeholder="Search for a city..."
                    />
                  </div>
                  <div className="sm:col-span-3 relative pt-0">
                    <div 
                      className={cn(
                        getTimeDisplayClasses(results[index]?.isGoodTimeToCall || false),
                        "relative pr-10"
                      )}
                      title={results[index] ? getTooltipText(results[index].isGoodTimeToCall, results[index].city.name) : ''}
                    >
                      {results[index] ? formatTime(results[index].time, is24Hour) : '--:--'}
                      <button
                        onClick={() => removeToCity(toCity)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
                        title="Remove this location"
                        aria-label={`Remove ${toCity.name}`}
                      >
                        <X className="h-4 w-4 text-red-600" />
                      </button>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {results[index] ? getTooltipText(results[index].isGoodTimeToCall, results[index].city.name) : ''}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-1 flex justify-center sm:pt-3">
                    {/* Remove button now integrated into time display */}
                  </div>
                </div>
              ))
            )}
            
            {/* Add Additional Location Button - Only show when there are already cities */}
            {toCities.length > 0 && toCities.length < 6 && (
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-1"></div>
                <div className="sm:col-span-8">
                  <button
                    onClick={addToCity}
                    className="flex items-center justify-center gap-2 px-4 py-3 w-full text-sm border-2 border-dashed border-border hover:border-primary/50 rounded-lg transition-colors text-secondary hover:text-primary focus:ring-2 focus:ring-primary focus:border-transparent"
                    aria-label="Add another location"
                  >
                    <Plus className="h-4 w-4" />
                    Add another location
                  </button>
                </div>
                <div className="sm:col-span-2"></div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-border">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-4 py-3 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors focus:ring-2 focus:ring-primary"
            aria-label="Copy shareable link"
          >
            {copySuccess ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="hidden sm:inline">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="hidden sm:inline">Copy Link</span>
              </>
            )}
          </button>
          
          <button
            onClick={() => setIs24Hour(!is24Hour)}
            className="flex items-center gap-2 px-4 py-3 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors focus:ring-2 focus:ring-primary"
            aria-label={`Switch to ${is24Hour ? '12' : '24'} hour format`}
          >
            <Clock className="h-4 w-4" />
            <span>{is24Hour ? '12h' : '24h'}</span>
          </button>
          
          {toCities.length === 1 && (
            <button
              onClick={handleSwapCities}
              className="flex items-center gap-2 px-4 py-3 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors sm:ml-auto focus:ring-2 focus:ring-primary"
              aria-label="Swap from and to cities"
            >
              <RefreshCw className="h-4 w-4" />
              <span className="hidden sm:inline">Swap</span>
            </button>
          )}
        </div>

        {/* Summary Bar */}
        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
          <div className="text-sm flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="font-medium">{fromCity.name}:</span> 
              <span className="font-mono">{formatTime(selectedTime, is24Hour)}</span>
              {results.length > 0 && <span className="text-secondary">→</span>}
            </div>
            {results.length === 0 ? (
              <div className="text-secondary text-xs">
                Select a destination to convert time
              </div>
            ) : (
              results.map((result, index) => (
                <div key={result.city.id} className="flex items-center gap-2">
                  <span className="font-medium">{result.city.name}:</span> 
                  <span className={cn(
                    "font-mono px-2 py-1 rounded text-xs whitespace-nowrap",
                    result.isGoodTimeToCall 
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
                  )}>
                    {formatTime(result.time, is24Hour)}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
