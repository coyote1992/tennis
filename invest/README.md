# Invest Sportcentrum és Vendégház — invest.tenis.studio

Two design versions of the Invest Sportcentrum és Vendégház site (3300 Eger, Dr. Frank Mária u. 1.;
Invest Sport Kft.) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI
library). A labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B
Modern") flips between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): the Invest Sport roundel's yellow and black on warm off-white, the indoor
  courts' blue for accents; Bitter + DM Sans. Signature: the indoor hall's winter prices as bars with a
  one-off / pass switch (`components/a/HallPrices.tsx`). Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/invest-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx` (also re-aligns #section arrivals once fonts have loaded),
`ContactForm.tsx` (opens a prefilled e-mail to info@investvendeghaz.hu), `Icon.tsx`, `Reveal.tsx`.

## Content

From investvendeghaz.hu (Kezdőlap, Invest Sport, Árlisták, Házirend, Invest Vendégház, Szobaáraink,
Akciós csomagajánlatok, Pályafoglalás, Kapcsolat, Galéria) and the club's reply in 100web: court
booking works by phone only, so the site's main action is a call and it doesn't mention the
"online booking coming soon" notice.

- The indoor hall prices are the latest published list (from 13 October 2025), labelled with that date;
  the 2025/26 winter passes were valid until 31 May 2026, which the site says. Outdoor clay court prices
  aren't published, so none are shown.
- Room prices are the list "from 1 January 2025". The tourist tax is 650 Ft on the room-price page and
  750 Ft on the 2026 package pages; the site states the tax only with the packages (750 Ft).
- Only the packages still bookable (until 20 December 2026) are shown; "Pihentető hétköznapok 3=4"
  ended on 11 June 2026.
- Photos are the club's own (indoor hall, clay courts from the terrace, squash, buffet, sauna, changing
  room, guesthouse rooms and lounge); the stock images on the old site aren't used.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **invest**, domain `invest.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
