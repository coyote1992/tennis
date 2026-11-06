# Miskolci Egyetem Teniszcentrum — miskolc.tenis.studio

Speculative rebuild of [tenisz.uni-miskolc.hu](https://tenisz.uni-miskolc.hu/) (the University of Miskolc
tennis centre, 3515 Miskolc-Egyetemváros, run by the Miskolci Egyetemi Sportcentrum) for the 100web
outreach. Next.js 16 (App Router), TypeScript, no UI library; the background is the approved `dot-space`
kit (`kits/dot-space`, from the 100web Templates package). Fully separate from the other folders in this
repo.

## Content sources

The tennis centre's own site (home, Pályáink, Árak with the 2026/27 winter price lists, Házirend /
foglalási szabályok, Rólunk, Kapcsolat, the logos and photos) and the Sportcentrum's strandsport and
Futball aréna pages. The reply in 100web (Török Bence, sportszervező): players pick the court surface by
their own needs and skill, so the courts section leads with the four surfaces side by side. `lib/site.ts`
holds the contact data and prices.

Two things on the old site disagree: the price page gives weekend hours of 8–20, the home and contact
pages say 6–22 every day. The new site uses H–V 6:00–22:00. Personal phone numbers from the email
reply and the beach-sports page are not published; only the booking line (+36 20 393 1795) is.

## Page

`/` — hero (indoor hall photo, facts: 12 tennis courts, 2 squash courts, −15% for university staff and
students, open 6–22), courts by surface, winter price lists (indoor hall / outdoor courts / squash, as
tabs that stay readable without JavaScript), three ways to book plus the house rules, the 2024 renewal
(2 800 m² hall, new outdoor courts, renovated clubhouse, European Universities Games 2024), the
Sportcentrum's beach-sports centre and football arena, contact with map.

Dot-space choreography (`components/space/miskolc-config.ts`): court → racket → the Teniszcentrum emblem
(`public/img/emblema-pontok.png`: orange ball, light swoosh) beside the about heading → spinning ball
behind the Sportcentrum section → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **miskolc**, domain `miskolc.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
