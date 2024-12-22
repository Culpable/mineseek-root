import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { PricingClient } from './pricing-client'

export const metadata = {
  title: 'Pricing',
  description:
    'Mining companies across Australia use Mine Seek to accelerate their exploration programmes. Book a demo today.',
}

export default function Pricing() {
  return <PricingClient />
}
