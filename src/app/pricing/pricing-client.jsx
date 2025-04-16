'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/16/solid'

const tiers = [
  {
    name: 'Starter',
    slug: 'starter',
    description: 'Get started with AI-powered geological insights.',
    priceMonthly: 429,
    currency: 'AUD',
    href: '/contact',
    highlights: [
      //   { description: 'Up to 5 team members' },
      { description: 'Process up to 500 documents monthly' },
      { description: 'Basic geological query augmentation' },
      { description: 'Standard map visualisation' },
      { description: 'Agentic AI workflows', disabled: true },
      { description: 'Custom data integration pipelines', disabled: true },
      { description: 'Field notes digitisation', disabled: true },
      { description: 'Custom in-house training', disabled: true },
    ],
    features: [
      //   { section: 'Search', name: 'User accounts', value: 5 },
      { section: 'Search', name: 'Concurrent searches', value: 1 },
      { section: 'Processing', name: 'Monthly documents', value: '500' },
      { section: 'Processing', name: 'Document storage', value: '1,000 GB' },
      { section: 'AI Features', name: 'Query augmentation', value: 'Basic' },
      { section: 'AI Features', name: 'Geological image analysis', value: 'Basic' },
      { section: 'AI Features', name: 'Agentic AI workflows', value: false },
      { section: 'Analysis', name: 'Map visualisation', value: 'Standard' },
      { section: 'Analysis', name: 'Field notes digitisation', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'In-House Training', value: false },
    ],
  },
  {
    name: 'Growth',
    slug: 'growth',
    description: 'Accelerate discoveries with advanced AI tools.',
    priceMonthly: 829,
    currency: 'AUD',
    href: '/contact',
    highlights: [
      //   { description: 'Up to 15 team members' },
      { description: 'Process up to 5,000 documents monthly' },
      { description: 'Advanced geological query augmentation' },
      { description: 'Interactive map visualisation' },
      { description: 'Agentic AI workflows' },
      { description: 'Custom data integration pipelines', disabled: false },
      { description: 'Field notes digitisation', disabled: true },
      { description: 'Custom in-house training', disabled: true },
    ],
    features: [
      //   { section: 'Search', name: 'User accounts', value: 15 },
      { section: 'Search', name: 'Concurrent searches', value: 5 },
      { section: 'Processing', name: 'Monthly documents', value: '5,000' },
      { section: 'Processing', name: 'Document storage', value: '10,000 GB' },
      { section: 'AI Features', name: 'Query augmentation', value: 'Advanced' },
      { section: 'AI Features', name: 'Geological image analysis', value: 'Advanced' },
      { section: 'AI Features', name: 'Agentic AI workflows', value: 'Standard' },
      { section: 'Analysis', name: 'Map visualisation', value: 'Interactive' },
      { section: 'Analysis', name: 'Field notes digitisation', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'In-House Training', value: false },
    ],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'Complete AI solution for frontier exploration teams.',
    priceMonthly: null,
    priceLabel: 'Custom',
    currency: 'AUD',
    href: '/contact',
    highlights: [
      //   { description: 'Unlimited team members' },
      { description: 'Unlimited document processing' },
      { description: 'Advanced geological query augmentation' },
      { description: 'Interactive map visualisation' },
      { description: 'Customised agentic AI workflows' },
      { description: 'Custom data integration pipelines' },
      { description: 'Field notes digitisation' },
      { description: 'Custom in-house training' },
    ],
    features: [
      //   { section: 'Search', name: 'User accounts', value: 'Unlimited' },
      { section: 'Search', name: 'Concurrent searches', value: 'Unlimited' },
      { section: 'Processing', name: 'Monthly documents', value: 'Unlimited' },
      { section: 'Processing', name: 'Document storage', value: 'Unlimited' },
      { section: 'Processing', name: 'Private Data Integration', value: true },
      { section: 'AI Features', name: 'Query augmentation', value: 'Custom' },
      { section: 'AI Features', name: 'Geological image analysis', value: 'Custom' },
      { section: 'AI Features', name: 'Agentic AI workflows', value: 'Custom' },
      { section: 'Analysis', name: 'Map visualisation', value: 'Interactive' },
      { section: 'Analysis', name: 'Field notes digitisation', value: true },
      { section: 'Support', name: 'Dedicated support', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: 'In-House Training', value: true },
      { section: 'Support', name: 'In-house training', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Subheading>Custom solutions</Subheading>
      <Heading as="h1">Pricing plans for teams of all sizes.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Mining companies across Australia use Mine Seek to accelerate their exploration. Custom plans to suit your needs.
      </Lead>
    </Container>
  )
}

function CustomBanner() {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl mx-auto max-w-4xl mt-20 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">Can’t find the perfect fit? We’ll create one.</h2>
          <p className="mt-3 text-lg text-gray-600">Custom plans tailored to your exploration team’s specific needs</p>
          <Button href="/contact" className="mt-6">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        
        <CustomBanner />
        
        {/* <LogoCloud className="mt-24" /> */}
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            {tier.priceMonthly ? (
              <>
                <div className="text-5xl font-medium text-gray-950">
                  ${tier.priceMonthly}
                </div>
                <div className="text-sm/5 text-gray-950/75">
                  <p>AUD/user</p>
                  <p>per month</p>
                </div>
              </>
            ) : (
              <div className="text-5xl font-medium text-gray-950">
                {tier.priceLabel}
              </div>
            )}
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Book a Demo</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Key features:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({ selectedTier }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-[selected]:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-slate-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-[--button-width] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={tier === selectedTier ? true : undefined}
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Book a Demo
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Book a Demo</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pb-0 pt-4 data-[selected]:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Book a Demo
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pb-0 pt-10 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={selectedTier === tier ? true : undefined}
                          className="p-4 data-[selected]:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIconCustom className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIconCustom(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pb-24 pt-72 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  Mine Seek’s ability to cross-reference multiple data sources has radically accelerated our decision making. We’re making more informed decisions with greater confidence.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Stephanie</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                    Exploration Manager
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently asked questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your questions answered.
        </Heading>
        <div className="mx-auto mb-32 mt-16 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">
              What measures are in place to ensure the security of our data?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Data security is our top priority. We employ enterprise-grade encryption, secure data centres, and regular security audits. All data is stored in Australia and complies with relevant mining industry regulations and data protection standards.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I access the platform on mobile devices?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, Mine Seek offers a responsive web interface that works seamlessly across desktop and mobile devices, allowing your team to access geological insights anywhere in the field.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can we customise the AI workflows for our specific needs?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, our platform is highly customisable. Enterprise clients can define custom AI workflows, integrate private data sources, and configure the system to match their specific exploration processes and requirements.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What kind of support do you offer?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              We offer comprehensive support through multiple channels, including dedicated account management for Enterprise clients, technical support, and regular training sessions to help your team get the most out of Mine Seek.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can Mine Seek integrate with our existing geological software?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, Mine Seek integrates with major geological software and databases. Our Enterprise plan includes custom integrations with your internal systems and proprietary databases.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function PricingContent() {
  const searchParams = useSearchParams()
  const selectedSlug = searchParams.get('tier') || 'starter'
  const selectedTier = tiers.find(tier => tier.slug === selectedSlug) || tiers[0]

  return (
    <>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={selectedTier} />
      <Testimonial />
      {/* <FrequentlyAskedQuestions /> */}
    </>
  )
}

export function PricingClient() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Suspense fallback={<PricingCards />}>
        <PricingContent />
      </Suspense>
      <Footer />
    </main>
  )
} 