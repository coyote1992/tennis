# Open Tennis Valley — otv.tenis.studio

Two design versions of the Open Tennis Valley site (Mogyoródi Tenisz Centrum, 2146 Mogyoród, Mandula u. 5.;
six clay courts, 30 weeks of covered tennis in winter) for the 100web outreach, in one Next.js 16 app
(App Router, TypeScript, no UI library). A labelled switch fixed at the bottom centre of every page
("Dizájn · A Klasszikus / B Modern") flips between them and keeps your place: both pages use the same
section ids.

- **A — Klasszikus** (`/`): a tournament-club look from the club's own colours: cream paper, the logo's
  navy, terre-battue clay as the accent, Bodoni Moda + Jost, Roman-numeral chapters, a printed price card,
  an honours board of the 2026 champions and the partner logos. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`; choreography in `components/b/space/otv-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`). Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `JoinPicker.tsx` ("Mire jelentkeznél?": each option leads to the
club's own channel — their Google Forms for ovi-tenisz and the free kids' trial, a phone call for adult
coaching and room hire, an e-mail for the summer camp and the membership notice), `Icon.tsx`, `Reveal.tsx`.

## Content

From o10v.hu: Home, Online foglalás, Áraink (2026/27 winter prices), Klubtagság, Ovis tenisz,
Gyerektenisz (Play & Stay, groups and weekly timetable), Felnőtt tenisz, Gyerek tábor, Gyógytorna (HV
Physio), Masszázs (Pihenő), Terembérlés, Contact and the 2026 tournament pages (Tennis Europe U14, ITF
W15, UTR Pro Tennis Tour, ITF J60). Their reply in 100web was only "mit szeretnél?", so nothing comes from
it. Photos are the club's own (mostly tournament photography); the partner logos are the ones in their
footer, tinted to one colour.

- Booking is through the club's own app (App Store / Google Play), as on their site.
- The homepage's "Legjobb ár 7 200 Ft" does not match the prices page (best 10-session price 7 600 Ft /
  court / hour); the site uses the prices page.
- Membership applications for 2026/27 closed on 28 September 2026; the site says so and offers the
  club's "notify me" e-mail.
- The summer camp is shown with the 2026 prices; no 2027 dates are published.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **otv**, domain `otv.tenis.studio`. Deployed through the
Vercel API with a two-file upload whose install command downloads this folder from the public repo at a
pinned commit.
