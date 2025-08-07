'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/button'
import { Heading, Subheading } from '@/components/text'
import { BentoCard } from '@/components/bento-card'
import { 
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  BoltIcon,
  CloudArrowDownIcon
} from '@heroicons/react/24/solid'
import LiteYouTubeEmbed from './LiteYouTubeEmbed'

function VideoHero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <div className="text-center">
            <Subheading>DEMO</Subheading>
            <h1 className="mt-2 font-display text-balance text-5xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-7xl/[0.8] md:text-7xl/[0.8]">
              The Extractor Table
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Transform unstructured geological data into structured insights with AI-powered extraction.
            </p>
          </div>

          {/* Video Player Section - Using lite-youtube-embed */}
          <div className="mt-16 relative">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                <div className="aspect-video w-full">
                  <LiteYouTubeEmbed 
                    videoid="qGk6nN2uFWg" 
                    title="Mine Seek Extractor Table Demo"
                    playlabel="Play demonstration video: Watch how Mine Seek transforms geological data"
                    params="controls=1&modestbranding=2&enablejsapi=1"
                    jsApi={true}
                    style={{ backgroundImage: 'url(/screenshots/extractor-table.png)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Book a Demo</Button>
            <Button variant="secondary" href="/pricing">
              See Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function KeyFeatures() {
  const features = [
    {
      icon: DocumentMagnifyingGlassIcon,
      title: 'Smart Data Recognition',
      description: 'Automatically identifies and extracts key geological data from PDFs, reports, and unstructured documents.'
    },
    {
      icon: ChartBarIcon,
      title: 'Instant Structuring',
      description: 'Converts raw data into organised tables with proper categorisation and standardised formats.'
    },
    {
      icon: SparklesIcon,
      title: 'AI-Powered Insights',
      description: 'Leverages advanced AI to understand context and extract meaningful patterns from your data.'
    },
    {
      icon: CloudArrowDownIcon,
      title: 'Export Ready',
      description: 'Export your structured data to Excel, CSV, or integrate directly with your existing systems.'
    },
    {
      icon: BoltIcon,
      title: 'Lightning Fast',
      description: 'Process hundreds of documents in minutes, not days. 100x faster than manual extraction.'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'Quality Assured',
      description: 'Built-in validation ensures data accuracy with confidence scores for every extraction.'
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
      <Container>
        <div className="text-center">
          <Subheading>FEATURES</Subheading>
          <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
            Everything you need to transform your data
          </Heading>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function HowItWorks() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <div className="text-center">
          <Subheading dark>HOW IT WORKS</Subheading>
          <Heading as="h2" dark className="mt-2 max-w-3xl mx-auto">
            From chaos to clarity in three simple steps
          </Heading>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              Upload Your Documents
            </h3>
            <p className="mt-4 text-gray-400">
              Simply drag and drop your geological reports, PDFs, or any unstructured data files into the Extractor Table.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              AI Processes & Extracts
            </h3>
            <p className="mt-4 text-gray-400">
              Our AI agents analyse your documents, understanding context and extracting relevant geological data automatically.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              Get Structured Results
            </h3>
            <p className="mt-4 text-gray-400">
              Receive clean, structured data tables ready for analysis, complete with validation scores and export options.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function UseCases() {
  return (
    <Container className="py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading>USE CASES</Subheading>
        <Heading as="h2" className="mt-2">
          Built for exploration teams
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          <BentoCard
            eyebrow="Historical Data"
            title="Legacy Report Processing"
            description="Convert decades of historical exploration reports into searchable, structured databases."
            className="rounded-2xl"
          />
          <BentoCard
            eyebrow="Compliance"
            title="Regulatory Submissions"
            description="Automatically extract and format data for WAMEX, SARIG, and other regulatory requirements."
            className="rounded-2xl"
          />
          <BentoCard
            eyebrow="Analysis"
            title="Assay Data Compilation"
            description="Extract and standardise assay results from multiple labs and formats into unified tables."
            className="rounded-2xl"
          />
          <BentoCard
            eyebrow="Research"
            title="Literature Review"
            description="Quickly extract relevant data from technical papers and research publications."
            className="rounded-2xl"
          />
        </div>
      </div>
    </Container>
  )
}

function CallToAction() {
  return (
    <div className="bg-gray-900 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-tighter text-white sm:text-5xl">
            Ready to transform your data workflow?
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            Join leading exploration teams using Mine Seek to accelerate their discoveries.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
              Book Your Demo
            </Button>
            <Button 
              variant="outline" 
              href="/pricing"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function ExtractorTableDemo() {
  return (
    <div className="overflow-hidden">
      <GradientBackground />
      <VideoHero />
      <main>
        <KeyFeatures />
        <HowItWorks />
        <UseCases />
      </main>
      <Footer />
    </div>
  )
}
