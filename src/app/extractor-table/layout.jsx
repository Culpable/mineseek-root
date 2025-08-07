import { siteMetadata } from '@/lib/metadata'

export const metadata = {
  title: 'Extractor Table Demo | Mine Seek',
  description: 'Watch how Mine Seek\'s AI-powered Extractor Table transforms unstructured geological data into actionable insights in seconds.',
  openGraph: {
    title: 'Extractor Table Demo | Mine Seek',
    description: 'Watch how Mine Seek\'s AI-powered Extractor Table transforms unstructured geological data into actionable insights in seconds.',
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Mine Seek Extractor Table Demo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: siteMetadata.twitter.cardType,
    title: 'Extractor Table Demo | Mine Seek',
    description: 'Watch how Mine Seek\'s AI-powered Extractor Table transforms unstructured geological data into actionable insights in seconds.',
    images: [siteMetadata.ogImage],
  },
}

export default function ExtractorTableLayout({ children }) {
  return children
}
