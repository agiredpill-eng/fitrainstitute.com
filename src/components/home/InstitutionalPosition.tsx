import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { institutional } from '../../data/site'

export default function InstitutionalPosition() {
  return (
    <section className="border-b border-line bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Positioning"
          title="A research institution, not a platform brand"
          description="The Fitra Institute produces scholarship you can audit: named sources, explicit grading, and public accountability."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-ink">{institutional.whatWeAre.title}</h3>
            {institutional.whatWeAre.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-ink">{institutional.whatWeAreNot.title}</h3>
            {institutional.whatWeAreNot.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
