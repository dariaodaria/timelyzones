// PERFORMANCE FIX: Performance monitoring utilities
// Add this file to monitor the performance improvements

// Performance measurement decorator
export function measurePerformance(name: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const start = performance.now()
      const result = originalMethod.apply(this, args)
      const end = performance.now()
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`${name}: ${end - start}ms`)
      }
      
      return result
    }

    return descriptor
  }
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(later, wait)
  }
}

// Memory usage tracker
export function trackMemoryUsage(label: string) {
  if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
    const memInfo = (performance as any).memory
    console.log(`${label} Memory:`, {
      used: `${Math.round(memInfo.usedJSHeapSize / 1024 / 1024)} MB`,
      total: `${Math.round(memInfo.totalJSHeapSize / 1024 / 1024)} MB`,
      limit: `${Math.round(memInfo.jsHeapSizeLimit / 1024 / 1024)} MB`,
    })
  }
}

// Performance observer for Core Web Vitals
export function initPerformanceObserver() {
  if (typeof window === 'undefined') return
  
  // Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
        })
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    } catch (e) {
      console.warn('Performance Observer not supported')
    }
  }
}

// Cache performance monitor
export class CachePerformanceMonitor {
  private hits = 0
  private misses = 0
  private name: string
  
  constructor(name: string) {
    this.name = name
  }
  
  recordHit() {
    this.hits++
  }
  
  recordMiss() {
    this.misses++
  }
  
  getStats() {
    const total = this.hits + this.misses
    const hitRate = total > 0 ? (this.hits / total) * 100 : 0
    
    return {
      name: this.name,
      hits: this.hits,
      misses: this.misses,
      total,
      hitRate: hitRate.toFixed(2) + '%'
    }
  }
  
  logStats() {
    if (process.env.NODE_ENV === 'development') {
      console.log(`${this.name} Cache Stats:`, this.getStats())
    }
  }
  
  reset() {
    this.hits = 0
    this.misses = 0
  }
}

// Export performance utilities
export const performanceUtils = {
  measurePerformance,
  debounce,
  trackMemoryUsage,
  initPerformanceObserver,
  CachePerformanceMonitor
}
