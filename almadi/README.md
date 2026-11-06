# Balatonalmádi Tenisz Club 1925 — almadi.tenis.studio

Two design versions of the Balatonalmádi Tenisz Club site (six clay courts in the Szent Erzsébet liget,
8220 Balatonalmádi) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI
library). A labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern")
flips between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): a lakeside resort-club look from the 1925 badge: sand paper, the badge's lake
  blue, navy bands and court clay; Gloock + Familjen Grotesk. The drone photo sits in an arch with a
  live weather card on it, and the outdoor season is drawn as a twelve-month strip. Code: `app/(a)`,
  `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), with the
  badge's serving player in dots (`public/img/almadi-jel-pontok.png`). Code: `app/(b)`, `components/b`,
  choreography in `components/b/space/almadi-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `Weather.tsx` (live weather at the courts from Open-Meteo, in the
browser; it reports the weather only, playability is the club's call), `SeasonStrip.tsx`,
`ContactForm.tsx` (opens a prefilled e-mail to info@almaditenisz.hu), `Icon.tsx`, `Reveal.tsx`.

## Content

- almaditenisz.hu is a holding page ("Hamarosan folytatjuk"): hours 7:00–21:00, phone, e-mail, the logo,
  one drone photo and a weather box. Its booking link (foggo.hu/…/naptar) now lands on Foggo's general
  list; the site links the club's current Foggo page, app.foggosport.com/sportprovider/almaditenisz.
- Foggo: courts 1–6, court hire 6 000 Ft/hour and the 2026 adult annual court pass (85 000 Ft, 365 days,
  all six courts). Foggo lists 7:00–22:00; the site keeps the club's own 7:00–21:00.
- balatonalmadi.hu: six clay courts in the Szent Erzsébet liget, coaching and court hire, president
  Győri Viktor. programturizmus.hu: floodlights, by the lake. tennistourtalk.com: founded 1925, beside
  the Wesselényi beach; the $15,000 ITF Balatonalmádi Open in May 2018.
- Győri Viktor's email reply in 100web (4 November 2026): outdoor season only, closed from 1 November,
  2027 opening expected late March / early April; the maintainer flags unplayable courts in the booking
  system, and in changeable weather it's best to phone. `SEASON.closed` in `lib/site.ts` switches the
  winter notices off.
- No coach names, programmes or club history beyond the above are published, so the site has none. The
  hero photo on the old site (an overhead clay-court serve) looks like stock; A doesn't use it.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **almadi**, domain `almadi.tenis.studio`. Deployed through the
Vercel API with a two-file upload whose install command downloads this folder from the public repo at a
pinned commit.
