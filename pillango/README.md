# Pillangó Tenisz Klub, Zugló — pillango.tenis.studio

Two design versions of the Pillangó Tenisz Klub site (1149 Budapest, Pillangó Park; four clay courts
and one hard court, a tennis school from kindergarten age, adult coaching, a summer camp, and from
2026 the tennis section of KSI) for the 100web outreach, in one Next.js 16 app (App Router,
TypeScript, no UI library). A labelled switch fixed at the bottom centre of every page ("Dizájn · A
Klasszikus / B Modern") flips between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): deep park green and the butterfly logo's lime on soft paper; Newsreader +
  Albert Sans. Signatures: the "Merre indulnál?" four ways in, the ball and MTSZ category chart by age
  (`components/a/BallChart.tsx`) and the winter/summer court prices with all three ways to pay
  (`components/a/CourtPrices.tsx`). Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/pillango-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx` (also re-aligns #section arrivals once fonts have loaded),
`ContactForm.tsx` (opens a prefilled e-mail to info@pillangotenisz.hu), `Icon.tsx`, `Reveal.tsx`.

## Content

From pillangotenisz.hu (Kezdőoldal, Edzőink, Gyerek and Felnőtt teniszoktatás, Pályát foglalok with
both price lists, Versenyzés, KSI Tenisz, Nyári gyerektábor, Jelentkezés, Kapcsolat, Galériák), the
club's reply in 100web (a beginner who comes alone can join the adult beginner group: Mondays 19–20,
5 000 Ft/óra, by phoning the coach), the 2023 interview with Monostori Tamás on huntennis.hu (the winter
tent; the 2018, 2019 and 2021 national titles) and the club's GyereSportolni page.

- Court prices are the club's two published lists: summer 2026 (20 April – 4 October) and winter
  2026/27 (5 October – 17 April). Winter is shown first, as the current season. The per-hour line under
  the 10-hour pass is only its price divided by ten.
- The age chart shows only the Versenyzés page's table (MTSZ categories from 7) and its training plan
  for 6–8 and 9–16; below 7 it says the table starts at 7.
- Tournament photos whose venue is unknown are captioned without a place.
- Photos are the club's own (gallery, coaches, players); the stock photos on the current site are not
  used. The butterfly mark is the club's favicon; the favicons here are made from it.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **pillango**, domain `pillango.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
