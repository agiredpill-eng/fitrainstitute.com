import PageShell from '../components/pages/PageShell'
import Prose from '../components/ui/Prose'
import { institutional, site } from '../data/site'

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="The Fitra Institute"
      subtitle={site.tagline}
    >
      <Prose>
        <h2>{institutional.whatWeAre.title}</h2>
        {institutional.whatWeAre.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>{institutional.whatWeAreNot.title}</h2>
        {institutional.whatWeAreNot.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>{institutional.audiences.title}</h2>
        <p>{institutional.audiences.intro}</p>
        <ul>
          <li>{institutional.audiences.muslims}</li>
          <li>{institutional.audiences.sceptics}</li>
          <li>{institutional.audiences.veterans}</li>
        </ul>

        <h2>{institutional.sourceHierarchy.title}</h2>
        <p>{institutional.sourceHierarchy.intro}</p>
        <ol>
          {institutional.sourceHierarchy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>{institutional.sourceHierarchy.footnote}</p>

        <h2>{institutional.methodology.title}</h2>
        <p>{institutional.methodology.disclosure}</p>
        <h3>{institutional.methodology.aiAssists.title}</h3>
        <ul>
          {institutional.methodology.aiAssists.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <h3>{institutional.methodology.aiDoesNot.title}</h3>
        <ul>
          {institutional.methodology.aiDoesNot.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <h3>{institutional.methodology.verification.title}</h3>
        {institutional.methodology.verification.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h3>{institutional.methodology.whenWrong.title}</h3>
        {institutional.methodology.whenWrong.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>{institutional.challenge.title}</h2>
        <p>{institutional.challenge.intro}</p>
        <h3>{institutional.challenge.qualifying.title}</h3>
        <ul>
          {institutional.challenge.qualifying.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p>{institutional.challenge.qualifying.note}</p>
        <p>{institutional.challenge.response}</p>
        <p>{institutional.challenge.closing}</p>

        <h2>{institutional.fitra.title}</h2>
        {institutional.fitra.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Prose>
    </PageShell>
  )
}
