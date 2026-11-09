# Tenisz és wellness · Batthyány Kastélyszálló — batthyany.tenis.studio

Two design versions of a tennis-and-wellness page for the Batthyány Kastélyszálló**** (8782 Zalacsány,
Csány László u. 24.) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI
library). It is a page for the hotel's clay court and the wellness days that guests combine it with,
not a full hotel site: rooms and stays link to the hotel's own booking and offer pages. A labelled
switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips between the
versions and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): cream paper, the logo's sepia brown, an espresso band, champagne gold and
  the clay of the court; DM Serif Display + Outfit. Signatures: the price card drawn like a clay court,
  and the hotel's own park map with the court-to-spa route you can follow stop by stop
  (`components/a/ParkMap.tsx`). Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/batthyany-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
info@wellnesskastely.hu), `Icon.tsx`, `Reveal.tsx`.

## Content

From wellnesskastely.hu (Tenisz with the court's house rules, Kastély wellness, Kültéri medence,
Rönkszaunák, Sószoba, Vasárnapi wellness a Kastélyban, Négycsillagos páros wellness nap, A Batthyány
Kastély and its history, Szobák és lakosztályok, Gasztronómia, Golf, Fitness terem, Kerékpár bérlés,
Kapcsolat, the park map) and the hotel's reply in 100web (outside guests can book just the court after
registering in advance; they often combine it with a wellness day).

- Court prices are the hotel's: 5 000 Ft / hour for hotel guests, 6 000 Ft / hour for outside guests.
  No combined tennis + wellness price is computed; each is shown as the hotel lists it.
- The tennis page speaks of one court ("teniszpálya") and the castle page of courts; the site doesn't
  give a number. The surface is clay, from the house rules.
- The park map is the hotel's own drawing; the numbers in the route list are the map's numbers.
- Photos and logos are the hotel's own.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **batthyany**, domain `batthyany.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
