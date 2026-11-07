# Előnyitt S.E. Tenisz Klub — elonyitt.tenis.studio

Two design versions of the Előnyitt S.E. Tenisz Klub site (Nyergesújfalu, Május 1. tér 8. mögött) for the
100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A labelled switch fixed at
the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips between them and keeps your
place: both pages use the same section ids.

- **A — Klasszikus** (`/`): a friendly local-club look from the Előnyitt wordmark: warm paper, the logo's
  blue and green, orange buttons with dark ink; Petrona + Golos Text. The three prices are tickets, the
  annual one stamped "korlátlan". Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), with the
  logo's mark in dots (`public/img/elonyitt-jel-pontok.png`). Code: `app/(b)`, `components/b`,
  choreography in `components/b/space/elonyitt-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
elonyittse@gmail.com), `Icon.tsx`, `Reveal.tsx`. Booking links go to the club's own system,
klub.elonyitt.hu (registration needed; it also holds the club's "piramis" ladder).

## Content

From elonyitt.hu (Főoldal, Pályabérlés, Edzőink, Galéria, Kapcsolat) and the club's email reply in
100web (most new adults come through the free trial; parents also start playing).

- Teniszsuli, Versenyek, Hírek and Rólunk are empty on the old site and Táblázat is password-protected, so
  the site has no programmes, results or history beyond the coach's own text.
- The number of courts isn't published (the drone photos show two blocks), so the site doesn't give one.
  The winter tennis tent is from the coach's bio and the 2021 gallery photo.
- Photos are the club's July 2024 gallery and one 2021 photo; the old site's theme stock images and the
  pexels/clay-net photos aren't used.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **elonyitt**, domain `elonyitt.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo at
a pinned commit.
