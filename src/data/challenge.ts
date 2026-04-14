/** Structured copy for the Challenge the Work page; extend as process matures. */

export const challengePage = {
  intro:
    'This is not a comment section. It is a formal route for holding published claims accountable to evidence and reasoning.',
  whatCanBeChallenged: {
    title: 'What can be challenged',
    items: [
      'Any discrete claim published on this site that presents as factual, historical, or interpretive within the institute’s research output.',
      'Summaries of scholarly positions where a specific attribution is made.',
      'Statements about grading, citation, or manuscript facts that appear in published work.',
    ],
  },
  validChallenge: {
    title: 'What qualifies as a valid challenge',
    items: [
      'Identifies the exact claim (title, section, and quotation or paragraph reference).',
      'States the counter-argument or counter-evidence clearly enough to be reviewed.',
      'Provides a source basis or a structured reasoning chain that can be checked.',
    ],
  },
  invalidChallenge: {
    title: 'What does not qualify',
    items: [
      'Abuse, ridicule, or generalised dismissal without engagement with the published claim.',
      'Requests for personal pastoral counselling or individual fatwa: redirect to qualified scholars.',
      'Complaints about tone, identity, or motives without reference to evidence.',
      'Duplicate submissions of the same challenge without new material.',
    ],
  },
  submission: {
    title: 'How challenges are submitted',
    steps: [
      'Use the contact form with subject line “Challenge” and include the required fields listed on the Contact page.',
      'Attach or link to primary sources where applicable; secondary summaries alone may delay review.',
      'Confirm you accept publication of your challenge (redacted for private contact details if needed) alongside the institute response.',
    ],
  },
  review: {
    title: 'How responses are reviewed and published',
    paragraphs: [
      'Challenges are logged in order of receipt. A qualifying challenge receives a documented response within the institute’s published response window.',
      'If a response cannot yet be adequately sourced, that condition is stated publicly rather than concealed.',
      'Corrections update the record; prior errors remain visible in the challenge archive as required.',
    ],
  },
  archive: {
    title: 'How the archive is structured',
    paragraphs: [
      'Challenges are indexed by publication, date, and status (received, in review, responded, corrected).',
      'Responses appear alongside the original challenge text. Updates append rather than replace, preserving the audit trail.',
      'Over time, this archive is treated as a primary measure of institutional credibility.',
    ],
  },
} as const
