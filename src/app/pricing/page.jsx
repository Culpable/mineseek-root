import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { PricingClient } from './pricing-client'
import { pageMetadata } from '@/lib/metadata'

export const metadata = {
  title: pageMetadata.pricing.title,
  description: pageMetadata.pricing.description,
}

export default function Pricing() {
  return <PricingClient />
}
