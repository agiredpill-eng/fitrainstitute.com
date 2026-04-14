import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import { site } from '../../data/site'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <Container as="div" className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">Public research institution</p>
          <h1 className="mt-6 font-serif text-[2.65rem] font-normal leading-[1.08] tracking-tight text-ink sm:text-6xl sm:leading-[1.06] lg:text-7xl">
            Documented inquiry into revelation, evidence, and human purpose
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {site.tagline} The work is sourced to a fixed hierarchy, disclosed in full, and open to formal
            challenge, not optimised for personality or platform metrics.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink to="/research">Research Library</ButtonLink>
            <ButtonLink to="/methodology" variant="secondary">
              Methodology &amp; disclosure
            </ButtonLink>
          </div>

          <p className="mt-14 text-xs text-muted">
            Archive before audience · Visible source chains · Published corrections when wrong
          </p>
        </div>
      </Container>
    </section>
  )
}
