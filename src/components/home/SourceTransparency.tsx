import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'
import SectionHeading from '../ui/SectionHeading'
import { institutional } from '../../data/site'

export default function SourceTransparency() {
  return (
    <section className="border-b border-line bg-paper py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Source transparency"
          title="Every claim traces to a named place in the hierarchy"
          description="No anonymous authority. No manufactured consensus. No publication without verification against the sources we cite."
        />
        <ol className="mx-auto max-w-3xl list-decimal space-y-4 pl-6 text-base leading-relaxed text-muted marker:font-medium marker:text-ink">
          {institutional.sourceHierarchy.items.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          {institutional.sourceHierarchy.footnote}
        </p>
        <div className="mt-10">
          <ButtonLink to="/sources" variant="secondary">
            Open Source Index
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
