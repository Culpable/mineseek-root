/**
 * Organization Schema.org JSON-LD markup
 * This file contains structured data that helps search engines understand the organisation
 */

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mine Seek",
    "alternateName": ["Mine Seek: An AI-Powered Platform for Mining Exploration", "MineSeek"],
    "url": "https://mineseek.com.au/",
    "logo": "https://mineseek.com.au/logos/mine-seek.png",
    "image": "https://mineseek.com.au/logos/mine-seek-ai-exploration.png",
    "description": "Mine Seek accelerates your path from data to discovery with AI-powered exploration agents. Custom made for Australian mining exploration teams.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "PO Box 155",
        "addressLocality": "Northlands",
        "postOfficeBoxNumber": "155",
        "postalCode": "6905",
        "addressRegion": "WA",
        "addressCountry": "AU"
    }
}; 