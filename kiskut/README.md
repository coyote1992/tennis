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

## Two versions

The site has two designs side by side, with a labelled switch fixed at the bottom centre of every page
("Dizájn · A Klasszikus / B Modern"). Switching opens the same page in the other version, at the
section you were reading (both versions use the same section ids).

- **A — Klasszikus** (`/`, `/hazirend`): a traditional club look in the logo's colours: cream paper,
  the lettering's royal blue, the ball's gold; Newsreader + Albert Sans, the club crest, Roman-numeral
  chapters, printed price cards, an honours board for the Kiskút Open, the Play & Stay courts drawn to
  scale. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`, `/b/hazirend`): the original dot-space site. Code: `app/(b)`, `components/b`.
  Dot-space choreography (`components/b/space/kiskut-config.ts`): court → racket → "2017" (first Kiskút
  Open) beside its heading → spinning ball behind the coaching section → black hole at the contact
  section. The house rules page gets the quiet starfield.

Both read the same facts: `lib/site.ts` (contact, hours, prices, Kiskút Open, programmes) and
`lib/hazirend.tsx` (house rules). Shared: `components/shared/VersionSwitch.tsx`, `Reveal.tsx`. The two
versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404, with
its own small stylesheet so the routes don't preload each other's fonts.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b   # shape/text overlap check (version B)
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
