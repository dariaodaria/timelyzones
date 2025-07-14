import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://timelyzones.com'
  
  // Current date for lastModified
  const now = new Date()
  
  // Static timezone conversion pages
  const timezonePages = [
    'london-to-new-york',
    'london-to-tokyo', 
    'los-angeles-to-sydney',
    'new-york-to-london',
    'new-york-to-los-angeles',
    'new-york-to-paris',
    'new-york-to-tokyo',
    'paris-to-new-york',
    'singapore-to-london',
    'sydney-to-london',
    'tokyo-to-los-angeles'
  ]
  
  // Popular timezone combinations (additional SEO pages)
  const popularCombinations = [
    'est-to-pst',
    'est-to-cet', 
    'pst-to-est',
    'cet-to-est',
    'gmt-to-est',
    'est-to-gmt',
    'cst-to-est',
    'est-to-cst',
    'jst-to-est',
    'est-to-jst',
    'aest-to-est',
    'est-to-aest'
  ]
  
  // Build sitemap entries
  const sitemap: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    
    // Static timezone conversion pages - high priority
    ...timezonePages.map((page) => ({
      url: `${baseUrl}/${page}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    
    // Popular timezone combinations - medium priority
    ...popularCombinations.map((combo) => ({
      url: `${baseUrl}/${combo}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
  
  return sitemap
}
