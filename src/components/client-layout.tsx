"use client"

import React from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { ErrorBoundary } from '@/components/error-boundary'
import { GoogleAnalytics, PerformanceMonitor } from '@/components/analytics'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <span className="text-primary">Timely</span>Zones
            </a>
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
      
      <footer className="border-t border-border mt-16 bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">TimelyZones</h3>
              <p className="text-sm text-secondary">
                Fast, modern time zone converter built for distributed teams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="text-sm text-secondary space-y-1">
                <li>Instant time conversion</li>
                <li>Smart call suggestions</li>
                <li>Mobile-friendly design</li>
                <li>Real-time updates</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 pt-6 text-center">
            <p className="text-sm text-secondary">
              &copy; 2025 TimelyZones. Built for speed and simplicity.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-BL6LMLT710" />
      <PerformanceMonitor />
    </ErrorBoundary>
  )
}
