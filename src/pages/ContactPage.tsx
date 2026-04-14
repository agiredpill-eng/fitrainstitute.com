import PageShell from '../components/pages/PageShell'
import { site } from '../data/site'

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contact"
      subtitle="Institutional correspondence, including formal challenges submitted under the published rules."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-4 text-sm leading-relaxed text-muted">
          <p>
            For general enquiries, use the email address below. For challenges, include the word{' '}
            <strong className="font-medium text-ink">Challenge</strong> in the subject line and follow the
            checklist on the Challenge page.
          </p>
          <p>
            Email:{' '}
            <a className="font-medium text-ink underline underline-offset-4" href={`mailto:${site.contactEmail}`}>
              {site.contactEmail}
            </a>
          </p>
          <p className="text-xs">
            A web form can replace this block later; keep fields aligned with challenge submission requirements
            so records stay consistent.
          </p>
        </div>

        <form
          className="space-y-4 rounded-lg border border-line bg-white p-8 shadow-sm"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Contact form placeholder"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Form (static placeholder)</p>
          <div className="space-y-2">
            <label className="block text-sm text-ink" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink outline-none ring-stone-400/40 focus:ring-2"
              type="text"
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-ink" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink outline-none ring-stone-400/40 focus:ring-2"
              type="email"
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-ink" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink outline-none ring-stone-400/40 focus:ring-2"
              type="text"
              placeholder="General enquiry or Challenge"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-ink" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink outline-none ring-stone-400/40 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper shadow-sm hover:bg-stone-800"
          >
            Submit (wire to backend later)
          </button>
        </form>
      </div>
    </PageShell>
  )
}
