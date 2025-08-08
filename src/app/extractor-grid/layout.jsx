import { siteMetadata } from '@/lib/metadata'

export const metadata = {
  title: 'Extractor Grid Demo | Mine Seek',
  description: 'See how Mine Seek’s Extractor Grid turns geological PDFs into clean, export‑ready tables with evidence and confidence.',
  openGraph: {
    title: 'Extractor Grid Demo | Mine Seek',
    description: 'See how Mine Seek’s Extractor Grid turns geological PDFs into clean, export‑ready tables with evidence and confidence.',
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Mine Seek Extractor Grid Demo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: siteMetadata.twitter.cardType,
    title: 'Extractor Grid Demo | Mine Seek',
    description: 'See how Mine Seek’s Extractor Grid turns geological PDFs into clean, export‑ready tables with evidence and confidence.',
    images: [siteMetadata.ogImage],
  },
}

export default function ExtractorTableLayout({ children }) {
  return children
}
