# OMSZK Park Tenisz — omszk.tenis.studio

Speculative rebuild of [omszkparktenisz.hu](https://omszkparktenisz.hu) (OMSZK Park Teniszklub,
Budakalász, by the Omszki lake) for the 100web outreach. Next.js 16 (App Router), TypeScript, no
UI library; the background is the approved `dot-space` kit (`kits/dot-space`, from the 100web
Templates package). Fully separate from the other folders in this repo: own dependencies, own
Vercel project.

## Content sources

The club's own pages (home, Szolgáltatás, Edzőink, Helyszín, Tanfolyam, Tábor, Árak for the
2026/27 winter season), the Google Maps listing (street address), and the head coach's email reply
in 100web (adult training runs in fixed, pre-arranged groups; no drop-in sessions).
`lib/site.ts` holds the shared contact data, `lib/course.ts` the children's course blocks and prices.

## Pages

- `/` — hero with online booking (the club's HELLA system), courts and winter season, prices,
  location and the complex, coaching (philosophy, programmes, course season strip), coaches,
  summer camp, contact
- `/gyerek-tanfolyam` — the children's course: all 4-week blocks, prices, what is included, how
  to prepare

The course strip marks the running and the next block from the visitor's date (client-side), so
it never shows a stale "now".

Dot-space choreography (`components/space/omszk-config.ts`): court → racket → the club's map-pin
emblem (from its logo) beside the location heading → spinning ball behind the coaching section →
black hole at the contact section. The subpage gets the quiet starfield.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/   # shape/text overlap check
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **omszk**, root directory `omszk`, domain
`omszk.tenis.studio`. Like the other folders, it is deployed through the Vercel API with a
two-file upload whose install command downloads this folder from the public repo at a pinned
commit, until the repo is connected in the Vercel dashboard (Project → Settings → Git, root
directory `omszk`).
