import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import SectionHeading from '../ui/SectionHeading'
import { institutional } from '../../data/site'

export default function MethodologyCredibility() {
  const m = institutional.methodology
  return (
    <section className="bg-paper py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Method & credibility"
          title={m.title}
          description={m.disclosure}
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg text-ink">{m.aiAssists.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {m.aiAssists.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink">{m.aiDoesNot.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {m.aiDoesNot.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6 rounded-lg border border-line bg-white p-8">
            <div>
              <h3 className="font-serif text-lg text-ink">{m.verification.title}</h3>
              {m.verification.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink">{m.whenWrong.title}</h3>
              {m.whenWrong.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>
            <ButtonLink to="/methodology" variant="secondary">
              Full methodology
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
