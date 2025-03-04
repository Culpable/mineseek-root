/**
 * Site-wide image configuration
 * This file contains paths to important site images used across the application
 */

export const siteImages = {
  // Featured image path for Open Graph and social sharing
  // Using the absolute URL for consistency with organization schema
  featured: 'https://mineseek.com.au/logos/mine-seek-ai-exploration.png',
} as const

export type SiteImages = typeof siteImages 