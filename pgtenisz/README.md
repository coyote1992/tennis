# PG Tenisz — pgtenisz.tenis.studio

Two design versions of the PG Tenisz és Sport Club Egyesület site (founded 2019; training at the Kőér
Tenisz Klub, 1103 Budapest, Kőér u. 2/b) for the 100web outreach, in one Next.js 16 app (App Router,
TypeScript, no UI library). A labelled switch fixed at the bottom centre of every page ("Dizájn ·
A Klasszikus / B Modern") flips between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): a traditional club look from the PG logo: cream paper, bottle green, old
  gold, Spectral + Work Sans, Roman-numeral chapters, arched coach portraits, a league table of the
  teams by season, an honours board of the 2026 results, a club diary, the 1% tax support and the
  supporters. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`; choreography in `components/b/space/pgtenisz-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `EnquiryForm.tsx` (training enquiry; sending opens a prefilled
e-mail to pgtenisz@gmail.com), `Icon.tsx`, `Reveal.tsx`.

## Content

From pgtenisz.hu (Egyesület, Edzőink, Játékosaink, Csapataink, Programok, the results pages: hazai,
nemzetközi, csapatbajnokság; Támogatóink, Adó 1%, Kapcsolat) and Punyi Gábor's email reply in 100web:
court rental at the Kőér Tenisz Klub on +36 70 313 1032, training enquiries on +36 30 977 4366.

- Nothing about the venue's courts (number, surface, hours, prices) is published, so the site doesn't
  describe them; court rental is by phone.
- Player numbers per age group are counted from the club's "Játékosaink" list; the site shows the
  counts, not the names. Results show 2026 highlights with the names the club publishes.
- Most page-header images on the old site have the old design's overlay baked in, so only the club's
  own unedited photos are used. One supporter logo (an unnamed coat of arms) is left out.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **pgtenisz**, domain `pgtenisz.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
