import '@/styles/tailwind.css'
import localFont from 'next/font/local'

// Load Switzer font files locally for optimal performance
const switzer = localFont({
  src: [
    {
      path: '../fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap', // Use 'swap' to prevent render blocking
  variable: '--font-switzer', // CSS variable for the font
  preload: true,
  fallback: ['system-ui', 'sans-serif'], // System fallback fonts
})

export const metadata = {
  title: {
    template: '%s | Mine Seek',
    default: 'Mine Seek: Accelerate Your Exploration with AI',
  },
  description:
    'Mine Seek is helping exploration teams across Australia radically accelerate their geological analysis through AI-powered insights. Find out how agentic AI revolutionises exploration.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    maskIcon: {
      url: '/safari-pinned-tab.svg',
      color: '#ffffff',
    },
    manifest: '/site.webmanifest',
  },
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml',
    },
  ],
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={switzer.variable}>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
