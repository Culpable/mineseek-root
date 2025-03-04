import { siteImages } from './images'

/**
 * Site-wide metadata configuration
 * This file defines metadata properties used across the site for SEO and social sharing
 */
export const siteMetadata = {
  title: 'Mine Seek - AI-Powered Mining Exploration',
  description: 'Mine Seek accelerates your path from data to discovery with AI-powered exploration agents. Custom made for Australian mining exploration teams.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mineseek.com.au',
  // Using the absolute URL directly from siteImages
  ogImage: siteImages.featured,
  twitter: {
    cardType: 'summary_large_image'
  }
} 