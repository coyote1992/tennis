# Kiskút Tenisz Klub — kiskut.tenis.studio

Speculative rebuild of [fehervartenisz.hu](https://fehervartenisz.hu) (Fehérvár Kiskút Tenisz Klub,
Székesfehérvár) for the 100web outreach. Next.js 16 (App Router), TypeScript, no UI library; the
background is the approved `dot-space` kit (`kits/dot-space`, from the 100web Templates package).

## Content sources

Every fact on the site comes from the club's own pages (homepage, Pályabérlés, Házirend, the
2023/24 hall price list, the "Tanulási, fejlődési programunk" slides by Galgóczy Lajos), the
club's email reply in 100web (current phone: +36 30 503 8223; restaurant, rooms and wellness are no
longer offered, so they are left out), and the ITF / Wikipedia records of the Kiskút Open.
`lib/site.ts` holds the shared contact data.

## Pages

- `/` — hero, courts, booking (HELLA flow, last published prices, practical rules), Kiskút Open
  timeline, coaching (Play & Stay, programmes), visit / contact
- `/hazirend` — the house rules, rewritten for scanning

Dot-space choreography (`components/space/kiskut-config.ts`): court → racket → "2017" (first
Kiskút Open) beside its heading → spinning ball behind the coaching section → black hole at the
contact section. Subpages get the quiet starfield.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/   # shape/text overlap check
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **kiskut**, root directory `kiskut`, domain
`kiskut.tenis.studio`.

The project is not linked to GitHub yet (the Vercel account used for automation has no GitHub
connection). Until it is, deployments are created through the Vercel API with a two-file upload
(`package.json` + a `vercel.json` whose install command downloads this folder from the public
repo at a pinned commit). To make every push deploy automatically, connect the repo in the
Vercel dashboard: Project → Settings → Git → Connect `coyote1992/tennis`, root directory
`kiskut`, and set the production branch to the branch you push.
