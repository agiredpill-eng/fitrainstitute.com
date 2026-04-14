import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'

const styles: Record<Variant, string> = {
  primary:
    'inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper shadow-sm transition hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400',
  secondary:
    'inline-flex items-center justify-center rounded-md border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition hover:border-stone-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400',
  ghost:
    'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-ink/90 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400',
  onDark:
    'inline-flex items-center justify-center rounded-md border border-white/35 bg-white/5 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:border-white/55 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40',
}

type Props = {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
}

export default function ButtonLink({ to, children, variant = 'primary', className = '' }: Props) {
  return (
    <Link to={to} className={`${styles[variant]} ${className}`.trim()}>
      {children}
    </Link>
  )
}
