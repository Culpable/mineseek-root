import '@/styles/tailwind.css'

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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
