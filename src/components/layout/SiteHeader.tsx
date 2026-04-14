import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { audienceNav, primaryNav } from '../../data/navigation'
import { site } from '../../data/site'
import Container from '../ui/Container'
import ButtonLink from '../ui/ButtonLink'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    'text-sm transition',
    isActive ? 'font-medium text-white' : 'text-zinc-400 hover:text-white',
  ].join(' ')
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 text-white backdrop-blur-md">
      <Container as="div" className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link to="/" className="group flex shrink-0 flex-col leading-tight">
          <span className="font-serif text-lg tracking-tight text-white sm:text-xl">{site.name}</span>
          <span className="hidden text-[11px] text-zinc-500 sm:block">Research · Sources · Accountability</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/research" className={navLinkClass}>
            Research
          </NavLink>
          <NavLink to="/sources" className={navLinkClass}>
            Sources
          </NavLink>
          <NavLink to="/challenge" className={navLinkClass}>
            Challenge
          </NavLink>
          <NavLink to="/methodology" className={navLinkClass}>
            Methodology
          </NavLink>
          <ButtonLink to="/contact" variant="onDark" className="!py-2 !text-xs">
            Contact
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-zinc-800 bg-black lg:hidden">
          <Container as="div" className="flex flex-col gap-1 py-4">
            {[...primaryNav, ...audienceNav].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  )
}
