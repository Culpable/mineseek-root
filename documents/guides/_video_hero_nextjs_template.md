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

## Step 3: Create the VideoHero Component

Create `src/components/video-hero.jsx`:

```jsx
'use client'

import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/text'
import LiteYouTubeEmbed from '@/components/lite-youtube-embed'

/**
 * VideoHero Component
 * 
 * A hero section that showcases a YouTube video with supporting content.
 * Includes a title, description, video player, and call-to-action buttons.
 * 
 * Props:
 *   - videoId: YouTube video ID (required)
 *   - title: Hero section title
 *   - subtitle: Hero section subtitle/description
 *   - videoTitle: Title shown on video player
 *   - videoThumbnail: Background image URL for video
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
      {/* Optional: Add gradient background */}
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      
      <Container className="relative">
        {/* Navigation */}
        <Navbar />
        
        {/* Hero content section */}
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          {/* Text content */}
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
                <div className="aspect-video w-full">
                  <LiteYouTubeEmbed 
                    videoid={videoId}
                    title={videoTitle}
                    playlabel={`Play demonstration video: ${videoTitle}`}
                    params="controls=1&enablejsapi=1"
                    jsApi={true}
                    style={{ backgroundImage: `url(${videoThumbnail})` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
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

## Step 4: Add CSS File

Create `public/lite-youtube-embed.css`:

```css
lite-youtube {
  display: block;
  contain: content;
  background-color: #000;
  background-image: 
    url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 68 39' preserveAspectRatio='xMidYMid slice'><g><circle cx='34' cy='20' r='17' fill='%23f1f1f1'/><path fill='%23212121' d='M27 24l17-10-17-10z'/></g></svg>);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

lite-youtube:not([js-api]) iframe {
  border: 0;
  height: 100%;
  width: 100%;
}

lite-youtube[loading='lazy'] {
  background-image: none;
}

lite-youtube::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  background-image: 
    linear-gradient(180deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0) 100%);
  background-position: top;
  background-repeat: repeat-x;
  height: 28px;
  width: 100%;
  pointer-events: none;
}
```

## Step 5: Use VideoHero in Your Page

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

## Troubleshooting

**Video not loading?**
- Check that the YouTube video ID is correct
- Ensure the video is public or unlisted (not private)
- Verify `lite-youtube-embed.css` is in `/public` folder

**Player API not working?**
- Make sure `jsApi={true}` is set
- Ensure the component is mounted before calling `getYTPlayer()`
- Check browser console for errors

**Styling issues?**
- Wrap the component in a container with `aspect-video` class
- Ensure Tailwind CSS is properly configured
- Check that CSS file is being loaded correctly
