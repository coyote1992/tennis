# Tréning Center — trening.tenis.studio

Two design versions of the Tréning Center Sport- és Szabadidőközpont site (Békéscsaba, Víztároló utca 2.;
three clay tennis courts with a heated winter tent, two lit artificial-turf football pitches, a pub and
event venue) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A
labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips
between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): a traditional sports-ground look from the logo's colours: cream paper, warm
  charcoal, the logo's red, Fraunces + Public Sans, Roman-numeral chapters, matted photos, a 12-month
  season ribbon (outdoor clay May–September, heated tent October 15 – April 15), a price card, the 2022
  county champions' roster and an events scoreboard. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`). Code:
  `app/(b)`, `components/b`; choreography in `components/b/space/trening-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `EnquiryForm.tsx` ("Kérj ajánlatot": coaching or event request;
sending opens a prefilled e-mail to the centre), `Icon.tsx`, `Reveal.tsx`.

## Content

From treningcenter.hu (Főoldal and its counters, Rólunk, the service pages, Események, Galéria,
Kapcsolat, the two GINOP grant pages) and Nemes Attila's email reply in 100web: adult groups of 4–5 with a
fixed time and coach, usually 2 × 1 hour a week, 25 000 Ft / month / person; summer season May 1 –
September 30, winter season October 15 – April 15; court 4 200 Ft / hour in summer, 10 500 Ft / hour in
winter, coach 5 500 Ft / hour; adult-group coaches Belanka Ádám and Varga Péter.

- The coaches' mobile numbers from the email are not published; enquiries go to Nemes Attila (his number
  is on their contact page), the booking phone and the e-mail address.
- Booking links to their HELLA calendar (foglalas.treningcenter.hu).
- No opening hours and no football-pitch prices are published, so none are shown.
- The homepage slider images are stock photos; only the centre's own photos are used. The logo and the
  player figure were upscaled from the small originals.
- The footer keeps links to the two EU-grant information pages on their site.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **trening**, domain `trening.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo at
a pinned commit.
