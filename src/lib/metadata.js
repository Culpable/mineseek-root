import { siteImages } from './images'

/**
 * Site-wide metadata configuration
 * This file defines metadata properties used across the site for SEO and social sharing
 */
export const siteMetadata = {
  name: 'Mine Seek',
  title: 'Mine Seek: Accelerate Your Exploration with AI',
  description: 'Mine Seek accelerates your path from data to discovery with AI-powered exploration agents. Custom made for Australian mining exploration teams.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mineseek.com.au',
  // Using the absolute URL directly from siteImages
  ogImage: siteImages.featured,
  twitter: {
    cardType: 'summary_large_image'
  },
  locale: 'en-AU',
}

export const pageMetadata = {
  home: {
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  pricing: {
    title: 'Pricing',
    description:
      'Mining companies across Australia use Mine Seek to accelerate their exploration programmes. Book a demo today.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Ready to transform your mining exploration with AI? Contact us to see how we can accelerate your geological analysis and discovery process.',
  },
  login: {
    title: 'Login',
    description: 'Sign in to your Mine Seek account to continue.',
  },
  company: {
    title: 'Company',
    description:
      "We're on a mission to transform mining exploration by harnessing the power of AI and advanced data analysis.",
  },
  extractorGrid: {
    title: 'Extractor Grid Demo',
    description:
      "See how Mine Seek's Extractor Grid turns geological PDFs into clean, export-ready tables with evidence and confidence.",
  },
  egRedirect: {
    title: 'Extractor Grid Redirect',
    description:
      'Redirecting you to the Extractor Grid demo. Use the manual link if the redirect does not start.',
  },
}
