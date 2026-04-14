type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** Use on dark band backgrounds (e.g. zinc/black sections). */
  variant?: 'light' | 'dark'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
  const isDark = variant === 'dark'

  return (
    <div className={`mb-12 space-y-3 ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-medium uppercase tracking-[0.2em] ${isDark ? 'text-zinc-500' : 'text-muted'}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl font-normal tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-muted'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
