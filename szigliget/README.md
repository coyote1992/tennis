# Tennis Club Szigliget — szigliget.tenis.studio

Two design versions of the Tennis Club Szigliget site (Szigliget Tenisz Club Kft., Werner és Eszter
Blödorn) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A
labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips
between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): from the club's roundel: limestone paper, the logo's indigo (the Balaton
  wave) and gold, court clay for accents; Marcellus for headings, Figtree for text and all numbers
  (Marcellus draws 0 like O). Signatures: the membership prices as court hours with a slider
  (`components/a/HoursCalc.tsx`), "Egy óra a pályán" (55 minutes of play, 5 of watering and
  brushing), and the Szigliget Open as a poster. Code: `app/(a)`, `components/a`.
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), with
  the logo's mark in dots (`public/img/szigliget-jel-pontok.png`). Code: `app/(b)`, `components/b`,
  choreography in `components/b/space/szigliget-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
szigligettenisz@gmail.com), `Icon.tsx`, `Reveal.tsx`. Booking and membership links go to the club's
own system on szigliget-tennis.hu (registration, Barion card payment), with its German and English
booking pages linked too.

## Content

From szigliget-tennis.hu (Kezdőlap, Rólunk, Tagság, Foglalás, Szigliget Open and its galleries,
Házirend, ÁSZF, Impresszum, all dated 15 May 2026) and the club's email reply in 100web (Blödorn Péter,
3 November 2026: new family members are mixed, about 60–70% holiday-makers).

- Court price and member rates are what the booking page itself charges: 5 000 Ft per court hour for
  non-members; members pay nothing if every player is a member, and 1 250 Ft per hour for each
  non-member partner; members can book up to 2 hours a day on member terms. The ÁSZF says the price
  depends on the number of players, so the site doesn't claim it is flat.
- Membership prices are the published 2026 list (valid until 31 December 2026). The "= N óra" figures
  are price ÷ 5 000 Ft.
- The number of courts isn't given: Rólunk says two, the booking grid shows four.
- The address is the company's postal address from the Impresszum (8264 Szigliget, Réhelyi út 31–32.).
  The privacy page's other phone number and 8–19 hours are older; the site uses the Rólunk and footer
  details (+36 20 331 1630, every day 8:00–21:00).
- The Szigliget Open is shown as its most recent edition (7–9 August 2026). The archive photos are from
  the club's 2012–2016 Open galleries; the children's photos come from its "Tenisz Iskola" gallery
  and aren't presented as a current programme. The coaches are listed only by name and phone, as on
  Rólunk.
- Photos: the seven 2026 court photos and the clubhouse gallery from szigliget-tennis.hu. The logo is
  cut out of the old header image.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **szigliget**, domain `szigliget.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
