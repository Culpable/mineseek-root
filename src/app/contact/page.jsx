import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { ContactForm } from './contact-form'
import { ContactDetails } from './contact-details'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'

export const metadata = {
  title: 'Contact Us',
  description: 'Ready to transform your mining exploration with AI? Contact us to see how we can accelerate your geological analysis and discovery process.',
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Container className="mt-16">
        <Subheading>Contact Us</Subheading>
        <Heading>Accelerate your exploration.</Heading>
        {/* <Lead className="mt-6 max-w-3xl">
          Ready to transform your mining exploration with AI? Contact us to see how we can help your team discover, analyse, and interpret geological data faster than ever before.
        </Lead> */}

        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
      
      <div className="my-32"></div>
      
      <Footer noCta={true} />
    </main>
  )
} 