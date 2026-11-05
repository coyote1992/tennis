# Siófoki Spartacus SE — spartacus.tenis.studio

Speculative rebuild of [siofokispartacus.hu](https://siofokispartacus.hu) (Siófoki Spartacus SE,
Jókai park, Siófok) for the 100web outreach. Next.js 16 (App Router), TypeScript, no UI library;
the background is the approved `dot-space` kit (`kits/dot-space`, from the 100web Templates
package). Fully separate from the other folders in this repo: own dependencies, own Vercel project.

## Content sources

The club's own pages (Rólunk, Szolgáltatásaink, Áraink for winter 2026/27, Edzőink, Csapataink,
Események, Kapcsolat), its winter 2026 posters (booking flow, prices, contacts), the 2026 court
rules PDF, and the club's email reply in 100web (one-off bookings are open; for a season pass they
are usually flexible if you say so early in the season). `lib/site.ts` holds the contact data.

## Pages

- `/` — hero, courts and the heated winter tent, online booking (siofok.megatenisz.hu) with
  payment, cancellation and winter prices, history since 1915 with the honour roll, coaches,
  teams and events, clubhouse (buffet, terrace, sauna, shop), contact
- `/palyarend` — the 2026 court rules and booking rules

Dot-space choreography (`components/space/spartacus-config.ts`): court → racket → "1915" (the
town's first tennis court, on the ground the club still plays on) beside the history heading →
spinning ball behind the coaching section → black hole at the contact section. The subpage gets
the quiet starfield.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/   # shape/text overlap check
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **spartacus**, root directory `spartacus`, domain
`spartacus.tenis.studio`. Like the other folders, it is deployed through the Vercel API with a
two-file upload whose install command downloads this folder from the public repo at a pinned
commit, until the repo is connected in the Vercel dashboard (Project → Settings → Git, root
directory `spartacus`).
