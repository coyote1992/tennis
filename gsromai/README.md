# Római Padel Akadémia & GS Tenisz Club — gsromai.tenis.studio

Speculative rebuild of [gsteniszclub.hu](https://www.gsteniszclub.hu/) (Római Padel Akadémia / GS Tenisz
Club, 1039 Budapest, Királyok útja 321., on the Római-part) for the 100web outreach. Next.js 16 (App
Router), TypeScript, no UI library; the background is the approved `dot-space` kit (`kits/dot-space`,
from the 100web Templates package). Fully separate from the other folders in this repo.

## Content sources

The complex's own site (home, Árak with the summer and winter court fees, Elérhetőség, Teniszakadémia,
Galéria and the Római Padel Akadémia logo), smarttennis.hu (SmartTennis SE runs the tennis at the
complex, with its own HELLA booking and phone number) and Szabó Éva's email reply in 100web: most new
guests already know what they want and come to book a court; this winter there are 2 covered, heated
tennis and 2 covered, heated padel courts; padel is recommended to newcomers, and it is worth visiting
to watch a good padel match. That is why padel leads and booking is one tap away for each sport.
`lib/site.ts` holds the contact data and prices.

## Page

`/` — hero (with the old site's "Ez egy olyan hely, ahol…" list), padel, tennis (SmartTennis SE),
court fees (winter cards, summer padel table), bistro / sauna and massage / gym / footvolley, events,
contact with map.

Dot-space choreography (`components/space/gsromai-config.ts`): court → racket → the "RP" monogram from
the logo (`public/img/rp-pontok.png`: the padel racket inside the R, the lime ball) beside the club
heading → spinning ball behind the events section → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **gsromai**, domain `gsromai.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
