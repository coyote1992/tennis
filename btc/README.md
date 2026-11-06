# Budapest Tenisz Centrum (BTC) — btc.tenis.studio

Two design versions of the Budapest Tenisz Centrum site (Városmajor, 1122 Budapest, Szamos utca 2/c) for
the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A labelled switch
fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips between them and
keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): an editorial club look from the BTC badge: warm paper, the badge's navy,
  its sky blue for highlights and court clay as the accent; Instrument Serif + Schibsted Grotesk. The
  signature is a drawn plan of the seven numbered courts (5 clay, 2 Rebound Ace); the Play & Stay
  stages are drawn to scale. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), deep
  navy night with the badge's sky blue. Code: `app/(b)`, `components/b`. Choreography in
  `components/b/space/btc-config.ts`, the BTC mark in dots in `public/img/btc-jel-pontok.png`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `EnquiryForm.tsx` (court booking request or training enquiry;
sending opens a prefilled e-mail to btcrecepcio@gmail.com; `<PickGroup>` links preselect a group or court
booking and jump to the form), `Icon.tsx`, `Reveal.tsx`.

## Content

From versenytenisz.budapestteniszcentrum.com (főoldal, Rólunk, Munkatársaink, Pályáink, Áraink, Play &
Stay, Kapcsolat) and the club's email reply in 100web (4 November 2026).

- The reply says there is no separate academy any more. The four groups (Óvodai tenisz 3–5, Play & Stay
  5–10, U12–16 with the Centerpálya Egyesület, felnőtt csoport 18+), their times and coaches are from the
  reply; the academy, its prices and the US scholarship pages are left out, and so are the academy-era
  staff.
- Courts: 7 (1–5 clay, 6–7 Rebound Ace), as on Rólunk and Pályáink; the homepage's "four" hard courts is
  out of date.
- Prices: court prices were last published for the 2025/26 winter season and the two pages disagree on
  Play & Stay prices, so the site sends visitors to the reception for prices. Only the stringing price is
  shown.
- Phone numbers: the reception (+36 30 226 1890) for everything, and Bodnár Bettina for Play & Stay (the
  club publishes her number). The coaches' mobiles from the email reply are not published.
- Supporters: the logos on the club's homepage, without the MTK crest.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **btc**, domain `btc.tenis.studio`. Deployed through the
Vercel API with a two-file upload whose install command downloads this folder from the public repo at a
pinned commit.
