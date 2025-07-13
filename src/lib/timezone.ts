import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz'
import { addHours, isWeekend } from 'date-fns'
import citiesData from '@/data/cities.json'

export interface City {
  id: string
  name: string
  country: string
  timezone: string
  coordinates: {
    lat: number
    lng: number
  }
  population?: number
  isCapital?: boolean
}

export interface TimezoneConversion {
  fromCity: City
  toCity: City
  fromTime: Date
  toTime: Date
  isGoodTimeToCall?: boolean
  suggestedTimes?: Date[]
}

export interface PopularPair {
  from: string
  to: string
  slug: string
  searchVolume?: number
}

// PERFORMANCE FIX: Move timezone mapping outside function (created only once)
const TIMEZONE_MAP: Record<string, { standard: string; daylight: string }> = {
  // North America
  'America/New_York': { standard: 'EST', daylight: 'EDT' },
  'America/Los_Angeles': { standard: 'PST', daylight: 'PDT' },
  'America/Chicago': { standard: 'CST', daylight: 'CDT' },
  'America/Denver': { standard: 'MST', daylight: 'MDT' },
  'America/Phoenix': { standard: 'MST', daylight: 'MST' }, // Arizona doesn't observe DST
  'America/Vancouver': { standard: 'PST', daylight: 'PDT' },
  'America/Toronto': { standard: 'EST', daylight: 'EDT' },
  'America/Edmonton': { standard: 'MST', daylight: 'MDT' },
  'America/Mexico_City': { standard: 'CST', daylight: 'CDT' },
  'America/Anchorage': { standard: 'AKST', daylight: 'AKDT' },
  'Pacific/Honolulu': { standard: 'HST', daylight: 'HST' }, // Hawaii doesn't observe DST
  
  // South America
  'America/Sao_Paulo': { standard: 'BRT', daylight: 'BRST' },
  'America/Argentina/Buenos_Aires': { standard: 'ART', daylight: 'ART' },
  'America/Santiago': { standard: 'CLT', daylight: 'CLST' },
  'America/Lima': { standard: 'PET', daylight: 'PET' },
  'America/Bogota': { standard: 'COT', daylight: 'COT' },
  'America/Caracas': { standard: 'VET', daylight: 'VET' },
  
  // Europe
  'Europe/London': { standard: 'GMT', daylight: 'BST' },
  'Europe/Paris': { standard: 'CET', daylight: 'CEST' },
  'Europe/Berlin': { standard: 'CET', daylight: 'CEST' },
  'Europe/Rome': { standard: 'CET', daylight: 'CEST' },
  'Europe/Madrid': { standard: 'CET', daylight: 'CEST' },
  'Europe/Amsterdam': { standard: 'CET', daylight: 'CEST' },
  'Europe/Brussels': { standard: 'CET', daylight: 'CEST' },
  'Europe/Vienna': { standard: 'CET', daylight: 'CEST' },
  'Europe/Zurich': { standard: 'CET', daylight: 'CEST' },
  'Europe/Stockholm': { standard: 'CET', daylight: 'CEST' },
  'Europe/Copenhagen': { standard: 'CET', daylight: 'CEST' },
  'Europe/Oslo': { standard: 'CET', daylight: 'CEST' },
  'Europe/Helsinki': { standard: 'EET', daylight: 'EEST' },
  'Atlantic/Reykjavik': { standard: 'GMT', daylight: 'GMT' }, // Iceland doesn't observe DST
  'Europe/Dublin': { standard: 'GMT', daylight: 'IST' },
  'Europe/Lisbon': { standard: 'WET', daylight: 'WEST' },
  'Europe/Warsaw': { standard: 'CET', daylight: 'CEST' },
  'Europe/Prague': { standard: 'CET', daylight: 'CEST' },
  'Europe/Budapest': { standard: 'CET', daylight: 'CEST' },
  'Europe/Bucharest': { standard: 'EET', daylight: 'EEST' },
  'Europe/Sofia': { standard: 'EET', daylight: 'EEST' },
  'Europe/Athens': { standard: 'EET', daylight: 'EEST' },
  'Europe/Moscow': { standard: 'MSK', daylight: 'MSK' }, // Russia doesn't observe DST
  'Europe/Istanbul': { standard: 'TRT', daylight: 'TRT' },
  'Europe/Kiev': { standard: 'EET', daylight: 'EEST' },
  'Europe/Zagreb': { standard: 'CET', daylight: 'CEST' },
  'Europe/Belgrade': { standard: 'CET', daylight: 'CEST' },
  'Europe/Ljubljana': { standard: 'CET', daylight: 'CEST' },
  
  // Africa
  'Africa/Cairo': { standard: 'EET', daylight: 'EET' },
  'Africa/Casablanca': { standard: 'WET', daylight: 'WEST' },
  'Africa/Tunis': { standard: 'CET', daylight: 'CET' },
  'Africa/Algiers': { standard: 'CET', daylight: 'CET' },
  'Africa/Lagos': { standard: 'WAT', daylight: 'WAT' },
  'Africa/Accra': { standard: 'GMT', daylight: 'GMT' },
  'Africa/Nairobi': { standard: 'EAT', daylight: 'EAT' },
  'Africa/Addis_Ababa': { standard: 'EAT', daylight: 'EAT' },
  'Africa/Johannesburg': { standard: 'SAST', daylight: 'SAST' },
  
  // Middle East
  'Asia/Riyadh': { standard: 'AST', daylight: 'AST' },
  'Asia/Dubai': { standard: 'GST', daylight: 'GST' },
  'Asia/Qatar': { standard: 'AST', daylight: 'AST' },
  'Asia/Kuwait': { standard: 'AST', daylight: 'AST' },
  'Asia/Bahrain': { standard: 'AST', daylight: 'AST' },
  'Asia/Muscat': { standard: 'GST', daylight: 'GST' },
  'Asia/Tehran': { standard: 'IRST', daylight: 'IRDT' },
  'Asia/Baghdad': { standard: 'AST', daylight: 'AST' },
  'Asia/Damascus': { standard: 'EET', daylight: 'EEST' },
  'Asia/Beirut': { standard: 'EET', daylight: 'EEST' },
  'Asia/Amman': { standard: 'EET', daylight: 'EEST' },
  'Asia/Jerusalem': { standard: 'IST', daylight: 'IDT' },
  
  // South Asia
  'Asia/Kolkata': { standard: 'IST', daylight: 'IST' },
  'Asia/Karachi': { standard: 'PKT', daylight: 'PKT' },
  'Asia/Dhaka': { standard: 'BST', daylight: 'BST' },
  'Asia/Colombo': { standard: 'IST', daylight: 'IST' },
  'Asia/Kabul': { standard: 'AFT', daylight: 'AFT' },
  'Asia/Kathmandu': { standard: 'NPT', daylight: 'NPT' },
  'Asia/Thimphu': { standard: 'BTT', daylight: 'BTT' },
  
  // Southeast Asia
  'Asia/Bangkok': { standard: 'ICT', daylight: 'ICT' },
  'Asia/Kuala_Lumpur': { standard: 'MYT', daylight: 'MYT' },
  'Asia/Singapore': { standard: 'SGT', daylight: 'SGT' },
  'Asia/Jakarta': { standard: 'WIB', daylight: 'WIB' },
  'Asia/Ho_Chi_Minh': { standard: 'ICT', daylight: 'ICT' },
  'Asia/Phnom_Penh': { standard: 'ICT', daylight: 'ICT' },
  'Asia/Vientiane': { standard: 'ICT', daylight: 'ICT' },
  'Asia/Yangon': { standard: 'MMT', daylight: 'MMT' },
  'Asia/Manila': { standard: 'PHT', daylight: 'PHT' },
  
  // East Asia
  'Asia/Hong_Kong': { standard: 'HKT', daylight: 'HKT' },
  'Asia/Macau': { standard: 'CST', daylight: 'CST' },
  'Asia/Taipei': { standard: 'CST', daylight: 'CST' },
  'Asia/Shanghai': { standard: 'CST', daylight: 'CST' },
  'Asia/Tokyo': { standard: 'JST', daylight: 'JST' },
  'Asia/Seoul': { standard: 'KST', daylight: 'KST' },
  'Asia/Pyongyang': { standard: 'KST', daylight: 'KST' },
  
  // Australia & Pacific
  'Australia/Sydney': { standard: 'AEST', daylight: 'AEDT' },
  'Australia/Melbourne': { standard: 'AEST', daylight: 'AEDT' },
  'Australia/Brisbane': { standard: 'AEST', daylight: 'AEST' }, // Queensland doesn't observe DST
  'Australia/Perth': { standard: 'AWST', daylight: 'AWST' },
  'Australia/Adelaide': { standard: 'ACST', daylight: 'ACDT' },
  'Australia/Darwin': { standard: 'ACST', daylight: 'ACST' },
  'Pacific/Auckland': { standard: 'NZST', daylight: 'NZDT' },
  'Pacific/Fiji': { standard: 'FJT', daylight: 'FJST' },
  'Pacific/Port_Moresby': { standard: 'PGT', daylight: 'PGT' },
}

// PERFORMANCE FIX: Add caching for timezone abbreviations
const timezoneAbbrevCache = new Map<string, string>()

// PERFORMANCE FIX: Add caching for conversion results
const conversionCache = new Map<string, TimezoneConversion>()

// Memoized cities data
let memoizedCities: City[] | null = null

export function getCities(): City[] {
  if (!memoizedCities) {
    memoizedCities = citiesData as City[]
  }
  return memoizedCities
}

export function getCityBySlug(slug: string): City | undefined {
  return getCities().find(city => city.id === slug)
}

export function getCityByName(name: string): City | undefined {
  return getCities().find(city => 
    city.name.toLowerCase() === name.toLowerCase() ||
    city.name.toLowerCase().includes(name.toLowerCase())
  )
}

// PERFORMANCE FIX: Optimized conversion with caching
export function convertTimeBetweenCities(
  fromCity: City,
  toCity: City,
  time: Date
): TimezoneConversion {
  // Check cache first
  const cacheKey = `${fromCity.id}-${toCity.id}-${time.getHours()}-${time.getMinutes()}`
  const cached = conversionCache.get(cacheKey)
  if (cached) return cached
  
  // Convert local time to UTC, then to target timezone
  const utcTime = zonedTimeToUtc(time, fromCity.timezone)
  const targetTime = utcToZonedTime(utcTime, toCity.timezone)
  
  const conversion: TimezoneConversion = {
    fromCity,
    toCity,
    fromTime: time,
    toTime: targetTime,
    isGoodTimeToCall: isGoodTimeToCall(targetTime),
    // Remove expensive suggestedTimes for better performance
    suggestedTimes: []
  }
  
  // Cache the result
  conversionCache.set(cacheKey, conversion)
  
  // Cleanup old cache entries (keep only last 100)
  if (conversionCache.size > 100) {
    const firstKey = conversionCache.keys().next().value
    if (firstKey) {
      conversionCache.delete(firstKey)
    }
  }
  
  return conversion
}

function isGoodTimeToCall(time: Date): boolean {
  const hour = time.getHours()
  const isWeekday = !isWeekend(time)
  
  // Consider 9 AM - 6 PM on weekdays as good times
  return isWeekday && hour >= 9 && hour <= 18
}

// Removed getSuggestedCallTimes for performance - can be added back later if needed

export function getCurrentTimeInCity(city: City): Date {
  return utcToZonedTime(new Date(), city.timezone)
}

// PERFORMANCE FIX: Optimized timezone abbreviation with caching
export function getTimezoneAbbreviation(city: City): string {
  // Check cache first
  const cacheKey = `${city.timezone}-${new Date().getMonth()}`
  const cached = timezoneAbbrevCache.get(cacheKey)
  if (cached) return cached
  
  const timezoneConfig = TIMEZONE_MAP[city.timezone]
  if (!timezoneConfig) {
    // Fallback to UTC offset for unknown timezones
    const fallback = getTimezoneOffset(city)
    timezoneAbbrevCache.set(cacheKey, fallback)
    return fallback
  }
  
  // Check if we're in daylight saving time
  const isDST = isDaylightSavingTime(new Date(), city.timezone)
  const result = isDST ? timezoneConfig.daylight : timezoneConfig.standard
  
  // Cache the result
  timezoneAbbrevCache.set(cacheKey, result)
  return result
}

function isDaylightSavingTime(date: Date, timezone: string): boolean {
  try {
    // Quick check for timezones that don't use DST
    const noDSTTimezones = new Set([
      'America/Phoenix', 'Asia/Tokyo', 'Asia/Seoul', 'Asia/Hong_Kong',
      'Asia/Shanghai', 'Asia/Singapore', 'Asia/Bangkok', 'Asia/Dubai',
      'Asia/Kolkata', 'Australia/Brisbane', 'Australia/Perth',
      'Europe/Moscow', 'Europe/Istanbul'
    ])
    
    if (noDSTTimezones.has(timezone)) {
      return false
    }
    
    // Get the timezone offset for January (standard time) and July (potential DST)
    const jan = new Date(date.getFullYear(), 0, 1)
    const jul = new Date(date.getFullYear(), 6, 1)
    
    const janOffset = getTimezoneOffsetMinutes(jan, timezone)
    const julOffset = getTimezoneOffsetMinutes(jul, timezone)
    const currentOffset = getTimezoneOffsetMinutes(date, timezone)
    
    // If current offset is different from the maximum offset (standard time), we're in DST
    const standardOffset = Math.max(janOffset, julOffset)
    return currentOffset < standardOffset
  } catch {
    return false
  }
}

function getTimezoneOffsetMinutes(date: Date, timezone: string): number {
  try {
    const utc = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
    const local = new Date(date.toLocaleString('en-US', { timeZone: timezone }))
    return (utc.getTime() - local.getTime()) / (1000 * 60)
  } catch {
    return 0
  }
}

export function getTimezoneOffset(city: City): string {
  const now = new Date()
  const timeInCity = utcToZonedTime(now, city.timezone)
  
  return format(timeInCity, 'xxx', { timeZone: city.timezone })
}

// PERFORMANCE FIX: Optimized search with caching
const searchCache = new Map<string, City[]>()

export function searchCities(query: string): City[] {
  if (!query.trim()) return []
  
  const normalizedQuery = query.toLowerCase().trim()
  
  // Check cache first
  const cached = searchCache.get(normalizedQuery)
  if (cached) return cached
  
  const cities = getCities()
  
  const results = cities.filter(city => {
    // Search by city name (most common)
    if (city.name.toLowerCase().includes(normalizedQuery)) return true
    
    // Search by country
    if (city.country.toLowerCase().includes(normalizedQuery)) return true
    
    // Search by city ID
    if (city.id.includes(normalizedQuery)) return true
    
    // Search by timezone abbreviation
    const timezoneAbbr = getTimezoneAbbreviation(city).toLowerCase()
    if (timezoneAbbr.includes(normalizedQuery)) return true
    
    // Search by timezone name parts (e.g., "america", "new_york")
    const timezoneParts = city.timezone.toLowerCase().split('/')
    return timezoneParts.some(part => 
      part.replace('_', ' ').includes(normalizedQuery) || 
      part.replace('_', '').includes(normalizedQuery)
    )
  }).slice(0, 20) // Limit results for better performance
  
  // Cache the results
  searchCache.set(normalizedQuery, results)
  
  // Cleanup old cache entries
  if (searchCache.size > 100) {
    const firstKey = searchCache.keys().next().value
    if (firstKey) {
      searchCache.delete(firstKey)
    }
  }
  
  return results
}

// Memoized popular cities
let memoizedPopularCities: City[] | null = null

export function getPopularCities(): City[] {
  if (memoizedPopularCities) {
    return memoizedPopularCities
  }
  
  const popularIds = [
    // Major business hubs
    'new-york', 'london', 'tokyo', 'singapore', 'hong-kong',
    // European capitals
    'paris', 'berlin', 'amsterdam', 'zurich', 'stockholm',
    // Central/Eastern Europe
    'zagreb', 'belgrade', 'ljubljana', 'vienna', 'prague', 'warsaw',
    // Asia-Pacific
    'sydney', 'mumbai', 'bangkok', 'seoul', 'shanghai',
    // North America
    'los-angeles', 'chicago', 'toronto', 'vancouver',
    // Middle East & Africa
    'dubai', 'cairo', 'johannesburg',
    // South America
    'sao-paulo', 'buenos-aires'
  ]
  
  memoizedPopularCities = popularIds
    .map(id => getCityBySlug(id))
    .filter(Boolean) as City[]
  
  return memoizedPopularCities
}

export function calculateTimeDifference(city1: City, city2: City): number {
  const now = new Date()
  const time1 = utcToZonedTime(now, city1.timezone)
  const time2 = utcToZonedTime(now, city2.timezone)
  
  return (time2.getHours() - time1.getHours())
}

// PERFORMANCE FIX: Add cache clearing utility
export function clearTimezoneCaches(): void {
  timezoneAbbrevCache.clear()
  conversionCache.clear()
  searchCache.clear()
}
