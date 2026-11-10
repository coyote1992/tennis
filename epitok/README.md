# Építők Teniszklub, Népliget — epitok.tenis.studio

Two design versions of the Építők Teniszklub site (1101 Budapest, Népliget; 12 clay courts, April to
October) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A
labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips
between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): the crest's deep blue on warm paper, the clay of the courts for buttons;
  Libre Baskerville + Work Sans. Signatures: the full-width clubhouse hero, the weekday-morning pass
  section with a sum of the club's own prices (`components/a/MorningCalc.tsx`), and the archive strip
  of the club's history since 1896. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`): the
  crest's night blue as the sky, an icy light-blue accent, Sora + Inter. The dots form a racket
  (#palyak), court lines (#arak, held through #delelott), the crest's mark beside the history heading
  (`public/img/epitok-jel-pontok.png`), a ball (#esemenyek) and the black hole (#kapcsolat). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/epitok-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx` (also re-aligns #section arrivals once fonts have loaded),
`ContactForm.tsx` (opens a prefilled e-mail to jozsef.dundler@gmail.com), `Icon.tsx`, `Reveal.tsx`.

## Content

From epitoktk.hu (Kezdőlap, Pályabérlet with the 2026 price list, Kapcsolat, Klubtörténet and the team
pages, ITF History, Best players, Hírek/események, WINK-Építők Kína 2025) and Dundler József's reply in
100web about the unlimited weekday-morning season pass (7–14, usually a free court; chosen by old and
new guests, popular with people on flexible hours and retirees) — used, attributed to him.

- Prices are the club's "Árlista 2026" (the 2026 season has ended); labelled as such.
- The morning-pass sum only adds up two items of the price list; it gives no verdict, since the list
  doesn't say whether the pass is per person.
- The events list shows the latest dated items on the site (2023 club events, the 2025 China trip);
  news is pointed to the club's Facebook group.
- Photos are the club's own: the clubhouse, the courts and the archive pictures from the history pages.
- `public/img/epitok-cimer.png` is the crest with its white letters filled in (the club's own file has
  them cut out, which shows as holes on dark backgrounds); the favicons are made from it.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **epitok**, domain `epitok.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
