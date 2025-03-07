import { writeFileSync } from 'fs'
import { globby } from 'globby'

// Define base URL for your site
const SITE_URL = 'https://mineseek.com.au'

// Define core routes that should always be included
const CORE_ROUTES = [
  '',              // Homepage
  '/pricing',
  '/company',
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
    const coreUrls = CORE_ROUTES.map(route => `${SITE_URL}${route}`)

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
        
        // Skip if it's already in core routes
        if (CORE_ROUTES.includes(`/${path}`)) {
          return null
        }
        
        return path === '' ? SITE_URL : `${SITE_URL}/${path}`
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