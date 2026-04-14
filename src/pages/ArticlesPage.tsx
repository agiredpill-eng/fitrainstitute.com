import PageShell from '../components/pages/PageShell'
import Prose from '../components/ui/Prose'

export default function ArticlesPage() {
  return (
    <PageShell
      eyebrow="Media"
      title="Articles"
      subtitle="Long-form pieces derived from documented research, each with traceable citations and audit notes."
    >
      <Prose>
        <p>
          Articles are not standalone opinion. They reference the hierarchy of sources, disclose grading,
          and link to appendices where appropriate. Placeholder entries below; replace with your CMS or
          static data file when ready.
        </p>
        <h2>Recent (placeholder)</h2>
        <ul>
          <li>Source chains in classical tafsir: a working map (March 2026)</li>
          <li>Hadith grading disclosure: reader’s guide (February 2026)</li>
        </ul>
      </Prose>
    </PageShell>
  )
}
