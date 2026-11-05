# Metro Tenisz — metro.tenis.studio

Speculative rebuild of [metrotenisz.hu](https://www.metrotenisz.hu) (Metro Rákosszentmihályi Sport
Club, Budapest XVI.) for the 100web outreach. Next.js 16 (App Router), TypeScript, no UI library;
the background is the approved `dot-space` kit (`kits/dot-space`, from the 100web Templates
package). Fully separate from the other folders in this repo: own dependencies, own Vercel project.

## Content sources

The club's own pages (home, Rólunk, Pályáink, Áraink — the winter 2026/27 price list image,
Szakmai munka, Nyári táborok, Házirend, Kapcsolat, the coach pages) and the club's email reply in
100web (Kétyi András: group training starts with a free trial lesson; parents contact the club
directly after the school Play & Stay). `lib/site.ts` holds the shared contact data.

## Pages

- `/` — hero (free trial + court booking), courts, booking and current winter prices, club
  history, coaching pathway + free trial + coaches, summer camp, contact
- `/hazirend` — the house rules, regrouped for scanning

Dot-space choreography (`components/space/metro-config.ts`): court → racket → "1950" (the club's
founding year) beside the club heading → spinning ball behind the coaching section → black hole
at the contact section. Subpages get the quiet starfield.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/   # shape/text overlap check
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **metro**, root directory `metro`, domain
`metro.tenis.studio`. Like `kiskut/`, it is deployed through the Vercel API with a two-file upload
whose install command downloads this folder from the public repo at a pinned commit, until the
repo is connected in the Vercel dashboard (Project → Settings → Git, root directory `metro`).
