import { writeFileSync } from 'fs'
import { globby } from 'globby'

// Define base URL for your site
const SITE_URL = 'https://mineseek.com.au'

// Define core routes that should always be included
const CORE_ROUTES = [
  '/',              // Homepage
  '/pricing/',
  '/company/',
  '/contact/',
]

// Define routes that should be excluded from the sitemap
const EXCLUDED_ROUTES = [
  '/login/',
]

// Generate sitemap XML content
function generateSitemapXML(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url === SITE_URL ? 'daily' : 'monthly'}</changefreq>
    <priority>${url === SITE_URL ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`
}

// Generate sitemap
async function generateSitemap() {
  try {
    // Create URLs for core routes
    const coreUrls = CORE_ROUTES.map(route => {
      // For homepage, don't add trailing slash to the base URL
      return route === '/' ? SITE_URL : `${SITE_URL}${route}`
    })

    // Get all .jsx files in the pages directory
    const pages = await globby([
      'src/app/**/page.jsx',
      '!src/app/api',
      '!src/app/_*',
      '!src/app/**/not-found.jsx',
      '!src/app/**/error.jsx',
      '!src/app/**/loading.jsx',
      '!src/app/**/layout.jsx',
    ])

    // Transform file paths into URLs
    const dynamicUrls = pages
      .map(page => {
        const path = page
          .replace('src/app/', '')
          .replace('/page.jsx', '')
          .replace('page.jsx', '')
        
        // Ensure path ends with a trailing slash
        const formattedPath = path === '' ? '/' : `/${path}/`
        
        // Skip if it's in the excluded routes
        if (EXCLUDED_ROUTES.includes(formattedPath)) {
          return null
        }
        
        // Skip if it's already in core routes
        if (CORE_ROUTES.includes(formattedPath)) {
          return null
        }
        
        return path === '' ? SITE_URL : `${SITE_URL}${formattedPath}`
      })
      .filter(Boolean)

    // Combine core and dynamic URLs, removing duplicates
    const allUrls = [...new Set([...coreUrls, ...dynamicUrls])]

    // Generate sitemap content
    const sitemap = generateSitemapXML(allUrls)

    // Write sitemap to public directory
    writeFileSync('public/sitemap.xml', sitemap)
    console.log('✅ Sitemap generated successfully')
    console.log('📍 URLs included:', allUrls.length)
    console.log(allUrls)

  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
  }
}

// Execute the function
generateSitemap() 