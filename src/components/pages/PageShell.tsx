import type { ReactNode } from 'react'
import Container from '../ui/Container'

type Props = {
  title: string
  subtitle?: string
  eyebrow?: string
  children: ReactNode
}

export default function PageShell({ title, subtitle, eyebrow, children }: Props) {
  return (
    <div className="border-b border-line bg-white">
      <Container as="section" className="py-16 sm:py-20 lg:py-24">
        <header className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{eyebrow}</p>
          ) : null}
          <h1 className="font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">{title}</h1>
          {subtitle ? <p className="text-lg leading-relaxed text-muted">{subtitle}</p> : null}
        </header>
        <div className="mt-12">{children}</div>
      </Container>
    </div>
  )
}
