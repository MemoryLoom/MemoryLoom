# Design brief — MemoryLoom

A small creative studio making bespoke digital wedding invitation websites and
personal AI memory films for weddings, birthdays, anniversaries and milestones.
One commission at a time, for one family. The page sells the finished piece
before it explains the service, and it makes exactly one ask: write to us.

## Palette and type

Everything lives in `src/theme.css`. One scheme, always light — there is no
`prefers-color-scheme` override.

- ground: warm ivory `oklch(0.953 0.016 76)` — the hero, the showcase, the 404
- raised surface / sand card: `oklch(0.916 0.025 74)` — the services section, cards
- primary ink and the one dark band: espresso `oklch(0.33 0.055 51)`
- body ink: cocoa `oklch(0.462 0.043 55)`
- accent / hover / small highlights: champagne bronze `oklch(0.665 0.07 64)`
- hairline: espresso at 16% — the only border colour

Contrast: cocoa on ivory and on sand both clear 4.5:1; ivory on espresso clears
it; bronze is never used for body text, only for rules, labels on espresso and
button hover.

Type: **Cormorant Garamond** for headings and the numerals in the process list —
a high-contrast serif that echoes the owner's wordmark — and **Plus Jakarta
Sans** in light and regular for body and labels. Headings are weight 400, set
large, tight tracking. Labels are uppercase at `0.28em` and used sparingly: one
at the hero, one per ground, never above every heading.

## Shell

A floating pill fixed to the top on every viewport: the owner's mark at left,
`Services · Showcase · Book Now` centred, one pill action `Start Your Story`
right. At 360 the anchors fold into a sheet with a visible close and the action
stays visible. The footer is compact and sits inside the espresso booking
section, so the page ends on one ground rather than adding a second one.

Routes: `/` only, plus the 404.

## Brand mark

The owner's logo, used exactly as supplied: `/images/memoryloom-logo.webp` is the
full lockup, and two crops of the same file carry it at small sizes —
`memoryloom-monogram.webp` (the M alone, in the nav and the footer) and
`memoryloom-wordmark.webp` (the name, beside the monogram). Nothing is drawn,
traced or re-set as type. `public/favicon.svg` is a plain espresso tile with an
ivory M in the logo's colours — a letter, not a trace.

Icons: Lucide at **stroke width 1.5**, one weight everywhere.

## Imagery

Warm, filmic, quiet: ivory and sand grounds, espresso shadows, champagne
bronze highlights, fine grain, shallow depth of field, no one looking at the
camera. The subject is the moment being kept — hands, a path, a table of
people — never a mood still life of a laptop.

- Hero: the interface itself, built in code (`PhoneMock`) — a sample invitation
  page on a phone, with a generated film still (`memory-film-still.webp`) layered
  over its edge. The caption states plainly that these are illustrations.
- Services: two artefacts built in code (`PhoneMock`, `FilmMock`).
- Showcase: one photograph per commissioned piece.
- The booking band is type and rule only.

## Voice

Plain, warm, specific. "Tell us whose story it is." No invented prices, awards or
testimonials; the sample names in the phone mockups are samples and the page
says so. The action is a `mailto:` to the studio's address, and the page says
that too, because there is no form that could send anything.
