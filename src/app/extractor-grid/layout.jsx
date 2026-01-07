import { pageMetadata } from '@/lib/metadata'

export const metadata = {
  title: pageMetadata.extractorGrid.title,
  description: pageMetadata.extractorGrid.description,
}

export default function ExtractorTableLayout({ children }) {
  return children
}
