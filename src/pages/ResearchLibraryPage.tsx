import PageShell from '../components/pages/PageShell'
import Prose from '../components/ui/Prose'

export default function ResearchLibraryPage() {
  return (
    <PageShell
      eyebrow="Research"
      title="Research Library"
      subtitle="Primary documents and programme notes: the anchor layer beneath articles, podcasts, and video."
    >
      <Prose>
        <p>
          The library holds working papers, appendices, and citation scaffolding. Media on this site is
          secondary output derived from these records. As programmes publish, entries will list title,
          abstract, source map, and revision history.
        </p>
        <h2>Placeholder shelf (edit in content layer)</h2>
        <ul>
          <li>
            <strong>Programme:</strong> Quranic citation architecture; status: in preparation
          </li>
          <li>
            <strong>Programme:</strong> Hadith evidence standards; status: in preparation
          </li>
          <li>
            <strong>Programme:</strong> Classical authority maps; status: in preparation
          </li>
        </ul>
        <p>
          Replace this block with structured data when PDFs and DOI-style identifiers are available. Keep
          every entry tied to the Source Index categories you maintain.
        </p>
      </Prose>
    </PageShell>
  )
}
