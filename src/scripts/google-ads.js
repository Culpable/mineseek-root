/**
 * Google Ads Script
 * This file contains the Google Ads tracking script for conversion tracking
 * and remarketing functionality across the site.
 */

export const googleAdsScript = {
  src: "https://www.googletagmanager.com/gtag/js?id=AW-16916322150",
  configScript: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-16916322150');
  `
}; 