"use client"

import { useState, useEffect, useCallback, useMemo } from 'react'
import { getCurrentTimeInCity, getTimezoneAbbreviation, getPopularCities } from '@/lib/timezone'
import { formatTime } from '@/lib/utils'
import type { City } from '@/lib/timezone'
import React from 'react'

interface CityTimeData {
  city: City
  time: Date
  abbreviation: string
}

// PERFORMANCE FIX: Memoized clock card component
const ClockCard = React.memo<{
  data: CityTimeData
  is24Hour: boolean
}>(({ data, is24Hour }) => {
  const { city, time, abbreviation } = data
  
  return (
    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg border border-border hover:shadow-md transition-shadow">
      <div className="text-sm font-medium text-secondary mb-1">
        {city.name}
      </div>
      <div className="text-2xl font-bold font-mono mb-1">
        {formatTime(time, is24Hour)}
      </div>
      <div className="text-xs text-secondary">
        {abbreviation}
      </div>
      <div className="text-xs text-secondary mt-1">
        {city.country}
      </div>
    </div>
  )
})

ClockCard.displayName = 'ClockCard'

export function WorldClock() {
  const [is24Hour, setIs24Hour] = useState(false)
  const [currentTimes, setCurrentTimes] = useState<CityTimeData[]>([])
  
  // PERFORMANCE FIX: Memoized cities to avoid recalculation
  const cities = useMemo(() => getPopularCities().slice(0, 4), [])
  
  // PERFORMANCE FIX: Optimized time update function
  const updateTimes = useCallback(() => {
    const newTimes = cities.map(city => ({
      city,
      time: getCurrentTimeInCity(city),
      abbreviation: getTimezoneAbbreviation(city)
    }))
    
    setCurrentTimes(newTimes)
  }, [cities])

  // PERFORMANCE FIX: Reduced update frequency from 1s to 10s
  useEffect(() => {
    updateTimes()
    
    // Update every 10 seconds instead of every second for better performance
    // Most users don't need second-level precision for the world clock
    const interval = setInterval(updateTimes, 10000)

    return () => clearInterval(interval)
  }, [updateTimes])

  const toggleTimeFormat = useCallback(() => {
    setIs24Hour(prev => !prev)
  }, [])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Current Time Worldwide</h2>
        <button
          onClick={toggleTimeFormat}
          className="text-sm px-3 py-1 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
        >
          {is24Hour ? '12h' : '24h'}
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentTimes.map(timeData => (
          <ClockCard
            key={timeData.city.id}
            data={timeData}
            is24Hour={is24Hour}
          />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-secondary">
          Times update every 10 seconds • Click on time format to toggle 12h/24h
        </p>
      </div>
    </div>
  )
}
