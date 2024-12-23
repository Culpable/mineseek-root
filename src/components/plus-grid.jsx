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

export function PlusGridItem({ 
  className = '', 
  isLogo = false, 
  isFooterLogo = false,  // New prop for footer logo
  isFooterItem = false,  // New prop for footer items
  children 
}) {
  return (
    <div className={clsx(className, 'group/item relative')}>
      {/* Top Left Dot */}
      {isLogo ? (
        // Navbar logo version
        <PlusGridIcon
          placement="top left"
          customPosition="-left-3"
          className="hidden group-first/item:block"
        />
      ) : isFooterLogo ? (
        // Footer logo version
        <PlusGridIcon
          placement="top left"
          customPosition="-left-4 sm:-left-6"  // Adjust this value for footer logo
          className="hidden group-first/item:block"
        />
      ) : isFooterItem ? (
        // Footer items version
        <PlusGridIcon
          placement="top left"
          customPosition="-left-4"  // Adjust this value for footer items
          className="hidden group-first/item:block"
        />
      ) : (
        // Default navigation version
        <PlusGridIcon
          placement="top left"
          className="hidden group-first/item:block"
        />
      )}

      {/* Top Right Dot */}
      {isLogo ? (
        // Navbar logo version
        <PlusGridIcon 
          placement="top right"
          customPosition="-right-10"
        />
      ) : isFooterLogo ? (
        // Footer logo version
        <PlusGridIcon 
          placement="top right"
          customPosition="-right-8"  // Adjust this value for footer logo
        />
      ) : isFooterItem ? (
        // Footer items version
        <PlusGridIcon 
          placement="top right"
          customPosition="-right-4"  // Adjust this value for footer items (Copyright)
        />
      ) : (
        // Default navigation version
        <PlusGridIcon placement="top right" />
      )}

      {/* Bottom Left Dot */}
      {isLogo ? (
        // Navbar logo version
        <PlusGridIcon
          placement="bottom left"
          customPosition="-left-3"
          className="hidden group-last/row:group-first/item:block"
        />
      ) : isFooterLogo ? (
        // Footer logo version
        <PlusGridIcon
          placement="bottom left"
          customPosition="-left-6"  // Adjust this value for footer logo
          className="hidden group-last/row:group-first/item:block"
        />
      ) : isFooterItem ? (
        // Footer items version
        <PlusGridIcon
          placement="bottom left"
          customPosition="-left-4"  // Adjust this value for footer items
          className="hidden group-last/row:group-first/item:block"
        />
      ) : (
        // Default navigation version
        <PlusGridIcon
          placement="bottom left"
          className="hidden group-last/row:group-first/item:block"
        />
      )}

      {/* Bottom Right Dot */}
      {isLogo ? (
        // Navbar logo version
        <PlusGridIcon
          placement="bottom right"
          customPosition="-right-10"
          className="hidden group-last/row:block"
        />
      ) : isFooterLogo ? (
        // Footer logo version
        <PlusGridIcon
          placement="bottom right"
          customPosition="-right-8"  // Adjust this value for footer logo
          className="hidden group-last/row:block"
        />
      ) : isFooterItem ? (
        // Footer items version
        <PlusGridIcon
          placement="bottom right"
          customPosition="-right-4"  // Adjust this value for footer items
          className="hidden group-last/row:block"
        />
      ) : (
        // Default navigation version
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
