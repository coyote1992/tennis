# Folyondár Sportközpont, Óbuda — folyondar.tenis.studio

Two design versions of the Folyondár Sportközpont site (Folyondár Vasas Sport- és Táncközpont,
1037 Budapest, Folyondár utca 15.; clay courts in an old-tree park by the Kiscelli forest: 7 in two
covered tents in winter, 8 in summer, and 2 hard courts on the hall's roof) for the 100web outreach,
in one Next.js 16 app (App Router, TypeScript, no UI library). A labelled switch fixed at the bottom
centre of every page ("Dizájn · A Klasszikus / B Modern") flips between them and keeps your place:
both pages use the same section ids.

- **A — Klasszikus** (`/`): Vasas navy and the logo's red on warm paper, court clay for the price
  shading; Literata + Red Hat Text. Signatures: the full-bleed park hero, the winter/summer court view
  (`components/a/SeasonCourts.tsx`) and the day-in-prices ribbon (`components/a/PriceDay.tsx`).
  Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/folyondar-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx` (also re-aligns #section arrivals once fonts have loaded),
`ContactForm.tsx` (opens a prefilled e-mail to recepcio@folyondar.hu), `Icon.tsx`, `Reveal.tsx`.

## Content

From folyondar.hu (Teniszpálya/árak with the 2026/27 winter list, Teniszoktatás, Rólunk, Nyitvatartás,
Kapcsolat, Vasas, Gyermeksport, Táborok, Edzőterem, Táncterem, Csarnok, Folyondár Café, Rendezvény,
Házirend és parkolószabályzat) and the reception's reply in 100web: for adult coaching, contact the
instructors directly at the contacts on the website. That is why every coach card has its own call
button.

- Clay prices are the published 2026/27 winter list (5 October 2026 – 2 April 2027). The hard-court
  list on the same page names no season, so none is given here.
- The court plan in `SeasonCourts` is schematic: it shows the counts, not the real layout.
- The logo mark (`public/img/folyondar-jel.svg`) is traced from the club's own logo file; the light
  variant only lightens the navy stripe for dark backgrounds. Favicons are made from it.
- Photos are the club's own, from its website.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **folyondar**, domain `folyondar.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
