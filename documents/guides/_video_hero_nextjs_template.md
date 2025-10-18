# VideoHero + Lite YouTube Embed Template Guide

This guide shows you how to use the `VideoHero` component with `LiteYouTubeEmbed` in your own Next.js application.

## Project Structure

Create this folder structure in your Next.js project:

```
src/
├── components/
│   ├── container.jsx          # Container wrapper component
│   ├── navbar.jsx             # Navigation component
│   ├── footer.jsx             # Footer component
│   ├── gradient.jsx           # Gradient background components
│   ├── button.jsx             # Reusable button component
│   ├── text.jsx               # Heading and subheading components
│   └── lite-youtube-embed.jsx # YouTube embed component (see below)
├── lib/
│   └── analytics.js           # Analytics tracking (optional)
├── app/
│   ├── layout.jsx
│   └── your-video-page/
│       ├── page.jsx           # Your page using VideoHero
│       └── (other files)
└── styles/
    └── globals.css            # Global styles including Tailwind
```

## What You'll Build

This template creates a hero section with:

✅ **Colorful gradient background** that seamlessly blends with your navbar  
✅ **Performance-optimised YouTube embed**  
✅ **Responsive design** that works on mobile, tablet, and desktop  
✅ **Accessible controls** with proper ARIA labels  
✅ **Custom thumbnail support** for brand consistency  
✅ **Call-to-action buttons** below the video  

### Key Components Required

This template requires **4 files** to work properly:

1. `gradient.jsx` - Creates the colorful background blend (⚠️ **Critical**)
2. `lite-youtube-embed.jsx` - Handles the video player
3. `video-hero.jsx` - Combines everything into a hero section
4. `lite-youtube-embed.css` - Styles the play button (⚠️ **Critical**)

> **Warning:** Missing either the `Gradient` component or the CSS file will cause visual issues. Don't skip any steps!

---

## Step 1: Install Dependencies

```bash
npm install lite-youtube-embed
# or
yarn add lite-youtube-embed
```

Add to your `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {},
  },
  // ... rest of your config
}
```

## Step 2: Create the LiteYouTubeEmbed Component

Create `src/components/lite-youtube-embed.jsx`:

```jsx
'use client'

import { useEffect, useRef, useState } from 'react'

// Optional: If you have an analytics tracking function, import it
// import analytics from '@/lib/analytics'

export default function LiteYouTubeEmbed({ 
  videoid, 
  title = '', 
  playlabel = '',
  params = '',
  jsApi = false,
  className = '',
  style = {},
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const containerRef = useRef(null)
  const hasTrackedPlayRef = useRef(false)

  // Progressive enhancement: defer script loading until component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setScriptLoaded(true)
    }, 100) // Small delay to ensure critical content loads first
    
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (scriptLoaded && containerRef.current && !isLoaded) {
      // Dynamically import the lite-youtube-embed script
      const loadScript = async () => {
        try {
          await import('lite-youtube-embed/src/lite-yt-embed.js')
          setIsLoaded(true)
        } catch (error) {
          console.error('Failed to load lite-youtube-embed:', error)
        }
      }
      loadScript()
    }
  }, [scriptLoaded, isLoaded])

  useEffect(() => {
    // Create the custom element once script is loaded
    if (isLoaded && containerRef.current) {
      const existingElement = containerRef.current.querySelector('lite-youtube')
      if (!existingElement) {
        const liteYoutube = document.createElement('lite-youtube')
        
        // Core attributes
        liteYoutube.setAttribute('videoid', videoid)
        
        // Title attribute for overlay text
        if (title) {
          liteYoutube.setAttribute('title', title)
        }
        
        // Custom play label for accessibility
        liteYoutube.setAttribute('playlabel', playlabel || `Play Video: ${title}` || 'Play Video')
        
        // Player parameters for optimal UX
        const defaultParams = 'modestbranding=1&rel=0&start=0'
        const finalParams = params ? `${defaultParams}&${params}` : defaultParams
        liteYoutube.setAttribute('params', finalParams)
        
        // Enable YouTube IFrame Player API if requested
        if (jsApi) {
          liteYoutube.setAttribute('js-api', '')
        }
        
        // Apply minimal styling
        liteYoutube.style.cssText = `
          width: 100%;
          height: 100%;
          ${style.backgroundImage ? `background-image: ${style.backgroundImage};` : ''}
        `
        
        // Optional: Track video plays with your analytics
        liteYoutube.addEventListener('pointerdown', () => {
          if (!hasTrackedPlayRef.current) {
            hasTrackedPlayRef.current = true
            // Uncomment to add analytics tracking:
            // analytics.trackVideoPlay(videoid, {
            //   title: title || undefined,
            //   provider: 'youtube',
            //   page: typeof window !== 'undefined' ? window.location.pathname : undefined,
            // })
          }
        }, { once: true })

        containerRef.current.appendChild(liteYoutube)
      }
    }
  }, [isLoaded, videoid, title, playlabel, params, jsApi, style.backgroundImage])

  // Method to get YouTube Player API (if js-api is enabled)
  const getYTPlayer = async () => {
    if (!jsApi || !isLoaded) {
      throw new Error('YouTube Player API not enabled. Set jsApi={true} to use this feature.')
    }
    
    const liteYoutube = containerRef.current?.querySelector('lite-youtube')
    if (liteYoutube && typeof liteYoutube.getYTPlayer === 'function') {
      return await liteYoutube.getYTPlayer()
    }
    
    throw new Error('YouTube Player not ready')
  }

  // Expose getYTPlayer method via ref
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.getYTPlayer = getYTPlayer
    }
  }, [isLoaded, jsApi, getYTPlayer])

  return (
    <>
      {/* Load CSS for the video player */}
      <link 
        rel="stylesheet" 
        href="/lite-youtube-embed.css" 
      />
      
      {/* Container with fallback markup */}
      <div 
        ref={containerRef} 
        className={`relative w-full h-full ${className}`}
        style={style}
        {...props}
      >
        {/* Fallback markup for no-JS environments and during loading */}
        {!isLoaded && (
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-white ${scriptLoaded ? 'lite-youtube-loading' : 'bg-gray-900'}`}>
            <button 
              type="button"
              className="group flex flex-col items-center justify-center text-center p-8 hover:bg-gray-800/50 transition-colors rounded-lg z-10 cursor-default"
              aria-label={playlabel || `Play Video: ${title}` || 'Play Video'}
              disabled
            >
              {/* Play button icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mb-4 group-hover:bg-red-700 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              {/* Title */}
              {title && (
                <h3 className="text-lg font-medium mb-2 group-hover:text-gray-100">
                  {title}
                </h3>
              )}
              {/* Status message */}
              <span className="text-sm text-gray-400 group-hover:text-gray-300">
                {scriptLoaded ? 'Loading video player…' : 'Preparing player…'}
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
```

## Step 3: Create the Gradient Component (Required!)

> ⚠️ **CRITICAL**: Do not skip this step! The gradient component is essential for the seamless navbar blend.

Create `src/components/gradient.jsx`:

```jsx
import { clsx } from 'clsx'

/**
 * Gradient Component
 * Creates a colorful gradient background element
 */
export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        // Adjust these colors to match your brand
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

/**
 * GradientBackground Component
 * Creates a blurred gradient orb effect in the background
 */
export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
```

**Note:** Install `clsx` if you haven't already:
```bash
npm install clsx
```

---

## Step 4: Create the VideoHero Component

Create `src/components/video-hero.jsx`:

```jsx
'use client'

import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/text'
import { Gradient } from '@/components/gradient' // ⚠️ CRITICAL: Don't forget this import!
import LiteYouTubeEmbed from '@/components/lite-youtube-embed'

/**
 * VideoHero Component
 * 
 * A hero section that showcases a YouTube video with supporting content.
 * Includes a title, description, video player, and call-to-action buttons.
 * 
 * Props:
 *   - videoId: YouTube video ID (required)
 *   - title: Hero section title/subheading
 *   - subtitle: Main heading text
 *   - description: Supporting paragraph text
 *   - videoTitle: Title shown on video player
 *   - videoThumbnail: Background image URL for video (optional)
 *   - ctaButtons: Array of button objects { text, href, variant }
 */
export function VideoHero({
  videoId,
  title = 'Product Tour',
  subtitle = 'Experience our platform in action',
  description = 'Watch how our solution transforms your workflow',
  videoTitle = 'Demo Video',
  videoThumbnail = '',
  ctaButtons = [
    { text: 'Book a demo', href: '/contact', variant: 'primary' }
  ]
}) {
  return (
    <div className="relative">
      {/* ⚠️ IMPORTANT: Use Gradient component, NOT a plain div! */}
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      
      <Container className="relative">
        {/* Navigation bar */}
        <Navbar />
        
        {/* Hero content section */}
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          {/* Text content centered above video */}
          <div className="text-center">
            <Subheading>{title.toUpperCase()}</Subheading>
            <h1 className="mt-2 font-display text-balance text-5xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-7xl/[0.8] md:text-7xl/[0.8]">
              {subtitle}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              {description}
            </p>
          </div>

          {/* Video Player Section */}
          <div className="mt-16 relative">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                {/* 16:9 aspect ratio container for video */}
                <div className="aspect-video w-full">
                  <LiteYouTubeEmbed 
                    videoid={videoId}
                    title={videoTitle}
                    playlabel={`Play demonstration video: ${videoTitle}`}
                    params="controls=1&enablejsapi=1"
                    jsApi={true}
                    {/* ⚠️ IMPORTANT: Use conditional object, NOT undefined! */}
                    style={videoThumbnail ? { backgroundImage: `url(${videoThumbnail})` } : {}}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:justify-center">
            {ctaButtons.map((btn, idx) => (
              <Button 
                key={idx}
                href={btn.href} 
                variant={btn.variant}
                className="w-full sm:w-auto"
              >
                {btn.text}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VideoHero
```

## Step 5: Add CSS File

Create `public/lite-youtube-embed.css`:

```css
lite-youtube {
    background-color: #000;
    position: relative;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
    max-width: 100%;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

/* Mine Seek specific enhancements */
lite-youtube:hover {
    transform: scale(1.01);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

/* gradient */
lite-youtube::before {
    content: attr(data-title);
    display: block;
    position: absolute;
    top: 0;
    /* Pixel-perfect port of YT's gradient PNG */
    background-image: linear-gradient(180deg, rgb(0 0 0 / 67%) 0%, rgb(0 0 0 / 54%) 14%, rgb(0 0 0 / 15%) 54%, rgb(0 0 0 / 5%) 72%, rgb(0 0 0 / 0%) 94%);
    height: 99px;
    width: 100%;
    font-family: "YouTube Noto", Roboto, Arial, Helvetica, sans-serif;
    color: hsl(0deg 0% 93.33%);
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-size: 18px;
    padding: 25px 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
}

lite-youtube:hover::before {
    color: white;
}

lite-youtube::after {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
}

lite-youtube>iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
}

/* play button */
lite-youtube>.lty-playbtn {
    display: block;
    /* Make the button element cover the whole area for a large hover/click target… */
    width: 100%;
    height: 100%;
    /* Ensure absolute positioning covers the container fully */
    position: absolute;
    inset: 0;
    cursor: pointer;
    z-index: 1;
    filter: grayscale(100%);
    transition: filter .1s cubic-bezier(0, 0, 0.2, 1), transform 0.2s ease-in-out;
    border: 0;
    /* …but visually it's still the same size */
    background: no-repeat center/68px 48px;
    /* YT's actual play button svg - force override any resets */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>') !important;
}

/* Enhanced play button interaction */
lite-youtube:hover>.lty-playbtn {
    filter: none;
    transform: scale(1.1);
}

lite-youtube .lty-playbtn:focus {
    filter: none;
    transform: scale(1.1);
    outline: 2px solid #fff;
    outline-offset: 4px;
}

/* Post-click styles */
lite-youtube.lyt-activated {
    cursor: unset;
}

lite-youtube.lyt-activated::before,
lite-youtube.lyt-activated>.lty-playbtn {
    opacity: 0;
    pointer-events: none;
}

.lyt-visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

/* Mine Seek branded loading state */
.lite-youtube-loading {
    background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
    position: relative;
}

.lite-youtube-loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid #fff;
    border-radius: 50%;
    animation: lite-youtube-spin 1s linear infinite;
}

@keyframes lite-youtube-spin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    lite-youtube::before {
        background-image: linear-gradient(180deg, rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 65%) 14%, rgb(0 0 0 / 25%) 54%, rgb(0 0 0 / 10%) 72%, rgb(0 0 0 / 0%) 94%);
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    lite-youtube .lty-playbtn:focus {
        outline: 3px solid #fff;
        outline-offset: 2px;
    }

    lite-youtube::before {
        text-shadow: 0 0 4px rgba(0, 0, 0, 1);
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    lite-youtube {
        transition: none;
    }

    lite-youtube:hover {
        transform: none;
    }

    lite-youtube>.lty-playbtn {
        transition: filter .1s cubic-bezier(0, 0, 0.2, 1);
    }

    lite-youtube:hover>.lty-playbtn {
        transform: none;
    }
}
```

## Step 6: Use VideoHero in Your Page

Create `src/app/your-video-page/page.jsx`:

```jsx
'use client'

import { VideoHero } from '@/components/video-hero'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'

export default function YourVideoPage() {
  return (
    <div className="overflow-hidden">
      <GradientBackground />
      
      <VideoHero
        videoId="YOUR_YOUTUBE_VIDEO_ID"
        title="Product Tour"
        subtitle="The Power of Your Product"
        description="Watch how teams use our solution to transform their workflow and achieve results faster."
        videoTitle="Product Demo - 5 minutes"
        videoThumbnail="/path/to/your-thumbnail.jpg"
        ctaButtons={[
          { 
            text: 'Book a demo', 
            href: '/contact', 
            variant: 'primary' 
          },
          { 
            text: 'Learn more', 
            href: '/features', 
            variant: 'outline' 
          }
        ]}
      />
      
      <Footer />
    </div>
  )
}
```

## Advanced Usage

### Enable YouTube Player API

Set `jsApi={true}` to access the full YouTube Player API:

```jsx
// In your component
const playerRef = useRef(null)

useEffect(() => {
  const getPlayer = async () => {
    const player = await playerRef.current?.getYTPlayer()
    // Now you can control the player:
    // player.playVideo()
    // player.pauseVideo()
    // player.seekTo(30)
  }
}, [])

return (
  <LiteYouTubeEmbed 
    ref={playerRef}
    videoid="YOUR_VIDEO_ID"
    jsApi={true}
  />
)
```

### Customise Player Parameters

Pass custom YouTube player parameters:

```jsx
<LiteYouTubeEmbed 
  videoid="YOUR_VIDEO_ID"
  params="autoplay=1&start=10&end=50"
/>
```

Common parameters:
- `autoplay=1` - Auto-play the video
- `start=10` - Start at 10 seconds
- `end=50` - End at 50 seconds
- `controls=0` - Hide player controls

### Analytics Tracking

Uncomment the analytics tracking in `LiteYouTubeEmbed.jsx` if you want to track video plays:

```jsx
// In LiteYouTubeEmbed.jsx
import analytics from '@/lib/analytics'

liteYoutube.addEventListener('pointerdown', () => {
  if (!hasTrackedPlayRef.current) {
    hasTrackedPlayRef.current = true
    analytics.trackVideoPlay(videoid, {
      title: title || undefined,
      provider: 'youtube',
      page: window.location.pathname,
    })
  }
}, { once: true })
```

## Best Practices

1. **Lazy Load Videos**: The `LiteYouTubeEmbed` component already defers loading, so videos don't block page rendering.

2. **Responsive Design**: Use `aspect-video` container for proper 16:9 ratio on all screen sizes.

3. **Accessibility**: Always provide `title` and `playlabel` props for screen readers.

4. **Performance**: Set a background thumbnail image to show while the player loads.

5. **Testing**: Ensure the YouTube video ID is correct and the video is public or unlisted.

## Common Mistakes to Avoid ⚠️

### ❌ Mistake #1: Forgetting the Gradient Component

**Wrong:**
```jsx
// This creates NO gradient, just a transparent div with a border
<div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
```

**Correct:**
```jsx
import { Gradient } from '@/components/gradient'

<Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
```

**Why it matters:** The `Gradient` component contains the actual gradient colors that blend with your navbar. Without it, you lose all the visual appeal.

---

### ❌ Mistake #2: Setting `undefined` in Style Object

**Wrong:**
```jsx
// Setting undefined can break CSS defaults
style={{ backgroundImage: videoThumbnail ? `url(${videoThumbnail})` : undefined }}
```

**Correct:**
```jsx
// Use conditional object instead
style={videoThumbnail ? { backgroundImage: `url(${videoThumbnail})` } : {}}
```

**Why it matters:** `backgroundImage: undefined` can override the default play button background from the CSS file. An empty object `{}` is safer.

---

### ❌ Mistake #3: Missing CSS File

**Wrong:**
- Forgetting to create `public/lite-youtube-embed.css`
- Creating it in the wrong location

**Correct:**
- File must be at: `public/lite-youtube-embed.css`
- Must be loaded via `<link>` tag in component
- Must contain the play button styles

**Why it matters:** Without this CSS, the play button icon won't render properly.

---

### ❌ Mistake #4: Wrong Import Path

**Wrong:**
```jsx
import { Gradient } from '@/components/Gradient'  // Capital G
import { gradient } from '@/components/gradient'  // lowercase export
```

**Correct:**
```jsx
import { Gradient } from '@/components/gradient'  // lowercase file, uppercase export
```

---

## Pre-Launch Checklist

Before deploying, verify these items:

**Required Files:**
- [ ] `src/components/gradient.jsx` exists
- [ ] `src/components/lite-youtube-embed.jsx` exists
- [ ] `src/components/video-hero.jsx` exists
- [ ] `public/lite-youtube-embed.css` exists

**Imports:**
- [ ] `Gradient` component is imported in VideoHero
- [ ] `LiteYouTubeEmbed` is imported in VideoHero
- [ ] All imports use correct casing

**Dependencies:**
- [ ] `lite-youtube-embed` npm package installed
- [ ] `clsx` npm package installed
- [ ] Tailwind CSS configured

**Styling:**
- [ ] Gradient appears behind navbar
- [ ] Play button visible on video
- [ ] Thumbnail loads (if provided)
- [ ] Responsive on mobile

**Functionality:**
- [ ] Video plays when clicked
- [ ] No console errors
- [ ] Analytics tracking works (if enabled)

---

## Troubleshooting

**Gradient not appearing?**
- Verify you imported `Gradient` component, not using a plain `<div>`
- Check that `gradient.jsx` exists and exports `Gradient`
- Ensure `clsx` package is installed

**Video not loading?**
- Check that the YouTube video ID is correct
- Ensure the video is public or unlisted (not private)
- Verify `lite-youtube-embed.css` is in `/public` folder

**Play button not visible?**
- Check that `public/lite-youtube-embed.css` exists
- Verify the CSS file is being loaded (check Network tab)
- Use conditional object for style prop: `style={thumbnail ? {...} : {}}`

**Player API not working?**
- Make sure `jsApi={true}` is set
- Ensure the component is mounted before calling `getYTPlayer()`
- Check browser console for errors

**Styling issues?**
- Wrap the component in a container with `aspect-video` class
- Ensure Tailwind CSS is properly configured
- Check that CSS file is being loaded correctly

---

## Quick Reference Card 📋

### Two Critical Lines You Must Get Right

```jsx
// ✅ Import the Gradient component
import { Gradient } from '@/components/gradient'

// ✅ Use Gradient, NOT a plain div
<Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />

// ✅ Use conditional object for style prop
style={videoThumbnail ? { backgroundImage: `url(${videoThumbnail})` } : {}}
```

### Dependencies Checklist

```bash
npm install lite-youtube-embed clsx
```

### File Structure Verification

```
✅ src/components/gradient.jsx
✅ src/components/lite-youtube-embed.jsx  
✅ src/components/video-hero.jsx
✅ public/lite-youtube-embed.css
```

### Usage Example

```jsx
<VideoHero
  videoId="dQw4w9WgXcQ"
  title="Product Tour"
  subtitle="See it in action"
  description="Watch how our solution transforms your workflow"
  videoTitle="Demo Video - 5 minutes"
  videoThumbnail="/images/video-thumbnail.jpg"
  ctaButtons={[
    { text: 'Book a demo', href: '/contact', variant: 'primary' },
    { text: 'Learn more', href: '/features', variant: 'outline' }
  ]}
/>
```

---

## Need More Help?

If you're still experiencing issues after following this guide:

1. **Check the feedback document** at `FEEDBACK_FOR_OTHER_TEAM.md` for detailed explanations
2. **Verify all imports** are using correct casing
3. **Check browser console** for specific error messages
4. **Inspect Network tab** to ensure CSS file loads
5. **Compare your code** line-by-line with the template examples

Remember: The most common issues are forgetting to import `Gradient` and using `undefined` in the style prop. Double-check these two things first!
