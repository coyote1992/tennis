# Pécsi Elektromos SE — pese.tenis.studio

Two design versions of the Pécsi Elektromos Sportegyesület site (Diófa utcai sporttelep, 7622 Pécs,
Diófa u. 6.) for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A
labelled switch fixed at the bottom centre of every page ("Dizájn · A Klasszikus / B Modern") flips
between them and keeps your place: both pages use the same section ids.

- **A — Klasszikus** (`/`): a 1968 sports-ground look from the club's roundel: cream paper, olive green,
  court clay and wood; Young Serif + Rethink Sans. The 2026 prices sit on a printed-style price board
  with the roundel as a stamp, and the club's scanned archive photos are laid out like prints. Code:
  `app/(a)`, `components/a` (`Hours.tsx` marks today's opening hours).
- **B — Modern** (`/b`): the dot-space style of the other club sites (kit in `kits/dot-space`), in an
  olive night with the roundel's crossed rackets in dots (`public/img/pese-jel-pontok.png`). Code:
  `app/(b)`, `components/b`, choreography in `components/b/space/pese-config.ts`.

The versions have separate root layouts (route groups); `app/global-not-found.tsx` is the shared 404
(needs `experimental.globalNotFound`) with its own small stylesheet (`app/not-found.css`), so the routes
don't preload each other's fonts. Shared pieces: `lib/site.ts` (all facts),
`components/shared/VersionSwitch.tsx`, `ContactForm.tsx` (opens a prefilled e-mail to
info@pecsielektromosse.hu), `Icon.tsx`, `Reveal.tsx`. Booking links go to the club's own system
(pecsielektromosse.hu/palyafoglalas).

## Content

From pecsielektromosse.hu (Főoldal: Rólunk, Történetünk, Szolgáltatásaink, Támogatóink, Nyitva tartás;
Szolgáltatások; Csapatunk; Árlista; Pályafoglalás; Híreink) and the club's email reply in 100web.

- Prices are from the two 2026 price-list images on Árlista (court hire for the 2026 summer season, and
  sauna / gym / table tennis). The Szolgáltatások page still shows older, lower prices (e.g. sauna
  2 000 Ft); the site uses the 2026 list. The pool price (1 000 Ft, Szolgáltatások only, undated) and
  the winter covered-court prices aren't shown.
- The 15 000 Ft annual membership (sauna and gym usable separately, not the pool) is from the reply.
- The history text on the old site contradicts itself on a few dates (1975 / 1986); the site keeps the
  dates that agree: founded 2 March 1968, Dédász SE until 1986, tennis section 1979, courts 1982–85,
  two more clay courts and independence from Dédász in 1996.
- Coaching contacts (Varga Tamás; Teddy Tennis, Kiss-Tóth Dominik) are the numbers the club publishes.
- The 2025 XL. Villamosenergia-ipari Tenisztalálkozó (21–24 August 2025) is from the club's own
  information booklet.
- Archive photos are captioned only by what they show; they have no dates.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **pese**, domain `pese.tenis.studio`. Deployed through the
Vercel API with a two-file upload whose install command downloads this folder from the public repo at a
pinned commit.
