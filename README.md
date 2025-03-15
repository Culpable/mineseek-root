# Mine Seek

Next.js website with App Router and Tailwind CSS, deployed at [mineseek.com.au](https://mineseek.com.au).

## Prerequisites

### Node Version Manager (nvm)
Node Version Manager (nvm) is recommended for installing and managing multiple Node.js versions.

Installation on macOS:
```bash
brew install nvm
```

Add to shell configuration (~/.zshrc or ~/.bash_profile):
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

Restart the terminal or run:
```bash
source ~/.zshrc  # or source ~/.bash_profile
```

### Node.js
Required version: v22.11.0
- Version specified in `.nvmrc`
- While in project directory, install correct version: `nvm install` and switch to installed version: `nvm use`

## Getting started

1. Clone the repository
2. Set Node version:
   ```bash
   nvm use
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Access [http://localhost:3000](http://localhost:3000)

## Deployment

Deployment occurs automatically via GitHub Actions (defined in `.github/workflows/deploy.yml`). No manual deployment steps required.

To trigger automatic deployment, simply push to the main branch:
```bash
git push origin main
```

**Automated deployment process:**
1. GitHub Actions runner starts on Ubuntu latest
2. Sets up Node.js environment (v20.10.0)
3. Installs dependencies using `npm ci`
4. Builds static site using `npm run build`
5. Deploys built files to `gh-pages` branch using `peaceiris/actions-gh-pages`
6. Configures custom domain (mineseek.com.au) via CNAME

**Important notes:**
- The `gh-pages` branch is managed automatically - DO NOT modify it directly
- All changes should be made to the main branch only
- Deployment status and logs available in the repository's Actions tab

## Project structure

Key files and directories:

```
src/
├── components/           # Reusable components
│   ├── navbar.jsx       # Main navigation and mobile menu
│   ├── footer.jsx       # Footer structure and CTA
│   ├── logo.jsx         # Company logo and branding
│   ├── text.jsx         # Heading and text components
│   ├── testimonials.jsx # Customer testimonial carousel
│   ├── bento-card.jsx   # Feature card layouts
│   └── button.jsx       # Button styles and variants
├── app/                 # Next.js App Router pages
│   ├── page.jsx         # Homepage with features
│   ├── company/         # Company page with team
│   ├── pricing/         # Pricing plans
│   │   ├── page.jsx     # Server component with metadata
│   │   └── pricing-client.jsx # Interactive pricing UI
│   └── login/           # Authentication page
└── styles/
    └── tailwind.css     # Tailwind configuration
```

### Temporarily disabled sections
Currently disabled but preserved in `_disabled_pages/`:
- `/blog`: Blog functionality
- `/studio`: Sanity Studio

## Development

The site auto-updates when files in `/src` are modified.

### Sitemap Generation

The site uses a custom script to generate the sitemap.xml file. To generate or update the sitemap:

```bash
node src/scripts/generate-sitemap.js
```

This script:
- Creates an XML sitemap based on the site's pages
- Automatically adds trailing slashes to URLs (except homepage)
- Excludes specified routes (e.g., login page)
- Outputs to `public/sitemap.xml`
- Should be run before deployment when adding new pages

### Component Architecture
- Server Components are the default (no 'use client' directive needed)
- Client Components should be used only when necessary for:
  - Testimonial carousel
  - Mobile navigation
  - Animated numbers
  - Interactive pricing tables
  - URL parameter handling
- Interactive components should be split into separate files
- Client Components must be marked with 'use client' directive
- Metadata should remain in server components
- Example structure:
  ```
  components/
  ├── testimonials.jsx     # Client Component (carousel)
  ├── navbar.jsx          # Mixed (mobile menu is client)
  ├── animated-number.jsx # Client Component
  └── button.jsx         # Server Component
  ```

### Interactive Features with URL Parameters

The site uses URL parameters for interactive features, particularly in the pricing page. This approach:
- Maintains static site generation capability
- Enables direct linking to specific states
- Works with browser history

Example implementation in pricing:
```javascript
// pricing/page.jsx - Server Component
export const metadata = {
  title: 'Pricing',
  description: '...'
}

export default function Pricing() {
  return <PricingClient />
}

// pricing/pricing-client.jsx - Client Component
'use client'

export function PricingClient() {
  const searchParams = useSearchParams()
  const selectedSlug = searchParams.get('tier') || 'starter'
  const selectedTier = tiers.find(tier => tier.slug === selectedSlug) || tiers[0]
  // ... render components
}
```

### Pricing Page Structure

The pricing page is split into two components:
1. `page.jsx`: Server Component
   - Handles metadata
   - Minimal server-side code

2. `pricing-client.jsx`: Client Component
   - Handles URL parameters
   - Interactive pricing table
   - Mobile-responsive design
   - Tier selection via URL: `/pricing?tier=starter`

#### Modifying Pricing Tiers

The pricing configuration is stored in `pricing-client.jsx`:
```javascript
const tiers = [
  {
    name: 'Starter',
    slug: 'starter',
    description: '...',
    priceMonthly: 99,
    highlights: [...],
    features: [
      {
        section: 'Features',
        name: 'Feature Name',
        value: true | false | number | string
      }
    ]
  }
]
```

To add or modify tiers:
1. Edit the `tiers` array in `pricing-client.jsx`
2. Ensure each tier has a unique `slug`
3. Include all required properties
4. Features can have boolean, numeric, or string values
5. Group features by sections for the comparison table

## Documentation

- [Next.js](https://nextjs.org/docs) - App Router and features
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling utilities
- [Tailwind UI](https://tailwindui.com) - Component patterns
- [Headless UI](https://headlessui.dev) - Accessible components
