# Bajai Tenisz Klub — baja.tenis.studio

Speculative rebuild of [bajatenisz.ewk.hu](https://bajatenisz.ewk.hu/) (Bajai Tenisz Klub, Dr.
Csátaljay István Tenisz Centrum, Baja, Petőfi-sziget) for the 100web outreach. Next.js 16 (App
Router), TypeScript, no UI library; the background is the approved `dot-space` kit
(`kits/dot-space`, from the 100web Templates package). Fully separate from the other folders in
this repo.

## Content sources

The club's own site (Egyesület, Szolgáltatások, Pályafoglalás, Kapcsolat, Rendezvénynaptár with the
2024 and 2025 calendars, the 2024 court-fee poster, the house-rules PDF, the grant notice), the
booking system at bajatenisz.hu, and Almádi-Székely Éva's email reply in 100web: there is no
membership fee any more, only a court fee, so anyone can register for online booking; in winter
an outside operator runs the courts and winter rental goes through Kökény Gábor. `lib/site.ts`
holds the contact data.

Coach Stark Tamás died in February 2026 (the club's homepage carries the notice), so he is not
listed among the coaches.

## Page

`/` — hero, booking (three steps, house rules), court fees and winter rental, the club (facts,
board, documents), coaches, the 2025 tournament calendar, contact.

Dot-space choreography (`components/space/baja-config.ts`): court → racket → "1980" (the year the
club was founded) beside the club heading → spinning ball behind the coaches → black hole at the
contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **baja**, domain `baja.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public
repo at a pinned commit.
