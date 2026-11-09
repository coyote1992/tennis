# Szép Juhászné Teniszklub — szepjuhaszne.tenis.studio

Two design versions of the Szép Juhászné Teniszklub site (1021 Budapest, Szép Juhászné út 14., owner
Gáspár Balázs) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A
labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips
between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): a club with a museum in its clubhouse: cream paper, the logo's green,
  deep forest green and brass; EB Garamond for headings (italic second lines), Hanken Grotesk for text
  and all prices. Signatures: the winter price list as a printed board (cards per time band on phones),
  the exhibitions as a timeline, and the collection as a vitrine with numbered museum plaques. Code:
  `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), in a
  forest-green night with the logo's mark in dots (`public/img/szepjuhaszne-jel-pontok.png`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/szepjuhaszne-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
gaspar.balazs.tenisz@gmail.com), `Icon.tsx`, `Reveal.tsx`. Booking is by phone only, as on the club's
site, so the main button everywhere calls Gáspár Balázs.

## Content

From szepjuhaszneteniszklub.hu (Főoldal, Rólunk, Kapcsolat, Pályafoglalás és áraink, Tenisziskola,
Táborok and the news posts 2019–2025, including the Totaltenisz article of December 2023 and the
tenisz-palya.hu interview of October 2020 that the club republished) and the owner's replies in 100web
(3 November 2026: new members who want to join the community are welcome; 5 November: the autumn
art-history lectures in the clubhouse).

- Prices are the winter list uploaded on 2 November 2026 (5 October 2026 – 11 April 2027, 27 weeks).
  Summer court prices aren't published, so none are shown. The list gives weekend times as 7–22, the
  opening hours say 7–20 at weekends; the site shows the weekend row without times and the opening
  hours as published.
- "Two clay courts, with a tent in winter" is from the 2023 article ("a két teniszpálya feletti sátor")
  and the photos.
- The camp details and its 75 000 Ft price are the 2024 ones (the latest published); the site labels
  the price as 2024 and asks visitors to call for this year's dates. The old application form link
  isn't used.
- The address is "Szép Juhászné út 14." (Kapcsolat); the camp page says 14–18.
- The exhibitions timeline uses the years and themes from the posts (2019 Körmöczy Zsuzsa, 2020 the
  Victorian era, 2023 art deco, 2025 "Tenisz és a nők"). Object captions describe only what the photos
  show and what the interview says about the collection.
- Gáspár Benedek is described only as a coach and the tennis-school contact. The lecturer named in the
  forwarded invitation isn't named on the site.
- Photos are all from the club's site; the stock photo on the old "Rólunk" page isn't used.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **szepjuhaszne**, domain `szepjuhaszne.tenis.studio`.
Deployed through the Vercel API with a two-file upload whose install command downloads this folder from
the public repo at a pinned commit.
