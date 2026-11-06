# Marcal Teniszcentrum — marcal.tenis.studio

Two design versions of the Marcal Teniszcentrum site (9024 Győr, Gulyás István u. 3.; tennis, padel,
squash and bowling since 2006) for the 100web outreach, in one Next.js 16 app (App Router,
TypeScript, no UI library). A labelled switch fixed at the bottom centre of every page ("Dizájn ·
A Klasszikus / B Modern") flips between them and keeps your place: both pages use the same section
ids.

- **A — Klasszikus** (`/`): a traditional club look taken from the logo: cream paper, claret, old
  gold, Libre Caslon Display + Libre Franklin, Roman-numeral chapter labels, double rules and photos in
  cream mats. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), Sora +
  Inter, claret-black night with tennis-ball lime. Code: `app/(b)`, `components/b`. Choreography in
  `components/b/space/marcal-config.ts`: court → racket → the club's ball logo in dots
  (`public/img/labda-pontok.png`) beside the coaching section → ball → black hole.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`). Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `EnquiryForm.tsx` (the club's two forms, "Oktatásra
jelentkezem" and "Partnert keresek"; sending opens a prefilled e-mail to info@teniszgyor.hu),
`Icon.tsx`, `Reveal.tsx`.

## Content

From teniszgyor.hu (Főoldal with its counters and events, Rólunk with the house rules and opening
hours, Sportágak, Szolgáltatások with the coaches, Csapatunk, Kapcsolat, the "Pilates & Padel" and
"duális képzés" posts) and Pátka-Szitter Kata's email reply in 100web: an enquiry goes to a coach, who
sets out the options and, if needed, brings in a colleague. Booking links to SportMate.

- Tennis courts: the club's pages say 7 clay courts (4 under a heated tent in winter); one feature list
  says 6. The site uses 7.
- The prices page (Áraink) is empty on the live site, so no prices are shown.
- Most sports photos on the old site are stock images; only the centre's own photos are used.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **marcal**, domain `marcal.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
