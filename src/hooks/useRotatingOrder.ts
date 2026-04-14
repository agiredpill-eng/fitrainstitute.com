import { useEffect, useMemo, useState } from 'react'

type Result<T> = {
  ordered: T[]
  /** Increments each rotation; use as `key` on a wrapper to replay enter animation. */
  cycle: number
}

/** Cycles array order on an interval for a deck-style shuffle rotation. */
export function useRotatingOrder<T>(items: readonly T[], intervalMs = 7000): Result<T> {
  const [offset, setOffset] = useState(0)
  const [cycle, setCycle] = useState(0)
  const len = items.length

  useEffect(() => {
    if (len <= 1) return
    const id = window.setInterval(() => {
      setOffset((o) => (o + 1) % len)
      setCycle((c) => c + 1)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [len, intervalMs])

  const ordered = useMemo(() => {
    if (len === 0) return []
    return [...items.slice(offset), ...items.slice(0, offset)]
  }, [items, offset, len])

  return { ordered, cycle }
}
