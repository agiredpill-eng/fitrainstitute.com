import PageShell from '../components/pages/PageShell'
import Prose from '../components/ui/Prose'
import { audiencePages } from '../data/audience'

export default function ForMuslimsPage() {
  const p = audiencePages.muslims
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.lead}>
      <Prose>
        {p.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </Prose>
    </PageShell>
  )
}
