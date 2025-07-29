'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Subheading } from './text'

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  fadeIntensity = 1,
}) {
  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef(null)

  // Handle mobile tap to trigger animation
  const handleTouchStart = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    
    setIsActive(true)
    // Keep animation running for 2 seconds after tap
    timerRef.current = setTimeout(() => setIsActive(false), 2000)
  }

  return (
    <motion.div
      initial="idle"
      whileHover="active"
      animate={isActive ? "active" : "idle"}
      onTouchStart={handleTouchStart}
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'group relative flex flex-col overflow-hidden rounded-lg',
        'bg-white shadow-sm ring-1 ring-black/5',
        'data-[dark]:bg-gray-800 data-[dark]:ring-white/15',
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes('top') && (
          <div 
            className="absolute inset-0 bg-gradient-to-b" 
            style={{
              background: dark 
                ? `linear-gradient(to bottom, rgba(31, 41, 55, ${Math.min(1, Math.max(0, fadeIntensity))}) 0%, rgba(31, 41, 55, 0) ${Math.min(100, 50 + (50 * (1-fadeIntensity)))}%)`
                : `linear-gradient(to bottom, rgba(255, 255, 255, ${Math.min(1, Math.max(0, fadeIntensity))}) 0%, rgba(255, 255, 255, 0) ${Math.min(100, 50 + (50 * (1-fadeIntensity)))}%)`
            }}
          />
        )}
        {fade.includes('bottom') && (
          <div
            className="absolute inset-0 bg-gradient-to-t"
            style={{
              background: dark 
                ? `linear-gradient(to top, rgba(31, 41, 55, ${Math.min(1, Math.max(0, fadeIntensity))}) 0%, rgba(31, 41, 55, 0) ${Math.min(100, 50 + (50 * (1-fadeIntensity)))}%)`
                : `linear-gradient(to top, rgba(255, 255, 255, ${Math.min(1, Math.max(0, fadeIntensity))}) 0%, rgba(255, 255, 255, 0) ${Math.min(100, 50 + (50 * (1-fadeIntensity)))}%)`
            }}
          />
        )}
      </div>
      <div className="relative p-10">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
