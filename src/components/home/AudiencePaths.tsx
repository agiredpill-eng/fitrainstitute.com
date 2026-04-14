import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import GlowCard from '../ui/GlowCard'
import SectionHeading from '../ui/SectionHeading'
import { audiencePages } from '../../data/audience'
import { useRotatingOrder } from '../../hooks/useRotatingOrder'

const cards = [
  {
    key: 'muslims' as const,
    title: audiencePages.muslims.title,
    to: audiencePages.muslims.path,
    blurb: audiencePages.muslims.lead,
  },
  {
    key: 'sceptics' as const,
    title: audiencePages.sceptics.title,
    to: audiencePages.sceptics.path,
    blurb: audiencePages.sceptics.lead,
  },
  {
    key: 'veterans' as const,
    title: audiencePages.veterans.title,
    to: audiencePages.veterans.path,
    blurb: audiencePages.veterans.lead,
  },
] as const

export default function AudiencePaths() {
  const { ordered, cycle } = useRotatingOrder(cards, 7500)

  return (
    <section className="relative border-b border-zinc-800 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,140,255,0.12),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          variant="dark"
          eyebrow="Entry pathways"
          title="Three audiences, one standard of evidence"
          description="Muslims, sceptics, and veterans arrive with different questions. The institute answers in one language: sourced argument and disclosed method."
        />
        <div
          key={cycle}
          className="grid gap-6 transition-all duration-700 ease-in-out lg:grid-cols-3"
        >
          {ordered.map((c) => (
            <GlowCard key={c.key} className="animate-in-shuffle flex flex-col">
              <h3 className="font-serif text-2xl text-white">{c.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">{c.blurb}</p>
              <Link
                className="mt-8 inline-flex text-sm font-medium text-white underline-offset-4 transition hover:text-zinc-200 hover:underline"
                to={c.to}
              >
                Enter this pathway
              </Link>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  )
}
