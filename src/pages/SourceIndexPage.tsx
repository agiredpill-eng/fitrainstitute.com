import PageShell from '../components/pages/PageShell'
import { placeholderSources, sourceIndexCategories } from '../data/content'

export default function SourceIndexPage() {
  return (
    <PageShell
      eyebrow="Transparency"
      title="Source Index"
      subtitle="A scalable catalogue of source chains, scholar profiles, grading references, citation categories, and appendices."
    >
      <div className="space-y-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {sourceIndexCategories.map((cat) => (
            <section
              key={cat.id}
              className="rounded-lg border border-line bg-white p-8 shadow-sm"
            >
              <h2 className="font-serif text-2xl text-ink">{cat.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{cat.description}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">Scaling note</p>
              <p className="mt-2 text-sm text-muted">
                Add JSON or CMS-backed lists per category. Cross-link each entry to research releases and
                challenge threads where relevant.
              </p>
            </section>
          ))}
        </div>

        <section>
          <h2 className="font-serif text-2xl text-ink">Sample entries (placeholder)</h2>
          <ul className="mt-6 divide-y divide-line rounded-lg border border-line bg-paper">
            {placeholderSources.map((s) => (
              <li key={s.id} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-ink">{s.label}</span>
                <span className="text-xs text-muted">{s.category}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  )
}
