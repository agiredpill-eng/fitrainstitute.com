/** Central copy for The Fitra Institute. Edit here to update site-wide text. */

export const site = {
  name: 'The Fitra Institute',
  tagline:
    'Rigorous inquiry into the oldest question: what human beings are for, and what authority answers it.',
  domain: 'fitrainstitute.com',
  contactEmail: 'inquiries@fitrainstitute.com',
} as const

export const institutional = {
  whatWeAre: {
    title: 'What this institution is',
    paragraphs: [
      'The Fitra Institute is a research institution. We produce documented scholarship on the Islamic framework: its theological claims, its evidentiary foundations, and its answers to the central questions of human life.',
      'We exist where serious inquiry meets honest evidence. We are not an apologetics platform, a vehicle for cultural advocacy, or a personality-led religious brand. We are a research institution that holds its claims to a standard it is willing to defend publicly.',
      'Every piece of work produced here carries a complete source chain. Every claim traces to a named source in a defined hierarchy. Every argument is open to formal challenge. That is not a courtesy; it is the architecture.',
    ],
  },
  whatWeAreNot: {
    title: 'What this institution is not',
    paragraphs: [
      'We are not a dawah platform. We are not a sect. We are not affiliated with any political movement, government, or religious authority. We do not speak for Islam; we engage the evidence that Islam presents.',
      'This institution is not built around a personality. There is no individual whose reputation guarantees the work produced here. That is deliberate. The work stands or falls on its sourcing, its reasoning, and its ability to withstand scrutiny. Not on who is saying it.',
    ],
  },
  audiences: {
    title: 'Who this institution serves',
    intro:
      'Three audiences arrive here by different roads. The entrance is not segmented by identity. The work makes its case in the language of evidence, reasoning, and source transparency.',
    muslims:
      'The Muslim who has encountered questions they were not equipped to answer; not because the answers do not exist, but because the intellectual infrastructure was not built around them.',
    sceptics:
      'The sceptic who has dismissed the Islamic framework without engaging its strongest claims, and who would recognise the need to apply the same scrutiny to their own assumptions.',
    veterans:
      'The veteran, the first responder, the person who has operated in conditions where moral clarity was not a luxury: someone who carries questions about justice, purpose, and evil that ordinary religious framing cannot hold.',
  },
  sourceHierarchy: {
    title: 'The source hierarchy',
    intro:
      'Every substantive claim produced by this institution traces to one of the following, in this order of authority:',
    items: [
      'The Quran, cited by Surah name and verse number',
      'Authenticated hadith, cited by collection, narrator, and grading (Sahih, Hasan, or Da‘if disclosed per citation)',
      'Established scholarly consensus (Ijma) among the major schools of Islamic jurisprudence',
      'Named classical scholars (for example Ibn Taymiyyah, Ibn al-Qayyim, al-Ghazali, Ibn Kathir, al-Nawawi, al-Tabari, and al-Qurtubi), each traceable to their documented works',
      'Contemporary scholarship, only where grounded in the above and explicitly attributed',
    ],
    footnote:
      'Where genuine scholarly disagreement exists, the range of positions is presented. No false consensus is manufactured. Where a claim cannot be sourced to this hierarchy, it is not published.',
  },
  methodology: {
    title: 'Methodology and AI disclosure',
    disclosure:
      'This institution uses AI language models as a research instrument. We disclose this plainly because we believe the argument should be judged, not the instrument that assisted in its construction.',
    aiAssists: {
      title: 'What AI assists with',
      items: [
        'Retrieval and organisation of source material',
        'Drafting of arguments for human review',
        'Identification of relevant classical scholarly positions',
        'Adaptation of content for different audiences',
      ],
    },
    aiDoesNot: {
      title: 'What AI does not determine',
      items: [
        'Which sources are authoritative: the hierarchy above is fixed and human-defined',
        'Hadith grading: all grading is drawn from established classical and contemporary hadith scholarship and disclosed per citation',
        'Rulings on contested fiqh matters: this institution does not issue fatwas and directs readers to qualified scholars where specific rulings are sought',
      ],
    },
    verification: {
      title: 'What verification exists',
      paragraphs: [
        'Every published piece is reviewed against its stated sources before publication. Quranic citations are verified against the Arabic text and against authenticated translations where translation is used. Hadith citations are verified against their collection, and grading is disclosed. Classical scholarly positions are drawn from named scholars and traceable to their documented works. Where a source cannot be verified, it is not cited.',
      ],
    },
    whenWrong: {
      title: 'What happens when a claim is wrong',
      paragraphs: [
        'The claim is corrected. The correction is published. The original error is not hidden. This institution has no interest in maintaining a false record.',
      ],
    },
  },
  challenge: {
    title: 'The challenge mechanism',
    intro:
      'We have created a formal mechanism for public challenge of any claim published on this site. It is not a comment section. It is a structured intellectual accountability process.',
    qualifying: {
      title: 'A qualifying challenge must',
      items: [
        'Identify the specific claim being challenged',
        'State the counter-argument or counter-evidence',
        'Provide a source or reasoning basis',
      ],
      note: 'Opinion and abuse are not challenges.',
    },
    response:
      'Every qualifying challenge receives a documented response, published alongside the original challenge within the institute’s stated response window. If no adequate response is available at the time, that is disclosed, not concealed. The response is produced and the record is updated.',
    closing:
      'Over time, the challenge archive becomes the most honest measure of this institution’s credibility. Not what we claim about ourselves: what the work looks like after scrutiny.',
  },
  fitra: {
    title: 'A closing note on fitra',
    paragraphs: [
      'There is a concept at the centre of this institution’s name.',
      'Fitra: the innate human disposition toward truth, toward moral clarity, toward the recognition that existence has a source and a purpose. It is not a belief that must be installed from outside. It is what remains accessible when the question is asked with seriousness and honesty.',
      'This institution exists to serve that inquiry. Not to manufacture agreement. To lay the evidence on the table, completely and honestly, with every source visible, and let the question do its own work.',
      'The name is the thesis. The work is the argument.',
    ],
  },
} as const
