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
  TableCellsIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  CloudArrowDownIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  PencilSquareIcon,
  BoltIcon
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
            <Subheading>PRODUCT TOUR</Subheading>
            <h1 className="mt-2 font-display text-balance text-5xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-7xl/[0.8] md:text-7xl/[0.8]">
              The Extractor Grid
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Turn geological PDFs into clean, export‑ready tables—ready to import into your tool of choice.
            </p>
          </div>

          {/* Video Player Section - Using lite-youtube-embed */}
          <div className="mt-16 relative">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                <div className="aspect-video w-full">
                  <LiteYouTubeEmbed 
                    videoid="qGk6nN2uFWg" 
                    title="Extractor Grid / Mine Seek"
                    playlabel="Play demonstration video: See how Extractor Grid structures geological data"
                    params="controls=1&enablejsapi=1"
                    jsApi={true}
                    style={{ backgroundImage: 'url(/screenshots/extractor-grid.png)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:justify-center">
            <Button href="/contact" className="w-full sm:w-auto">Book a demo</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function KeyFeatures() {
  const features = [
    // Existing six (with improved copy where requested)
    {
      icon: DocumentMagnifyingGlassIcon,
      title: 'Advanced Field Detection',
      description: 'Pinpoint drill hole collars, downhole surveys, and lithology logs buried in complex technical reports.'
    },
    {
      icon: TableCellsIcon,
      title: 'Intelligent Schema Mapping',
      description: 'Convert PDFs into drill-ready spreadsheets with standardised columns for depths, azimuths, and grades.'
    },
    {
      icon: SparklesIcon,
      title: 'Agentic-AI Processing',
      description: 'Reads surrounding text to infer units, formations, and methods, reducing errors and hallucinations.'
    },
    {
      icon: CloudArrowDownIcon,
      title: 'Export Ready Data',
      description: 'One‑click export to industry formats—CSV, Excel, and GIS for Leapfrog, Micromine, and Surpac.'
    },
    {
      icon: PencilIcon,
      title: 'Decipher Handwritten Notes',
      description: 'Transcribe field notes, hand‑logged intervals, and annotated maps from decades of exploration.'
    },
    {
      icon: QuestionMarkCircleIcon,
      title: 'On‑Demand Answers',
      description: 'Ask plain‑English questions across your documents to get accurate answers in seconds.'
    },
    // TODO: Add back in
    // {
    //   icon: BoltIcon,
    //   title: 'Lightning Fast',
    //   description: 'Process hundreds of documents in minutes—100× faster than manual extraction.'
    // },
    // {
    //   icon: ClipboardDocumentCheckIcon,
    //   title: 'Quality Assured',
    //   description: 'Built‑in validation ensures data accuracy with confidence scores for every extraction.'
    // },
    // {
    //   icon: PencilSquareIcon,
    //   title: 'Human‑in‑the‑loop Controls',
    //   description: 'Rerun a row, edit results, or clear and try again—balance automation with expert review.'
    // }
  ]

  return (
    <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
      <Container>
        <div className="text-center">
          <Subheading>AT A GLANCE</Subheading>
          <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
            Unlock the value hidden in your exploration archives
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
          <Subheading dark>UPLOAD • EXTRACT • EXPORT</Subheading>
          <Heading as="h2" dark className="mt-2 max-w-3xl mx-auto">
            Transform exploration reports into actionable datasets
          </Heading>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <ArrowUpTrayIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              Upload your documents
            </h3>
            <p className="mt-4 text-gray-400">
              Simply drag and drop any report. Digital or scanned, modern or historical—we handle them all.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <SparklesIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              AI extracts valuable data
            </h3>
            <p className="mt-4 text-gray-400">
              Our custom AI agents transform your documents into a clean schema based on your desired format.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
              <ArrowDownTrayIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              Ready to use
            </h3>
            <p className="mt-4 text-gray-400">
              Your data is now correctly formatted and ready to use in modelling and analysis.
            </p>
          </div>
        </div>

        {/* Progress rail - uses same grid structure as cards above for perfect alignment */}
        <div className="mt-12 hidden lg:block">
          {/* Icons and connecting line */}
          <div className="grid grid-cols-3 gap-12">
            {/* First column with icon and line start */}
            <div className="relative flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 ring-1 ring-white/20 z-10">
                <ArrowUpTrayIcon className="h-4 w-4 text-white" />
              </div>
              {/* Line extends from center to right edge of column */}
              <div className="absolute left-1/2 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
            </div>
            
            {/* Middle column with icon and line through */}
            <div className="relative flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 ring-1 ring-white/20 z-10">
                <SparklesIcon className="h-4 w-4 text-white" />
              </div>
              {/* Line extends through entire column */}
              <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
            </div>
            
            {/* Last column with icon and line end */}
            <div className="relative flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 ring-1 ring-white/20 z-10">
                <ArrowDownTrayIcon className="h-4 w-4 text-white" />
              </div>
              {/* Line extends from left edge to center of column */}
              <div className="absolute left-0 right-1/2 top-1/2 h-px -translate-y-1/2 bg-white/10" />
            </div>
          </div>

          {/* Labels in same grid structure */}
          <div className="mt-3 grid grid-cols-3 gap-12 text-center text-white/80">
            <span className="text-sm">Upload</span>
            <span className="text-sm">Extract</span>
            <span className="text-sm">Export</span>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TemplateLibrary() {
  const templates = [
    {
      eyebrow: 'Template',
      title: 'Stratigraphic Intervals',
      description: 'Extract complete stratigraphy intervals in one pass with mapped headers.'
    },
    {
      eyebrow: 'Template',
      title: 'Lithology Intervals',
      description: 'Capture lithology descriptions and depths as clean rows.'
    },
    {
      eyebrow: 'Template',
      title: 'Collar Information',
      description: 'Pull hole ID, project name, and location fields consistently.'
    },
    {
      eyebrow: 'Template',
      title: 'Survey Information',
      description: 'Standardise survey measurements and metadata.'
    },
    {
      eyebrow: 'Template',
      title: 'Mineralisation Intervals',
      description: 'Extract mineralisation with depths and grades at scale.'
    },
    {
      eyebrow: 'Template',
      title: 'Alteration Zones',
      description: 'Extract hydrothermal alteration zones and assemblages from drill logs.'
    },
  ]

  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Subheading>TEMPLATES</Subheading>
        <Heading as="h2" className="mt-2">
          Template library for geology
        </Heading>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t, i) => (
          <BentoCard
            key={i}
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
            className="rounded-2xl"
          />
        ))}
      </div>
    </Container>
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
              Book a demo
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

export default function ExtractorGridDemo() {
  return (
    <div className="overflow-hidden">
      <GradientBackground />
      <VideoHero />
      <main>
        <KeyFeatures />
        {/* <TemplateLibrary /> */} {/* TODO: Add back in */}
        <HowItWorks />
        {/* <UseCases /> */} {/* TODO: Add back in */}  
      </main>
      <Footer />
    </div>
  )
}
