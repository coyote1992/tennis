# Barango Tenisz Club, Érd — barango.tenis.studio

Two design versions of the Barango Tenisz Club site (2030 Érd, Porcsinrózsa utca 55.; operated by
Ma-Bruk Kft.) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A
labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips
between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): chalk-white paper, the deep green of the windscreens, clay for buttons and
  accents, a touch of ball yellow; Lora + Manrope. Signatures: the price board with a student switch
  (`components/a/PriceBoard.tsx`), the weekly group timetable, and the tenisziskola's red–orange–green
  courts drawn inside each other (`components/a/Levels.tsx`). Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/barango-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
dori0189@gmail.com), `Icon.tsx`, `Reveal.tsx`.

## Content

From barangotenisz.wordpress.com (barangotenisz.hu redirects there): Home, Klub, Árak, Edzések,
Barango Tenisziskola, Pályaépítés, Házirend, Letöltések, Adatkezelési tájékoztató; and the club's reply
in 100web (Kelemen Dóra: the paperwork for children is done after the first session).

- The address is the one printed on the club's parental consent form (also the operator's seat); the
  Árak page places the club in Porcsinrózsa utca.
- Booking is by phone or e-mail; the old site's "Online foglalás" button links nowhere, so the new site
  doesn't offer online booking.
- The weekly group schedule is the table on the Edzések page (Mon/Wed 17–19, Thu 17–18). The school
  rules mention "16:00–18:00"; the site uses the newer, more specific table.
- The student discount (500 Ft/óra) is listed on both hourly rates, not on the 10-hour pass, so the A
  switch only changes the hourly rates. Coaching prices aren't published ("by phone").
- The club events (Őszi Klubkupa, Családi Tenisznap, Éjszakai Tenisz) have no published dates, so only
  their names are shown.
- Photos: the floodlit court and the resurfacing photo are real; the ball-on-line and net close-ups are
  the club's own decorative images. The booking-board and bannered-court images on the old site look
  generated (invented names, court numbers) and aren't used.
- The parental consent PDF is the club's (`public/docs`).

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **barango**, domain `barango.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
