import PageShell from '../components/pages/PageShell'
import Prose from '../components/ui/Prose'
import { institutional } from '../data/site'

export default function MethodologyPage() {
  const m = institutional.methodology
  return (
    <PageShell
      eyebrow="Method"
      title="Methodology"
      subtitle="How work is produced, verified, corrected, and disclosed, including use of AI as a research instrument."
    >
      <Prose>
        <p>{m.disclosure}</p>

        <h2>{m.aiAssists.title}</h2>
        <ul>
          {m.aiAssists.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        <h2>{m.aiDoesNot.title}</h2>
        <ul>
          {m.aiDoesNot.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        <h2>{m.verification.title}</h2>
        {m.verification.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>{m.whenWrong.title}</h2>
        {m.whenWrong.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>Navigation for different readers</h2>
        <p>
          Muslims, sceptics, and veterans enter with different questions. The methodology does not change;
          only the framing of the entry path changes. Evidence standards remain identical across the site.
        </p>
      </Prose>
    </PageShell>
  )
}
