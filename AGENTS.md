<project_details>

<description>
These rules apply specifically to the Mine Seek template repository and should be used for all code within this project scope. The domain is mineseek.com.au
</description>

<content_rules>
- All text MUST be in British English
- Use ’ instead of ' as an apostrophe on any frontend words (words that display to the user). e.g. Let’s, not Let's
- All marketing copy is embedded directly in JSX files
</content_rules>

<technical_requirements>
- Next.js with App Router
- Tailwind CSS for styling
- Tailwind UI components and design patterns
- Static site deployment:
  - No server-side functionality required
  - All blog/CMS features currently disabled
  - Builds to static output
  - URL parameters for interactive features
- Component Architecture:
  - Use Server Components by default (no 'use client' directive)
  - Client Components required for:
    - Testimonial carousel
    - Mobile navigation
    - Animated numbers
    - Interactive pricing tables
    - URL parameter handling
  - Split interactive components into separate files
  - Mark Client Components with 'use client' directive
  - Keep metadata in server components
</technical_requirements>

<key_templates>
src/
├── components/
│   ├── navbar.jsx: Main navigation and mobile menu
│   │   └── links[]: Main navigation items
│   ├── footer.jsx: Footer structure and CTA
│   │   └── Sitemap(): Footer navigation sections
│   │   └── SocialLinks(): Social media icons
│   ├── logo.jsx: Company logo and branding
│   ├── text.jsx: Heading and text components
│   ├── testimonials.jsx: Customer testimonial carousel
│   ├── bento-card.jsx: Feature card layouts
│   └── button.jsx: Button styles and variants
├── app/
│   ├── page.jsx: Homepage with features and benefits
│   │   └── Hero(): Main hero section
│   │   └── FeatureSection(): Product screenshots
│   │   └── BentoSection(): Feature cards grid
│   │   └── DarkBentoSection(): Dark themed features
│   ├── company/
│   │   └── page.jsx: Company page with team and mission
│   ├── pricing/
│   │   ├── page.jsx: Server component with metadata
│   │   └── pricing-client.jsx: Interactive pricing UI with URL parameters
│   └── login/
│       └── page.jsx: Authentication page
├── styles/
│   └── tailwind.css: Tailwind configuration
└── sanity/: Sanity CMS configuration (disabled)

<disabled_pages>
_disabled_pages/
├── blog/: Blog functionality
└── studio/: Sanity Studio
</disabled_pages>

</key_templates>

</project_details> 