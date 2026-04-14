import type { ReactNode } from 'react'

/** Readable body column without @tailwindcss/typography (keeps dependencies minimal). */
export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-normal [&_h2]:text-ink [&_h2]:first:mt-0 [&_h3]:mt-8 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-normal [&_h3]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:font-medium [&_strong]:text-ink">
      {children}
    </div>
  )
}
