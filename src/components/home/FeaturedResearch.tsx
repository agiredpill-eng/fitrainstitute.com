import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import GlowCard from '../ui/GlowCard'
import SectionHeading from '../ui/SectionHeading'
import { featuredResearch } from '../../data/content'
import { useRotatingOrder } from '../../hooks/useRotatingOrder'

const kindLabel: Record<string, string> = {
  article: 'Article',
  podcast: 'Podcast',
  video: 'Video',
}

export default function FeaturedResearch() {
  const { ordered, cycle } = useRotatingOrder(featuredResearch, 9000)

  return (
    <section className="relative border-b border-zinc-800 bg-gradient-to-b from-black via-zinc-950 to-black py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_80%_10%,rgba(180,160,255,0.1),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          variant="dark"
          eyebrow="From the archive"
          title="Featured outputs, secondary to the documented record"
          description="Articles, audio, and video are published as derivatives of research programmes with traceable sources. Start from the library when you need the full chain."
        />
        <div
          key={cycle}
          className="grid gap-6 transition-all duration-700 ease-in-out lg:grid-cols-3"
        >
          {ordered.map((item) => (
            <GlowCard key={item.id} className="animate-in-shuffle flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  {kindLabel[item.kind]}
                </span>
                <span className="text-xs text-zinc-500">{item.date}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                Derived from: {item.derivedFrom}
              </p>
              <Link
                className="mt-6 inline-flex text-sm font-medium text-white underline-offset-4 transition hover:text-zinc-200 hover:underline"
                to={item.href}
              >
                View section
              </Link>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  )
}
