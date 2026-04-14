import PageShell from '../components/pages/PageShell'
import Prose from '../components/ui/Prose'

export default function VideosPage() {
  return (
    <PageShell
      eyebrow="Media"
      title="Videos"
      subtitle="Recorded lectures and briefings, secondary to the documented research they summarise."
    >
      <Prose>
        <p>
          Video is for accessibility and teaching clarity. Claims made in video must match published
          sourcing; if a clip is clipped for distribution, the full citation context remains in the
          archive.
        </p>
        <h2>Releases (placeholder)</h2>
        <ul>
          <li>Institutional briefing series (forthcoming)</li>
        </ul>
      </Prose>
    </PageShell>
  )
}
