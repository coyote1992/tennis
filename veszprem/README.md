# Tenisziskola Veszprém SE — veszprem.tenis.studio

Two design versions of the Tenisziskola Veszprém Sportegyesület (TVSE) site — the tennis courts of the
Jutasi úti Sportcentrum, 8200 Veszprém, Jutasi út 18. — for the 100web outreach, in one Next.js 16 app
(App Router, TypeScript, no UI library). A labelled switch fixed at the bottom centre of every page
("Dizájn · A Klasszikus / B Modern") flips between them and keeps your place: both pages use the same
section ids. Online booking stays on the club's own calendar (teniszveszprem.hu/palyafoglalas); the
site links to it.

- **A — Klasszikus** (`/`): the TVSE crest's forest green and violet on warm off-white; Alegreya +
  Mulish. Signature: the week chart of the tent's cheaper unheated hours
  (`components/a/WeekChart.tsx`). Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/veszprem-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx` (also re-aligns #section arrivals once fonts have loaded),
`ContactForm.tsx` (opens a prefilled e-mail to teniszveszprem@gmail.com), `Icon.tsx`, `Reveal.tsx`.

## Content

From teniszveszprem.hu: Teniszpálya, Pályafoglalás – Téli szezon, Oktatás, Tenisztábor, Téli
házibajnokság (and the 2026/27 page), Kiemelt and Egyéb versenyek, the 2019 Balluff Kupa and Miklós
Gyula Emlékverseny reports, the 2022/23 Piramis post, Kapcsolat. The club's reply in 100web only asked
when we'd like to come.

- No court prices are published (the booking page only mentions summer rates and a cheaper unheated
  tent price), so none are shown; the site says to ask by phone.
- The discounted unheated tent windows are drawn against the published 7:00–21:00 opening hours.
- The 2026/27 house league page says details are coming soon; the tournament highlights are labelled
  2019, their latest reports.
- Mészáros Csaba and Miskolczi Norbert have no bios on the club site, so only their names and phones
  are shown; Miskolczi Norbert's own website didn't load, so it isn't linked.
- Photos are the club's own (courts, the winter tent, clubhouse, camps, tournaments, coaches); the
  2021 group photo with a sponsor banner is captioned as a tournament group, not as the Balluff Kupa.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **veszprem**, domain `veszprem.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
