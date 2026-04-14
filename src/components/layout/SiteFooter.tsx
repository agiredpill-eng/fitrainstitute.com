import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { audienceNav, primaryNav } from '../../data/navigation'
import { site } from '../../data/site'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  const linkClass = 'text-zinc-400 transition hover:text-white'

  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <Container as="div" className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-xl text-white">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">{site.tagline}</p>
            <p className="mt-6 text-xs text-zinc-500">
              Not a dawah platform, sect, or personality-led brand. A research institution with
              published source chains and formal accountability.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Institute</p>
              <ul className="mt-4 space-y-2 text-sm">
                {primaryNav
                  .filter((i) => !['Home', 'Articles', 'Podcasts', 'Videos'].includes(i.label))
                  .map((item) => (
                    <li key={item.to}>
                      <Link className={linkClass} to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Media</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link className={linkClass} to="/articles">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} to="/podcasts">
                    Podcasts
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} to="/videos">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link className={linkClass} to="/research">
                    Research Library
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Audiences</p>
              <ul className="mt-4 space-y-2 text-sm">
                {audienceNav.map((item) => (
                  <li key={item.to}>
                    <Link className={linkClass} to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-zinc-800 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Evidence-first publication; corrections on the record.
          </p>
          <p>
            Contact:{' '}
            <a
              className="text-zinc-300 underline underline-offset-4 transition hover:text-white"
              href={`mailto:${site.contactEmail}`}
            >
              {site.contactEmail}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
