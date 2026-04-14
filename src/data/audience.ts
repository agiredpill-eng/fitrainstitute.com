/** Audience entry pages: unified institutional voice, different entry framing. */

export const audiencePages = {
  muslims: {
    path: '/for-muslims',
    title: 'For Muslims',
    eyebrow: 'Audience pathway',
    lead: 'When questions outpace the infrastructure built to hold them.',
    sections: [
      {
        heading: 'What you will find',
        body: 'Documented arguments with full source chains: Qur’an, hadith with disclosed grading, ijma where claimed, and classical scholarship tied to named works. The aim is not persuasion without evidence; it is evidence you can inspect.',
      },
      {
        heading: 'What you will not find',
        body: 'A personality-led platform, sectarian branding, or rulings offered as generic fatwa. Where fiqh specifics are required, we point you toward qualified scholars.',
      },
      {
        heading: 'How to read the archive',
        body: 'Start from the Research Library and Source Index. Treat articles, podcasts, and videos as secondary outputs that trace back to documented research and cited sources.',
      },
    ],
  },
  sceptics: {
    path: '/for-sceptics',
    title: 'For Sceptics',
    eyebrow: 'Audience pathway',
    lead: 'Strong claims deserve the same scrutiny you would demand anywhere else.',
    sections: [
      {
        heading: 'The invitation',
        body: 'Engage the Islamic framework at the level of its evidence and reasoning, as presented here, with sources named and methods disclosed. Apply the same standard to the assumptions you bring.',
      },
      {
        heading: 'Transparency as default',
        body: 'AI is disclosed where used. Hadith grading is shown per citation. Where scholars disagree, the range is represented. Where we cannot verify a source, we do not publish the claim.',
      },
      {
        heading: 'Challenge the work',
        body: 'Formal challenge is built into the site. It is not debate theatre; it is documented accountability. Read the rules, then test the claims.',
      },
    ],
  },
  veterans: {
    path: '/for-veterans',
    title: 'For Veterans',
    eyebrow: 'Audience pathway',
    lead: 'Moral clarity under pressure, and questions that ordinary framing cannot carry.',
    sections: [
      {
        heading: 'Why this exists',
        body: 'Some questions are not theoretical. This institution treats justice, evil, and purpose as matters that must be argued with seriousness and sourced with discipline.',
      },
      {
        heading: 'Evidence-first language',
        body: 'You will find no influencer tone. The work is institutional: claims, chains, and published corrections when wrong.',
      },
      {
        heading: 'Where to begin',
        body: 'Use the Research Library for foundational papers, and the Source Index to inspect how claims are anchored. Media is supplementary to the documented record.',
      },
    ],
  },
} as const
