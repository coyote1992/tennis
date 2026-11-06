# KATE — kate.tenis.studio

Speculative rebuild of [teniszklubkecskemet.hu](https://www.teniszklubkecskemet.hu/) (KATE, Kecskeméti
Amatőr Teniszezők Egyesülete) for the 100web outreach. Next.js 16 (App Router), TypeScript, no UI
library; the background is the approved `dot-space` kit (`kits/dot-space`, from the 100web Templates
package). Fully separate from the other folders in this repo.

## Content sources

The club's own site (home, Rólunk, Kapcsolat, Tagfelvétel, the 2026 city team championship and
"Aranyhomok Open" pages, OB III, Pályafejlesztéseink, Felajánlások, Tenisz Kecskeméten Anno, In
Memoriam, the club-day page and the photo gallery) and Göbölyös Alexander's email reply in 100web:
new members come both through the city championship and through the community first, and people
come and go, even season by season. `lib/site.ts` holds the contact data. The phone number in his
e-mail signature is not on the club's site, so the demo uses e-mail and online booking instead.
The courts' street address is not stated on the club's site, so only the association's address is
shown and there is no map.

## Page

`/` — hero, how to start, championships (city team league, Aranyhomok Open, OB III), the club
(timeline, 1970s archive photo, volunteers), membership fees 2026, club life, contact.

Dot-space choreography (`components/space/kate-config.ts`): court → racket → the club's emblem
(the orange shield with crossed rackets, designed by Goór Imre; `public/img/emblema-pontok.png`)
beside the club heading → spinning ball behind the membership section → black hole at the contact
section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **kate**, domain `kate.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public
repo at a pinned commit.
