import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | Mine Seek',
    default: 'Mine Seek: Accelerate Exploration with AI',
  },
  description:
    'Mine Seek is helping exploration teams across Australia radically accelerate their geological analysis through AI-powered insights. Find out how agentic AI revolutionises exploration.',
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
