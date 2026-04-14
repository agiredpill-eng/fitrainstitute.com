export type NavItem = {
  label: string
  to: string
}

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Research Library', to: '/research' },
  { label: 'Articles', to: '/articles' },
  { label: 'Podcasts', to: '/podcasts' },
  { label: 'Videos', to: '/videos' },
  { label: 'Source Index', to: '/sources' },
  { label: 'Challenge the Work', to: '/challenge' },
  { label: 'Methodology', to: '/methodology' },
  { label: 'Contact', to: '/contact' },
]

export const audienceNav: NavItem[] = [
  { label: 'For Muslims', to: '/for-muslims' },
  { label: 'For Sceptics', to: '/for-sceptics' },
  { label: 'For Veterans', to: '/for-veterans' },
]
