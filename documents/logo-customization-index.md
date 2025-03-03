# Mine Seek Logo Customization Guide: Complete Documentation

This document provides comprehensive documentation for customizing logos on the Mine Seek website, including configuration options and implementation details.

## Quick Reference: Editing Logo Properties

### Main Logo Properties

The main Mine Seek logo is defined in `src/components/logo.jsx` and consists of two components:

1. **Logo Component**: The full Mine Seek logo including text
   - Used in navbar and footer
   - Includes hover animations
   - Takes `variant` prop to adjust viewBox settings

2. **Mark Component**: Just the circular mark portion (i.e. just the logo, no text)
   - Simple implementation using an img tag
   - Used in various places throughout the site
   - Takes className for styling (especially size)

#### How to Replace the SVG File

To replace the main logo:
1. Create your new SVG file
2. Replace `/public/mine-seek.svg` with your new file
3. If dimensions differ significantly, adjust the viewBox settings in `Logo` component

```jsx
// In src/components/logo.jsx
const viewBoxSettings = {
  navbar: "5 0 127 34",  // Adjust these values based on your logo dimensions
  footer: "13 0 127 34", // Adjust these values based on your logo dimensions
}
```

#### Logo Animation Settings

The main logo uses Framer Motion for animations:
```jsx
// Animation settings in Logo component
let transition = {
  duration: 0.5,
  ease: 'easeInOut',
}

// Hover animation variants
variants={{
  idle: { scale: 1, opacity: 1 },
  active: {
    scale: [1, 1.15, 1],
    opacity: [1, 0.75, 1],
    transition: {
      ...transition,
      delay: 0,
    },
  },
}}
```

## Logo Size Adjustment Guide

### Adjusting Logo Sizes in Logo Timeline

The Logo Timeline component displays the Mine Seek logo in the center with animated rows of integration logos. To adjust the size of the central Mine Seek logo:

1. Locate the `<Mark />` component usage in `src/components/logo-timeline.jsx` (around line 42-48)
2. Modify the `className` prop to adjust the height:

```jsx
// Original size
<Mark className="h-9 fill-white" />

// Larger size
<Mark className="h-16 w-auto" />

// Smaller size
<Mark className="h-7 w-auto" />
```

Tailwind height classes:
- `h-5`: 1.25rem (20px)
- `h-7`: 1.75rem (28px)
- `h-9`: 2.25rem (36px)
- `h-10`: 2.5rem (40px)
- `h-12`: 3rem (48px)
- `h-16`: 4rem (64px)

To adjust the size of integration logos in the timeline:
1. Find the `<Logo />` component definition in `src/components/logo-timeline.jsx`
2. Modify the `size-4` class on the img element to adjust icon size
3. Adjust text size with text-sm/text-xs if needed

### Adjusting Logo Sizes in Logo Cluster

The Logo Cluster shows the Mine Seek logo centrally with satellite logos around it:

1. To adjust the central logo size:
   - Locate the `MainLogo` function in `src/components/logo-cluster.jsx`
   - Modify the size class of the container (`size-16`)
   - Adjust the height of the Mark component (`h-14`)

```jsx
// Original
<div className="absolute left-44 top-32 flex size-16 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5">
  <Mark className="h-14 fill-black" />
</div>

// Example with different sizes
<div className="absolute left-44 top-32 flex size-20 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5">
  <Mark className="h-16 fill-black" />
</div>
```

2. To adjust satellite logo sizes:
   - Modify the `size-16` class in the Logo component
   - Ensure you adjust positioning if changing sizes significantly

Note: When changing logo sizes, you may need to adjust positioning values to maintain proper layout.

## Documentation Overview

This document consolidates all logo customization documentation into a single comprehensive resource. Previously, this information was split across multiple files:

1. **Configurable Logos Guide** - Now included in the "Logo Components Overview" section
2. **Logo Structure Visual Guide** - Now included in the "Logo Structure Visual Guide" section
3. **Logo Customization Examples** - Now included in the "Logo Customization Examples" section

Having all documentation in one place should make it easier to find information and understand how the different logo components work together.

## Quick Start

If you're looking to make a simple logo change:

1. Identify which logo component you need to modify:
   - **Logo Cluster**: The circular arrangement of logos in the Bento Section
   - **Logo Timeline**: The animated rows of logos in the Dark Bento Section
   - **Logo Cloud**: The horizontal row of logos (currently disabled)
   - **Main Logo**: The Mine Seek logo itself

2. Prepare your new logo as an SVG file
   - Optimize it for web using a tool like SVGO
   - Ensure it has transparent background
   - Match dimensions with existing logos

3. Add your logo to the appropriate directory:
   - `public/logo-cluster/`
   - `public/logo-timeline/`
   - `public/logo-cloud/`
   - or replace `public/mine-seek.svg` for the main logo

4. Update the component code to reference your new logo
   - See the corresponding documentation for specific code examples

## Common Tasks

### Replacing a Logo
See Example 1 in the "Logo Customization Examples" section below.

### Adding a New Logo
See Example 2 in the "Logo Customization Examples" section below.

### Changing Animation Parameters
See Example 5 in the "Logo Customization Examples" section below.

### Enabling the Logo Cloud
See Example 3 in the "Logo Customization Examples" section below.

## Logo Components Overview

### 1. Logo Cluster Component

**File location**: `src/components/logo-cluster.jsx`

**Component usage on homepage**:
- Used in the `BentoSection` component
- Displays a central Mine Seek logo with satellite logos around it
- Each satellite logo has animated hover effects

**Current logos**:
- LinkedIn (`/public/logo-cluster/linkedin.svg`)
- Upwork (`/public/logo-cluster/upwork.svg`)
- Dribbble (`/public/logo-cluster/dribbble.svg`)
- Glassdoor (`/public/logo-cluster/glassdoor.svg`)
- Career Builder (`/public/logo-cluster/career-builder.svg`)
- We Work Remotely (`/public/logo-cluster/we-work-remotely.svg`)

**How to modify**:

To replace a logo:
1. Add your new SVG logo to the `/public/logo-cluster/` directory
2. Update the reference in `src/components/logo-cluster.jsx` with the new file name

Example of the logo component code:
```jsx
<Logo
  src="/logo-cluster/linkedin.svg"  // Change this path to your new logo
  left={144}                        // Horizontal position
  top={40}                          // Vertical position
  hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}  // Hover animation parameters
/>
```

### 2. Logo Timeline Component

**File location**: `src/components/logo-timeline.jsx`

**Component usage on homepage**:
- Used in the `DarkBentoSection` component
- Shows logos of integrated services in animated rows

**Current logos**:
- Gmail, Loom, Microsoft Teams, Asana, Google Calendar, Google Drive, Discord, Basecamp, Slack, Hubspot, Adobe Creative Cloud, Zoom

**How to modify**:

To replace a logo:
1. Add your new SVG logo to the `/public/logo-timeline/` directory
2. Update the reference in `src/components/logo-timeline.jsx` with the new file name

Example of the logo component code:
```jsx
<Logo
  label="Gmail"             // Display name for the logo
  src="/logo-timeline/gmail.svg"  // Change this path to your new logo
  className="[animation-delay:-8s] [animation-duration:30s]"  // Animation settings
/>
```

### 3. Logo Cloud Component

**File location**: `src/components/logo-cloud.jsx`

**Note**: This component is currently commented out in the homepage (`src/app/page.jsx`).

**Current logos**:
- SavvyCal, Laravel, Tuple, Transistor, Statamic

**How to modify**:

To replace a logo:
1. Add your new SVG logo to the `/public/logo-cloud/` directory
2. Update the reference in `src/components/logo-cloud.jsx` with the new file name

Example of the logo component code:
```jsx
<img
  alt="SavvyCal"
  src="/logo-cloud/savvycal.svg"  // Change this path to your new logo
  className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
/>
```

### 4. Main Logo Configuration

The main Mine Seek logo is defined in `src/components/logo.jsx` and has two variants:

1. **Full Logo** (`Logo` component) - The complete Mine Seek logo with text
2. **Mark Logo** (`Mark` component) - Just the circular mark portion

The main logo file is located at `/public/mine-seek.svg`.

## Logo Structure Visual Guide

### Logo Cluster Structure

The Logo Cluster component creates a circular arrangement with the Mine Seek logo in the center:

```
                    Dribbble
                       ⭕
                        
     Upwork                   Glassdoor
       ⭕                         ⭕
              
        ⭕         ⭐️         ⭕        
     LinkedIn     Mine      Career
                  Seek      Builder
                       
                 ⭕
            We Work Remotely
```

* ⭐️ = Main Logo (Mark component)
* ⭕ = Satellite Logos

### Logo Timeline Structure

The Logo Timeline component arranges logos in animated rows:

```
Row 1:  Loom  ➡️➡️➡️➡️➡️➡️➡️➡️➡️  Gmail  ➡️➡️➡️➡️➡️➡️➡️➡️➡️
Row 2:  Asana  ➡️➡️➡️➡️➡️➡️➡️  Microsoft Teams  ➡️➡️➡️➡️➡️➡️➡️
Row 3:  Google Calendar  ➡️➡️➡️➡️➡️  Google Drive  ➡️➡️➡️➡️➡️
Row 4:  Basecamp  ➡️➡️➡️➡️➡️➡️➡️➡️  Discord  ➡️➡️➡️➡️➡️➡️➡️➡️
Row 5:  Hubspot  ➡️➡️➡️➡️➡️➡️➡️➡️➡️  Slack  ➡️➡️➡️➡️➡️➡️➡️➡️➡️
Row 6:  Adobe CC  ➡️➡️➡️➡️➡️➡️➡️➡️➡️  Zoom  ➡️➡️➡️➡️➡️➡️➡️➡️➡️
```

Each row features logos that move horizontally on hover, with different animation durations and delays.

### Logo Cloud Structure

The Logo Cloud component (currently disabled) displays logos in a simple horizontal row:

```
┌────────────────────────────────────────────────────────────┐
│  SavvyCal  |  Laravel  |  Tuple  |  Transistor  |  Statamic  │
└────────────────────────────────────────────────────────────┘
```

### Homepage Component Integration

The logos are integrated into the homepage in specific sections:

```
┌────────────────────────────────────────────────────────────┐
│ Hero Section                                               │
│                                                            │
│ (Logo Cloud can be enabled here - currently commented out) │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ Feature Section                                            │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ Bento Section                                              │
│                                                            │
│ (LogoCluster component is used here)                       │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ Dark Bento Section                                         │
│                                                            │
│ (LogoTimeline component is used here)                      │
└────────────────────────────────────────────────────────────┘
```

## Logo Customization Examples

### Example 1: Replacing a Logo in the Logo Cluster

Let's say you want to replace the LinkedIn logo with a GitHub logo in the Logo Cluster component.

#### Step 1: Add the new SVG file
Add your `github.svg` file to the `/public/logo-cluster/` directory.

#### Step 2: Modify the component code
In `src/components/logo-cluster.jsx`, find the LinkedIn logo entry:

```jsx
<Logo
  src="/logo-cluster/linkedin.svg"
  left={144}
  top={40}
  hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
/>
```

Replace it with:

```jsx
<Logo
  src="/logo-cluster/github.svg"
  left={144}
  top={40}
  hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
/>
```

### Example 2: Adding a New Logo to the Logo Timeline

Let's say you want to add Jira to the Logo Timeline in the Dark Bento section.

#### Step 1: Add the new SVG file
Add your `jira.svg` file to the `/public/logo-timeline/` directory.

#### Step 2: Add a new entry to one of the rows
In `src/components/logo-timeline.jsx`, add a new logo to an existing row or create a new row:

```jsx
<Row>
  <Logo
    label="Basecamp"
    src="/logo-timeline/basecamp.svg"
    className="[animation-delay:-45s] [animation-duration:45s]"
  />
  <Logo
    label="Discord"
    src="/logo-timeline/discord.svg"
    className="[animation-delay:-23s] [animation-duration:45s]"
  />
  <Logo
    label="Jira"
    src="/logo-timeline/jira.svg"
    className="[animation-delay:-35s] [animation-duration:45s]"
  />
</Row>
```

### Example 3: Enabling and Customizing the Logo Cloud

The Logo Cloud component is currently commented out. Here's how to enable and customize it:

#### Step 1: Uncomment the component in the homepage
In `src/app/page.jsx`, find and uncomment the LogoCloud section:

```jsx
<Container className="mt-10">
  <LogoCloud />
</Container>
```

### Example 4: Changing the Main Logo

To replace the main Mine Seek logo:

#### Step 1: Create a new SVG logo
Prepare your new logo in SVG format, ensuring it's properly sized and optimized.

#### Step 2: Replace the existing file
Replace the existing `/public/mine-seek.svg` file with your new logo.

### Example 5: Creating a Custom Logo Animation

To customize the hover animation for a logo in the Logo Cluster:

```jsx
<Logo
  src="/logo-cluster/example.svg"
  left={200}
  top={100}
  hover={{
    x: 10,              // Move 10px horizontally
    y: -10,             // Move -10px vertically
    rotate: 15,         // Rotate 15 degrees
    delay: 0.25,        // Start animation after 0.25s
  }}
/>
```

## File Structure Quick Reference

```
public/
├── mine-seek.svg (Main logo)
├── logo-cluster/*.svg
├── logo-timeline/*.svg
└── logo-cloud/*.svg

src/components/
├── logo.jsx (Main Logo and Mark components)
├── logo-cluster.jsx
├── logo-timeline.jsx
└── logo-cloud.jsx
```

## SVG File Requirements

For best results with all logo components:

1. Keep file sizes small (optimize your SVGs)
2. Use consistent dimensions for logos in the same component
3. Use SVG format for all logos for best scaling
4. Ensure logos have transparent backgrounds
5. Test your changes to ensure proper display at different screen sizes

## Best Practices

1. **Keep SVGs optimized** - Large SVG files can slow down your site
2. **Test on multiple screen sizes** - Ensure logos display correctly on all devices
3. **Maintain consistent styling** - Try to match the style of existing logos for visual coherence
4. **Version control** - Back up original logos before making changes
5. **Check animations** - Verify that animations work smoothly after modifications 