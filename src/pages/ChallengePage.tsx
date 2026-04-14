import PageShell from '../components/pages/PageShell'
import { challengePage } from '../data/challenge'
import ButtonLink from '../components/ui/ButtonLink'

export default function ChallengePage() {
  return (
    <PageShell
      eyebrow="Accountability"
      title="Challenge the Work"
      subtitle={challengePage.intro}
    >
      <div className="max-w-3xl space-y-16">
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">{challengePage.whatCanBeChallenged.title}</h2>
          <ul className="space-y-3 text-base leading-relaxed text-muted">
            {challengePage.whatCanBeChallenged.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">{challengePage.validChallenge.title}</h2>
          <ul className="space-y-3 text-base leading-relaxed text-muted">
            {challengePage.validChallenge.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">{challengePage.invalidChallenge.title}</h2>
          <ul className="space-y-3 text-base leading-relaxed text-muted">
            {challengePage.invalidChallenge.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">{challengePage.submission.title}</h2>
          <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-muted marker:font-medium marker:text-ink">
            {challengePage.submission.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <ButtonLink to="/contact" variant="secondary">
            Go to contact form
          </ButtonLink>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">{challengePage.review.title}</h2>
          {challengePage.review.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-ink">{challengePage.archive.title}</h2>
          {challengePage.archive.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </section>
      </div>
    </PageShell>
  )
}
