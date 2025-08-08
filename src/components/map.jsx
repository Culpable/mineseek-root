'use client'

import { motion } from 'framer-motion'

function Marker({ src, top, offset, delay }) {
  return (
    <motion.div
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: 'easeOut' }}
      style={{ '--offset': `${offset}px`, top }}
      className="absolute left-[calc(50%+var(--offset))] size-[38px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
    >
      <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className="fill-black/5"
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className="fill-white"
        />
      </svg>
      <img
        alt=""
        src={src}
        className="absolute left-[7px] top-[4px] size-6 rounded-full"
      />
    </motion.div>
  )
}

export function Map() {
  return (
    <div aria-hidden="true" className="relative size-full">
      <div className="absolute inset-0 bg-[url(/map-australia.png)] bg-[length:400px_336px] bg-[center_top_20px] bg-no-repeat [mask-image:linear-gradient(to_bottom,black_50%,transparent)]" />
      {/* Optional: Add a subtle white overlay for more lightening */}
      <div className="absolute inset-0 bg-white/75" />
      <div className="absolute inset-0">
        {/* Darwin - North central */}
        <Marker src="/map/lithium.png" top={15} offset={-40} delay={0.1} />

        {/* Perth - West coast */}
        <Marker src="/map/cobalt.png" top={185} offset={-180} delay={0.15} />

        {/* Pilbara - Northwest WA */}
        <Marker src="/map/iron.png" top={110} offset={-155} delay={0.2} />

        {/* Brisbane - East coast */}
        <Marker src="/map/aluminium.png" top={150} offset={160} delay={0.3} />

        {/* Sydney - East coast */}
        <Marker src="/map/silver.png" top={210} offset={135} delay={0.5} />

        {/* Melbourne - Southeast corner */}
        <Marker src="/map/gold.png" top={245} offset={85} delay={0.7} />

        {/* Adelaide - South central */}
        <Marker src="/map/copper.png" top={205} offset={20} delay={0.9} />
      </div>
    </div>
  )
}
