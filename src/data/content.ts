/** Page-specific and list content; safe to extend as the archive grows. */

export type MediaKind = 'article' | 'podcast' | 'video'

export type ResearchOutput = {
  id: string
  title: string
  summary: string
  kind: MediaKind
  derivedFrom: string
  date: string
  href: string
}

/** Placeholder outputs, presented as secondary to documented research. */
export const featuredResearch: ResearchOutput[] = [
  {
    id: 'r1',
    title: 'Source chains in classical tafsir: a working map',
    summary:
      'How major exegetes cite revelation and scholarly precedent: a methodological appendix to ongoing institute work.',
    kind: 'article',
    derivedFrom: 'Research programme: Quranic citation architecture',
    date: '2026-03-12',
    href: '/articles',
  },
  {
    id: 'r2',
    title: 'Hadith grading disclosure: reader’s guide',
    summary:
      'What “Sahih”, “Hasan”, and “Da‘if” mean here, and how every hadith citation is presented for audit.',
    kind: 'article',
    derivedFrom: 'Research programme: Hadith evidence standards',
    date: '2026-02-28',
    href: '/articles',
  },
  {
    id: 'r3',
    title: 'Conversation: evidence, not personality',
    summary:
      'A moderated discussion format, with arguments anchored to named sources and published review notes.',
    kind: 'podcast',
    derivedFrom: 'Public lecture series (transcript-linked)',
    date: '2026-04-01',
    href: '/podcasts',
  },
]

export const sourceIndexCategories = [
  {
    id: 'chains',
    title: 'Source chain documents',
    description:
      'Structured records showing how claims connect to Qur’an, hadith, ijma, and named classical works.',
  },
  {
    id: 'scholars',
    title: 'Scholar profiles',
    description:
      'Biographical stubs and bibliographic anchors for classical authorities cited across the archive.',
  },
  {
    id: 'hadith',
    title: 'Hadith grading references',
    description:
      'Per-citation grading notes aligned with established scholarship: disclosed, not asserted.',
  },
  {
    id: 'citations',
    title: 'Citation categories',
    description:
      'Taxonomy for how evidence types appear in published work (revelation, narration, consensus, commentary).',
  },
  {
    id: 'appendices',
    title: 'Research appendices',
    description:
      'Tables, manuscript notes, and supplementary material tied to specific research releases.',
  },
] as const

export const placeholderSources = [
  {
    id: 's1',
    label: 'Qur’anic citation sheet: Surah al-Baqarah (pilot)',
    category: 'Source chain documents',
  },
  {
    id: 's2',
    label: 'Al-Nawawi: biographical entry & primary works',
    category: 'Scholar profiles',
  },
  {
    id: 's3',
    label: 'Hadith grading key: terminology as used on this site',
    category: 'Hadith grading references',
  },
] as const
