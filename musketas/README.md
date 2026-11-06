# Muskétás Teniszcentrum — musketas.tenis.studio

Speculative rebuild of [musketastenisz.hu](https://musketastenisz.hu/) (Muskétás Teniszcentrum, 1112
Budapest, Muskétás u. 1.) for the 100web outreach. Next.js 16 (App Router), TypeScript, no UI library;
the background is the approved `dot-space` kit (`kits/dot-space`, from the 100web Templates package).
Fully separate from the other folders in this repo.

## Content sources

The club's own site (home, Áraink with the 2026/27 prices, Pályafoglalás with the HELLA booking rules,
Rólunk, MATK versenyek, Kapcsolat, the house-rules PDF and the Google-reviews widget) and the club's
email reply in 100web: online bookings are for a specific court type, which usually can't be changed
on site, and players know which surface they want. That is why the page leads with the three surfaces
and the price list is chosen by season and court type. The old site's coaches and tennis-school pages
are empty, so the demo has no such sections. `lib/site.ts` holds the contact data and the prices.

## Page

`/` — hero, the three surfaces (Swiss Court® hall, hard courts, outdoor clay) with the ITF badges,
the 2026/27 price explorer (`components/PriceExplorer.tsx`: season, then court type; every list stays
in the HTML), HELLA booking in three steps with the cancellation rule, the club (story, creed, perks,
photos), MATK tournaments, Google reviews, contact with map.

Dot-space choreography (`components/space/musketas-config.ts`): court → racket → the musketeer's hat
from the club's logo (`public/img/kalap-pontok.png`, the logo's single lime line) beside the club
heading → spinning ball behind the tournaments → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **musketas**, domain `musketas.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
