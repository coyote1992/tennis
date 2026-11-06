# Pécs 2000 Tenisz Club — pecs2000.tenis.studio

Two design versions of the Pécs 2000 Tenisz Club site (7633 Pécs, Tüzér utca 22.; founded in 1993 by
the Koncz Tennis Team) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI
library). A labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus /
B Modern") flips between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): a traditional club look built from the crest: ivory paper, forest green,
  laurel gold, Playfair Display + Source Sans 3, Roman-numeral chapter labels, double rules and arched
  portrait frames. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), Sora +
  Inter, forest-ink night with crest gold. Code: `app/(b)`, `components/b`. Choreography in
  `components/b/space/pecs2000-config.ts`: court → racket → the crest's crossed rackets and laurel
  (`public/img/cimer-pontok.png`) beside the club history → ball → black hole.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`). Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `EnquiryForm.tsx` (the club's course enquiry; sending opens a
prefilled e-mail to the club), `Icon.tsx`, `Reveal.tsx`.

## Content

From teniszpecs2000.hu (Kezdőlap, Rólunk with the club history and the three coaches, Tanfolyamok,
Kapcsolat) and Koncz Liliána's email reply in 100web: family tennis has no fixed timetable, it is
arranged around the families who sign up and the indoor courts' free time; +36 20 932 6860 is the
number for details or booking. The old site's other photos are Webnode stock images, so only the
coaches' portraits and the crest are used. No prices, court counts or opening hours are published, so
none are shown.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **pecs2000**, domain `pecs2000.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
