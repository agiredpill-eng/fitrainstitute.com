import PageShell from '../components/pages/PageShell'
import Prose from '../components/ui/Prose'

export default function PodcastsPage() {
  return (
    <PageShell
      eyebrow="Media"
      title="Podcasts"
      subtitle="Audio derived from lectures and research discussions, with transcripts and citation sheets published alongside."
    >
      <Prose>
        <p>
          Podcasts supplement the written record. When AI-assisted editing is used for transcripts, it is
          disclosed on the episode page. Primary sourcing remains in the Research Library and Source Index.
        </p>
        <h2>Episodes (placeholder)</h2>
        <ul>
          <li>Conversation: evidence, not personality (April 2026, transcript-linked)</li>
        </ul>
      </Prose>
    </PageShell>
  )
}
