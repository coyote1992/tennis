# Molnár Teniszakadémia Budakeszi — molnar.tenis.studio

Speculative rebuild of [molnarteniszakademia.eu](https://molnarteniszakademia.eu/) (Molnár
Teniszakadémia, Budakeszi teniszcentrum, 2092 Budakeszi, Márity László u. 17.) for the 100web outreach.
Next.js 16 (App Router), TypeScript, no UI library; the background is the approved `dot-space` kit
(`kits/dot-space`, from the 100web Templates package). Fully separate from the other folders in this
repo.

## Content sources

The academy's own site for Budakeszi (home, Kapcsolat, Pályabérlés, Áraink with the 2026/27
covered-season prices, Felnőtt tenisz, Gyermek tenisz, Táborok, Rólunk with the coaches, the 2026 news
posts and the "Nálunk 1 az 2!" poster) and Balázs's email reply in 100web: newcomers join the existing
amateur community, team training is on Wednesday and Friday 19–21, the academy fields teams in three
divisions (OB II, Budapest II, megyei I), and he invited us to try a session. That is why the page
opens with the adults' team community. `lib/site.ts` holds the contact data, prices and coaches. The
logo is cut from the club's high-resolution poster and recoloured for the dark theme.

## Page

`/` — hero, adults (team training, beginner and restarter groups, private lessons with coach fees),
children (group fees, "Die Zukunft" competition programme), about and coaches, courts and prices (the
tent, the "1 az 2" offer, the 2026/27 covered-season table, cancellation, buffet, parking, bus),
summer camp, contact with map.

Dot-space choreography (`components/space/molnar-config.ts`): court → racket → "2009" (the year the
academy was founded, in Marcellus, close to the logo's serif) beside the about heading → spinning ball
behind the courts and prices → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **molnar**, domain `molnar.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
