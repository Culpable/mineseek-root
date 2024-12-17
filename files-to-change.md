# Content Editor's Guide - Radiant Website

## Main Pages
Location: `/src/app/`

### Home Page (`page.jsx`)
1. Metadata:
   ```jsx
   description: 'Radiant helps you sell more by revealing sensitive information about your customers.'
   ```

2. Hero Section:
   ```jsx
   - Heading: "Close every deal."
   - Subtext: "Radiant helps you sell more by revealing sensitive information about your customers."
   - CTAs: 
     - Primary: "Get started"
     - Secondary: "See pricing"
   ```

3. Feature Sections:
   ```jsx
   Main Feature:
   - Heading: "A snapshot of your entire sales pipeline."
   - Screenshot: "/screenshots/app.png"

   Sales Features:
   - Subheading: "Sales"
   - Heading: "Know more about your customers than they do."
   
   Feature Cards:
   1. Insight Card:
      - Eyebrow: "Insight"
      - Title: "Get perfect clarity"
      - Description: "Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
      - Image: "/screenshots/profile.png"

   2. Analysis Card:
      - Eyebrow: "Analysis"
      - Title: "Undercut your competitors"
      - Description: "With our advanced data mining, you'll know which companies your leads are talking to and exactly how much they're being charged."
      - Image: "/screenshots/competitors.png"

   3. Speed Card:
      - Eyebrow: "Speed"
      - Title: "Built for power users"
      - Description: "It's never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
      - Graphic: Keyboard with shortcuts

   4. Source Card:
      - Eyebrow: "Source"
      - Title: "Get the furthest reach"
      - Description: "Bypass those inconvenient privacy laws to source leads from the most unexpected places."
      - Graphic: Logo cluster

   5. Limitless Card:
      - Eyebrow: "Limitless"
      - Title: "Sell globally"
      - Description: "Radiant helps you sell in locations currently under international embargo."
      - Graphic: Map
   ```

4. Outreach Section (Dark):
   ```jsx
   Header:
   - Subheading: "Outreach"
   - Heading: "Customer outreach has never been easier."

   Feature Cards:
   1. Networking Card:
      - Eyebrow: "Networking"
      - Title: "Sell at the speed of light"
      - Description: "Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
      - Image: "/screenshots/networking.png"

   2. Integrations Card:
      - Eyebrow: "Integrations"
      - Title: "Meet leads where they are"
      - Description: "With thousands of integrations, no one will be able to escape your cold outreach."
      - Graphic: Logo timeline

   3. Meetings Card:
      - Eyebrow: "Meetings"
      - Title: "Smart call scheduling"
      - Description: "Automatically insert intro calls into your leads' calendars without their consent."
      - Graphic: Linked avatars

   4. Engagement Card:
      - Eyebrow: "Engagement"
      - Title: "Become a thought leader"
      - Description: "RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
      - Image: "/screenshots/engagement.png"
   ```

### Company Page (`company/page.jsx`)
1. Metadata:
   ```jsx
   title: 'Company'
   description: 'We're on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data.'
   ```

2. Header Section:
   ```jsx
   - Heading: "Helping companies generate revenue."
   - Lead: "We're on a mission to transform revenue organizations by harnessing vast amounts of illegally acquired customer data."
   ```

3. Mission Section:
   ```jsx
   - Heading: "Our mission"
   - Mission Text: "At Radiant, we are dedicated to transforming the way revenue organizations source and close deals. Our mission is to provide our customers with an unfair advantage over both their competitors and potential customers through insight and analysis. We'll stop at nothing to get you the data you need to close a deal."
   - Additional Text: "We're customer-obsessed — putting the time in to build a detailed financial picture of every one of our customers so that we know more about your business than you do. We are in this together, mostly because we are all implicated in large-scale financial crime. In our history as a company, we've never lost a customer, because if any one of us talks, we all go down."
   ```

4. Statistics:
   ```jsx
   - Raised: "$150M"
   - Companies: "30K"
   - Deals Closed: "1.5M"
   - Leads Generated: "200M"
   ```

5. Team Section:
   ```jsx
   Headers:
   - Subheading: "Meet the team"
   - Heading: "Founded by an all-star team."
   - Lead: "Radiant is founded by two of the best sellers in the business and backed by investors who look the other way."

   Team Story:
   - Origin Story: "Years ago, while working as sales associates at rival companies, Thomas, Ben, and Natalie were discussing a big client they had all been competing for. Joking about seeing the terms of each other's offers, they had an idea: what if they shared data to win deals and split the commission behind their companies' backs? It turned out to be an incredible success, and that idea became the kernel for Radiant."
   - Current Status: "Today, Radiant transforms revenue organizations by harnessing illegally acquired customer and competitor data, using it to provide extraordinary leverage. More than 30,000 companies rely on Radiant to undercut their competitors and extort their customers, all through a single integrated platform."
   - CTA: "Join us"

   Team Members:
   ```jsx
   [
     { name: "Michael Foster", role: "Co-Founder / CTO" },
     { name: "Dries Vincent", role: "Business Relations" },
     { name: "Celeste Vandermark", role: "Front-end Developer" },
     { name: "Courtney Henry", role: "Designer" },
     { name: "Marcus Eldridge", role: "Director of Product" },
     { name: "Whitney Francis", role: "Copywriter" },
     { name: "Leonard Krasner", role: "Senior Designer" },
     { name: "Nolan Sheffield", role: "Principal Designer" },
     { name: "Emily Selman", role: "VP, User Experience" }
   ]
   ```

6. Investors Section:
   ```jsx
   Headers:
   - Subheading: "Investors"
   - Heading: "Funded by industry-leaders."
   - Lead: "We are fortunate to be backed by the best investors in the industry — both literal and metaphorical partners in crime."
   
   Sections:
   - Subheading: "Venture Capital"
   - Investor Images: "/investors/remington-schwartz.svg" and others
   ```

### Pricing Page (`pricing/page.jsx`)
1. Metadata:
   ```jsx
   title: 'Pricing'
   description: 'Companies all over the world have closed millions of deals with Radiant.'
   ```

2. Pricing Header:
   ```jsx
   - Heading: "Pricing that grows with your team size."
   - Subtext: "Companies all over the world have closed millions of deals with Radiant."
   ```

3. Plan Details:
   ```jsx
   Starter Plan ($99/month):
   - "Everything you need to start selling."
   - Features list...

   Growth Plan ($149/month):
   - "All the extras for your growing team."
   - Features list...

   Enterprise Plan ($299/month):
   - "Added flexibility to close deals at scale."
   - Features list...
   ```

4. Feature References:
   - All mentions of "RadiantAI"
   - All feature descriptions and limitations

### Login Page (`login/page.jsx`)
1. Metadata:
   ```jsx
   title: 'Login'
   description: 'Sign in to your account to continue.'
   ```

2. Form Content:
   ```jsx
   - Heading: "Welcome back!"
   - Subtext: "Sign in to your account to continue."
   - Form Labels: "Email", "Password"
   - Checkbox: "Remember me"
   - Links: "Forgot password?", "Create an account"
   - Button: "Sign in"
   - Footer: "Not a member?"
   ```

## Components
Location: `/src/components/`

### Footer (`footer.jsx`)
1. Call to Action:
   ```jsx
   - Subheading: "Get started"
   - Heading: "Ready to dive in?\nStart your free trial today."
   - Subtext: "Get the cheat codes for selling and unlock your team's revenue potential."
   - CTA: "Get started"
   ```

2. Navigation Sections:
   ```jsx
   Product:
   - Pricing
   - Analysis
   - API

   Company:
   - Careers
   - Company

   Support:
   - Help center
   - Community

   Legal:
   - Terms of service
   - Privacy policy
   ```

3. Social Links:
   ```jsx
   - Facebook: "Visit us on Facebook" (https://facebook.com)
   - X: "Visit us on X" (https://x.com)
   - LinkedIn: "Visit us on LinkedIn" (https://linkedin.com)
   ```

4. Company Information:
   ```jsx
   - Copyright: "© {year} Radiant Inc."
   - Logo: Company logo in header
   ```

### Testimonials (`testimonials.jsx`)
- All customer testimonials
- Company names
- Individual names and titles

### Logo Components
- `logo.jsx` - Company logo
- `logo-cloud.jsx` - Partner/client logos
- `logo-cluster.jsx` - Logo groupings
- `logo-timeline.jsx` - Timeline logos

### Navigation (`components/navbar.jsx`)
1. Main Navigation:
   ```jsx
   links = [
     { href: '/pricing', label: 'Pricing' },
     { href: '/company', label: 'Company' },
     { href: '/login', label: 'Login' }
   ]
   ```

2. Mobile Menu:
   - "Open main menu" aria-label

### Testimonials (`components/testimonials.jsx`)
1. Section Headers:
   ```jsx
   - Subheading: "What everyone is saying"
   - Heading: "Trusted by professionals."
   ```

2. Individual Testimonials:
   ```jsx
   {
     name: 'Tina Yards',
     title: 'VP of Sales, Protocol',
     quote: 'Thanks to Radiant, we're finding new leads that we never would have found with legal methods.'
   },
   {
     name: 'Conor Neville',
     title: 'Head of Customer Success, TaxPal',
     quote: 'Radiant made undercutting all of our competitors an absolute breeze.'
   },
   {
     name: 'Amy Chase',
     title: 'Head of GTM, Pocket',
     quote: 'We closed a deal in literally a few minutes because we knew their exact budget.'
   },
   {
     name: 'Veronica Winton',
     title: 'CSO, Planeteria',
     quote: 'We've managed to put two of our main competitors out of business in 6 months.'
   },
   {
     name: 'Dillon Lenora',
     title: 'VP of Sales, Detax',
     quote: 'I was able to replace 80% of my team with RadiantAI bots.'
   },
   {
     name: 'Harriet Arron',
     title: 'Account Manager, Commit',
     quote: 'I've smashed all my targets without having to speak to a lead in months.'
   }
   ```

3. Call to Action:
   ```jsx
   - Text: "Join the best sellers in the business and start using Radiant to hit your targets today."
   - Link: "Get started"
   ```

### Pricing Page Additional Details
1. Plan Features (Starter):
   ```jsx
   - "Up to 3 team members"
   - "Up to 5 deal progress boards"
   - "Source leads from select platforms"
   - "RadiantAI integrations" (disabled)
   - "Competitor analysis" (disabled)
   ```

2. Plan Features (Growth):
   ```jsx
   - "Up to 10 team members"
   - "Unlimited deal progress boards"
   - "Source leads from over 50 verified platforms"
   - "RadiantAI integrations"
   - "5 competitor analyses per month"
   ```

3. Plan Features (Enterprise):
   ```jsx
   - "Unlimited active team members"
   - "Unlimited deal progress boards"
   - "Source leads from over 100 verified platforms"
   - "RadiantAI integrations"
   - "Unlimited competitor analyses"
   ```

4. Feature Categories:
   ```jsx
   - Features
   - Analysis
   - Support
   ```

## Images and Assets
Location: `/public/`

### Screenshots
1. Main Application:
   - `/screenshots/app.png` - Dashboard view
   - `/screenshots/profile.png` - Profile interface
   - `/screenshots/competitors.png` - Competitor analysis
   - `/screenshots/networking.png` - Networking features
   - `/screenshots/engagement.png` - Engagement metrics

2. Company Photos:
   - `/company/1.jpg` through `/company/5.jpg`
   - `/team/*.jpg` - All team member photos

3. Brand Assets:
   - Company logo files
   - Partner/client logos
   - Social media icons

## Important Notes:
1. The site uses Tailwind CSS - styling changes in JSX files
2. Marketing copy is embedded in JSX files
3. Screenshot dimensions must be maintained:
   - Main app: 1216x768
   - Feature screenshots: Various sizes
4. Blog functionality is currently disabled
5. Update metadata in `layout.jsx` when changing content

## Template Language to Update:
1. Product Name: Replace "Radiant" throughout
2. Product Features:
   - "RadiantAI" references
   - Sales and customer insight terminology
   - Feature names and descriptions
3. Marketing Language:
   - Value propositions
   - Feature benefits
   - Call-to-action text
4. Company Information:
   - Mission statement
   - Team information
   - Company history
5. Legal Text:
   - Terms of service
   - Privacy policy
   - Copyright notices

## Disabled Features (Optional Restoration)
Location: `/_disabled_pages/`
- Blog functionality
- Sanity CMS integration
- RSS feed

### Site-wide Layout (`layout.jsx`)
```jsx
metadata: {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  }
}
```

## Additional Files to Update

### Package Files
- `package.json`: Update "name": "radiant"
- `package-lock.json`: Update "name": "radiant"

### Disabled Blog Content
Location: `/_disabled_pages/blog/`
- `page.jsx`: Update heading "What's happening at Radiant."
- `feed.xml/route.js`: Update title "The Radiant Blog"