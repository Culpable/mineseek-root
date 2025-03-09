import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Company',
  description:
    "We're on a mission to transform mining exploration by harnessing the power of AI and advanced data analysis.",
}

function Header() {
  return (
    <Container className="mt-16">
      <Subheading>Our Company</Subheading>
      <Heading as="h1">Transforming mining exploration with AI.</Heading>
      <Lead className="mt-6 max-w-3xl">
        We're on a mission to revolutionise how mining exploration teams discover, analyse, and interpret geological data through advanced AI and intelligent workflows.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-base text-neutral-600">
            At Mine Seek, we are dedicated to transforming the mining exploration industry through cutting-edge AI technology. Our mission is to help exploration teams rapidly analyse and interpret large volumes of unstructured geological data, saving time and reducing errors in the process.
          </p>
          <p className="mt-8 text-base text-neutral-600">
            We’re customer-obsessed—putting in the time to understand the complex challenges faced by mining exploration professionals. Through our advanced AI capabilities, including natural language processing, machine learning, and geoscience-specific computer vision, we're helping teams make more informed decisions and discover valuable opportunities faster than ever before.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Exploration Impact</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-base text-neutral-600">Analysis Speed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={10} />x
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-base text-neutral-600">Documents Processed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={10} end={80} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-base text-neutral-600">Mining Sites Analysed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={5} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-base text-neutral-600">Insights Generated</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={1.2} decimals={1} />M
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-base">
        <h3 className="font-medium">{name}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Led by AI experts.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Mine Seek brings together world-class expertise in artificial intelligence, machine learning, and geological sciences to create the future of mining exploration.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-base text-neutral-600">
            Our journey began when a team of AI researchers and experienced geologists recognised a critical gap in the mining exploration industry: the need for intelligent automation in processing vast amounts of geological data. What started as a research project has evolved into Mine Seek, a comprehensive platform that's revolutionising how exploration teams work.
          </p>
          <p className="mt-8 text-base text-neutral-600">
            Today, Mine Seek transforms mining exploration by combining advanced AI technologies with deep domain expertise. Our platform helps mining exploration professionals across Australia to rapidly analyse geological data, identify promising opportunities, and make more informed decisions through our integrated, intelligent platform.
          </p>
          {/* <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div> */}
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img="/team/emily-selman.jpg"
        />
      </ul> */}
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Backed by industry pioneers.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are fortunate to be backed by leading investors who share our vision for transforming the mining exploration industry through technological innovation.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />
          <p className="mt-6 max-w-lg text-base text-neutral-600">
            Remington Schwartz has been a driving force in the mining technology sector, backing innovative companies that leverage AI and machine learning to transform traditional industries. Their deep expertise in both technology and natural resources provides their portfolio companies with valuable industry insights and connections.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-base text-neutral-600">
            Deccel has been at the forefront of innovation in the mining sector, investing in pioneering companies across various aspects of the industry. Their commitment to sustainable and efficient resource discovery aligns perfectly with Mine Seek's mission to revolutionise mining exploration through advanced technology.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-inset ring-gray-950/10 lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['\22'] after:absolute after:content-['\22']">
            We've reduced our data analysis time by 80% and discovered opportunities we would have otherwise missed.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              Head of Exploration, GeoTech Mining
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  return (
    <Container>
      <Subheading>Careers</Subheading>
      <Heading as="h3" className="mt-2">
        Join our innovative team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We're building the future of mining exploration with a global team of experts in AI, machine learning, and geoscience.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-10">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-5">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Design
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

function SectionPadding({ children }) {
  return <div className="my-32">{children}</div>
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      {/* <Investors /> */}
      <SectionPadding>
        {/* <Careers /> */}
      </SectionPadding>
      <Footer />
    </main>
  )
}
