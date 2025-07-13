"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { Search, ChevronDown, X, Clock } from 'lucide-react'
import { searchCities, getTimezoneAbbreviation, getPopularCities } from '@/lib/timezone'
import { cn } from '@/lib/utils'
import type { City } from '@/lib/timezone'
import React from 'react'

interface CitySearchDropdownProps {
  value: City | null
  onChange: (city: City) => void
  placeholder?: string
  excludeCities?: City[]
  className?: string
  emptyState?: boolean
}

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

export function CitySearchDropdown({ 
  value, 
  onChange, 
  placeholder = "Search cities...",
  excludeCities = [],
  className,
  emptyState = false
}: CitySearchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const debouncedSearchQuery = useDebounce(searchQuery, 200)

  const popularCities = useMemo(() => {
    return getPopularCities()
      .filter(city => !excludeCities.some(excluded => excluded.id === city.id))
      .slice(0, 12)
  }, [excludeCities])

  const filteredCities = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return popularCities
    }
    
    return searchCities(debouncedSearchQuery)
      .filter(city => !excludeCities.some(excluded => excluded.id === city.id))
      .slice(0, 20)
  }, [debouncedSearchQuery, excludeCities, popularCities])

  useEffect(() => {
    setHighlightedIndex(0)
  }, [filteredCities])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault()
        setIsOpen(true)
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => 
          prev < filteredCities.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0)
        break
      case 'Enter':
        e.preventDefault()
        if (filteredCities[highlightedIndex]) {
          handleCitySelect(filteredCities[highlightedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSearchQuery('')
        break
    }
  }, [isOpen, filteredCities, highlightedIndex])

  const handleCitySelect = useCallback((city: City) => {
    onChange(city)
    setIsOpen(false)
    setSearchQuery('')
    setHighlightedIndex(0)
  }, [onChange])

  const handleInputFocus = useCallback(() => {
    setIsOpen(true)
    if (inputRef.current) {
      inputRef.current.select()
    }
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
    inputRef.current?.focus()
  }, [])

  const timezoneAbbreviation = useMemo(() => {
    return value ? getTimezoneAbbreviation(value) : null
  }, [value])

  return (
    <div ref={dropdownRef} className={cn("relative w-full", className)}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 pr-10 border border-border rounded-lg bg-background hover:bg-muted/50 focus:ring-2 focus:ring-primary/20 focus:border-primary text-left transition-all relative"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        type="button"
      >
        <span className={cn(
          "block truncate font-medium",
          !value && "text-secondary"
        )}>
          {value ? `${value.name}, ${value.country}` : (placeholder || "Search for a city...")}
        </span>
        <ChevronDown className={cn(
          "absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary transition-transform",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Timezone Badge */}
      {value && timezoneAbbreviation && (
        <div className="px-3 mt-1">
          <span className="text-xs text-secondary font-medium bg-muted px-2 py-1 rounded">
            {timezoneAbbreviation}
          </span>
        </div>
      )}

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-800 border border-border rounded-lg shadow-lg max-h-96 overflow-hidden">
          {/* Search Input */}
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                onFocus={handleInputFocus}
                placeholder={placeholder}
                className="w-full pl-9 pr-8 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                autoComplete="off"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded transition-colors"
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="max-h-80 overflow-y-auto">
            {!searchQuery && (
              <div className="px-3 py-2 text-sm font-medium text-secondary bg-muted/30 border-b border-border">
                Popular Cities & Timezones
              </div>
            )}
            
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <CityOption
                  key={city.id}
                  city={city}
                  isHighlighted={index === highlightedIndex}
                  isSelected={value?.id === city.id}
                  onClick={() => handleCitySelect(city)}
                />
              ))
            ) : (
              <div className="px-3 py-8 text-center text-secondary">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-50" />
                <div className="font-medium mb-1">No cities found</div>
                <div className="text-xs">Try searching for a city name or timezone like "EST", "PST", "GMT"</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const CityOption = React.memo<{
  city: City
  isHighlighted: boolean
  isSelected: boolean
  onClick: () => void
}>(({ city, isHighlighted, isSelected, onClick }) => {
  const abbreviation = useMemo(() => getTimezoneAbbreviation(city), [city])
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full px-3 py-3 text-left hover:bg-muted focus:bg-muted transition-colors flex items-center justify-between group",
        isHighlighted && "bg-muted"
      )}
      role="option"
      aria-selected={isSelected}
    >
      <div>
        <div className="font-medium">
          {city.name}
        </div>
        <div className="text-sm text-secondary">
          {city.country}
        </div>
      </div>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
          {abbreviation}
        </span>
        <Clock className="h-4 w-4 text-secondary" />
      </div>
    </button>
  )
})

CityOption.displayName = 'CityOption'
