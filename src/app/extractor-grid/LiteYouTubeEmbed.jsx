'use client'

import { useEffect, useRef, useState } from 'react'

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
        const defaultParams = 'modestbranding=1&rel=0&start=0rel=0'
        const finalParams = params ? `${defaultParams}&${params}` : defaultParams
        liteYoutube.setAttribute('params', finalParams)
        
        // Enable YouTube IFrame Player API if requested
        if (jsApi) {
          liteYoutube.setAttribute('js-api', '')
        }
        
        // Apply minimal styling - let lite-youtube handle its own layout
        liteYoutube.style.cssText = `
          width: 100%;
          height: 100%;
          ${style.backgroundImage ? `background-image: ${style.backgroundImage};` : ''}
        `
        
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
  }, [isLoaded, jsApi])

  return (
    <>
      {/* Load CSS immediately to avoid Tailwind resets hiding the play icon */}
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
            {/* Fallback control that does NOT navigate to YouTube */}
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
