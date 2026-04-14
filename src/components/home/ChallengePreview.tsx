import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import SectionHeading from '../ui/SectionHeading'
import { institutional } from '../../data/site'

export default function ChallengePreview() {
  return (
    <section className="border-b border-line bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Public accountability"
          title={institutional.challenge.title}
          description={institutional.challenge.intro}
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-ink">{institutional.challenge.qualifying.title}</h3>
            <ul className="space-y-3 text-base leading-relaxed text-muted">
              {institutional.challenge.qualifying.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/70" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">{institutional.challenge.qualifying.note}</p>
          </div>
          <div className="space-y-4 rounded-lg border border-line bg-paper p-8">
            <p className="text-base leading-relaxed text-muted">{institutional.challenge.response}</p>
            <p className="text-base leading-relaxed text-muted">{institutional.challenge.closing}</p>
            <ButtonLink to="/challenge">Read the full process</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
