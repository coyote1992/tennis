# Szoboszlótenisz · Hungarospa Sportcentrum — szoboszlo.tenis.studio

Two design versions of the Szoboszlótenisz site (Hungarospa Sportcentrum, 4200 Hajdúszoboszló, József
Attila u. 25., entrance next to the Thermál Hotel; operated by MAZSI Bt.) for the 100web outreach, in
one Next.js 16 app (App Router, TypeScript, no UI library). A labelled switch fixed at the bottom
centre of every page ("Dizájn · A Klasszikus / B Modern") flips between them and keeps your place:
both pages use the same section ids.

- **A — Klasszikus** (`/`): a town club at the spa, from the roundel: white and sky, royal blue and the
  logo's green, clay for details; Zilla Slab + Karla. Signatures: the Piramis rule as a pyramid you can
  tap to see whom a player may challenge (`components/a/Pyramid.tsx`), and the season cards with the
  price per court hour and per player. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), in a
  royal-blue night with the logo's ball seams in dots (`public/img/szoboszlo-jel-pontok.png`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/szoboszlo-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
szoboszlotenisz@gmail.com), `Icon.tsx`, `Reveal.tsx`. Booking links go to the club's page on
palyarafel.hu (register, pick a slot, pay on site).

## Content

From szoboszlotenisz.hu (Főoldal, Árak, Pályarend, Edzőink, Rólunk, Kapcsolat, Versenyek with the
Piramis 2026 rules, Csapataink, Hírességeink, Shop and the news posts 2024–2026) and the club's reply in
100web (the Piramis gives everyone match play, mainly local players, once a player from Debrecen; 2026
was the 5th edition; usually 25–30 entrants, fewer this year).

- Prices are the current list for 2 November 2026 – 31 March 2027 (tent court, coaching, season cards).
  Summer clay-court prices aren't published, so none are shown. "Per player" figures on the cards are
  the club's own 2-unit price for singles and half of it (1 unit) for doubles.
- Opening hours are the ones in the footer of every page (Mon–Fri 7–22, Sat–Sun 7–12 and 15–20); the
  Kapcsolat page says "H-V 6:30-22:00", which the site doesn't use.
- The Piramis section shows the 2026 rules and schedule as the latest edition and the 2025 results;
  the 2026 results aren't published. The pyramid diagram shows positions only, no names.
- The second team is listed as "HSE 21" on Csapataink and called "SERVAL" in a 2026 post, so the site
  names only the first team (ATLAS).
- Coaches are the two with bios on Edzőink (Erdei László, Csapó Andrea); the two racket adverts on that
  page aren't coaches. Photos are the club's own; the stock images and racket ads aren't used.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **szoboszlo**, domain `szoboszlo.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
