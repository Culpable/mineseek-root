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

### Key component locations
- Navigation: `src/components/navbar.jsx`
- Footer: `src/components/footer.jsx`
- Social links: `src/components/footer.jsx`
- Feature cards: `src/components/bento-card.jsx`

### Component Architecture
- Server Components are the default (no 'use client' directive needed)
- Client Components should be used only when necessary for:
  - Testimonial carousel
  - Mobile navigation
  - Animated numbers
  - Interactive pricing tables
- Interactive components should be split into separate files
- Client Components must be marked with 'use client' directive
- Example structure:
  ```
  components/
  ├── testimonials.jsx    # Client Component (carousel)
  ├── navbar.jsx         # Mixed (mobile menu is client)
  ├── animated-number.jsx # Client Component
  └── button.jsx         # Server Component
  ```

## Documentation

- [Next.js](https://nextjs.org/docs) - App Router and features
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling utilities
- [Tailwind UI](https://tailwindui.com) - Component patterns
- [Headless UI](https://headlessui.dev) - Accessible components
