import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

/** Elevated card with subtle border glow; pair with dark section backgrounds. */
export default function GlowCard({ children, className = '' }: Props) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/75 p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_4px_24px_-4px_rgba(0,0,0,0.5),0_0_48px_-12px_rgba(120,160,255,0.18)] backdrop-blur-sm transition-all duration-500 ease-out before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(255,255,255,0.07),transparent_50%)] before:opacity-0 before:transition-opacity hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_32px_-6px_rgba(0,0,0,0.55),0_0_60px_-8px_rgba(130,180,255,0.32)] hover:before:opacity-100 sm:p-8 ${className}`.trim()}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
