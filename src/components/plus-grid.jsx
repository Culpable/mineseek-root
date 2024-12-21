import { clsx } from 'clsx'

export function PlusGrid({ className = '', children }) {
  return <div className={className}>{children}</div>
}

export function PlusGridRow({ className = '', children }) {
  return (
    <div
      className={clsx(
        className,
        'group/row relative isolate pt-[calc(theme(spacing.2)+1px)] last:pb-[calc(theme(spacing.2)+1px)]',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
        <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
        <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
        <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
      </div>
      {children}
    </div>
  )
}

export function PlusGridItem({ className = '', isLogo = false, children }) {
  return (
    <div className={clsx(className, 'group/item relative')}>
      {/* Top left dot - stays the same for both logo and nav items */}
      <PlusGridIcon
        placement="top left"
        className="hidden group-first/item:block"
      />
      {isLogo ? (
        // Logo version - Top right dot
        // Customize the -right-6 value to move the dot:
        // -right-4 = closer to logo
        // -right-11 = further from logo
        <PlusGridIcon 
          placement="top right"
          customPosition="-right-11" // <-- Adjust this value for top right logo dot
        />
      ) : (
        // Navigation items - Top right dot (stays at default -right-2)
        <PlusGridIcon placement="top right" />
      )}
      {/* Bottom left dot - stays the same for both logo and nav items */}
      <PlusGridIcon
        placement="bottom left"
        className="hidden group-last/row:group-first/item:block"
      />
      {isLogo ? (
        // Logo version - Bottom right dot
        // Customize the -right-6 value to move the dot:
        // -right-4 = closer to logo
        // -right-11 = further from logo
        <PlusGridIcon
          placement="bottom right"
          customPosition="-right-11"
          className="hidden group-last/row:block"
        />
      ) : (
        // Navigation items - Bottom right dot (stays at default -right-2)
        <PlusGridIcon
          placement="bottom right"
          className="hidden group-last/row:block"
        />
      )}
      {children}
    </div>
  )
}

export function PlusGridIcon({ className = '', placement, customPosition }) {
  let [yAxis, xAxis] = placement.split(' ')

  let yClass = yAxis === 'top' ? '-top-2' : '-bottom-2'
  let xClass = customPosition || (xAxis === 'left' ? '-left-2' : '-right-2')

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(
        className,
        'absolute size-[15px] fill-black/10',
        yClass,
        xClass,
      )}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  )
}
