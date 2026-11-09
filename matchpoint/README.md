# Match-Point Tennis Club & Shop — matchpoint.tenis.studio

Two design versions of the Match-Point Tennis Club & Shop site (1022 Budapest, Marczibányi tér 16.;
Match-Point Kft.) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library).
A labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips
between them and keeps your place: both pages use the same section ids. The webshop stays on
matchpoint.hu; the site links to its categories.

- **A — Klasszikus** (`/`): white and stone grey, the logo's black and lime green; Barlow Condensed +
  Barlow. Signatures: the court prices drawn as the day from 6 to 22 with a season switch
  (`components/a/SeasonPrices.tsx`), and the Racket Service section with the ten stringing steps, the
  club's stringing photo series and "a PONT". Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/matchpoint-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
matchpoint@t-online.hu), `Icon.tsx`, `Reveal.tsx`.

## Content

From matchpoint.hu (Főoldal, Bemutatkozás, Pályabérlés with the house rules, Oktatás, Racket Service,
Húrozás, Kapcsolat, ÁSZF, the webshop menu) and the club's reply in 100web (for a racket test Velcz Zsolt
calls back to agree the racket and the time).

- Court prices are the latest published: the 2025/26 indoor season and the 2026 outdoor season, both
  labelled with their dates. Prices for the 2026/27 indoor season aren't published; the site says to ask
  the reception.
- The 2026 kids' course terms have ended; the site shows the format and price and says to ask for the
  new dates.
- Stringing with your own string is 3 500 Ft on the Racket Service page (updated April 2026); the older
  Húrozás subpage says 3 000 Ft. The site uses 3 500 Ft.
- Opening hours are the shop's (Kapcsolat page), which are also when rackets are dropped off and
  collected. Court hours follow the price tables (weekdays 6–22, weekends 7–20).
- Photos are the club's own (clubhouse, garden, court entrance, shop, Velcz Zsolt, the stringing
  series). Wilson's campaign banners and the stock clothes-rail image aren't used.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **matchpoint**, domain `matchpoint.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
