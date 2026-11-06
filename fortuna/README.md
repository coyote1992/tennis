# Fortuna SE Tenisz — fortuna.tenis.studio

Speculative rebuild of [fortunatenisz.hu](https://www.fortunatenisz.hu/) (Fortuna Sportegyesület,
tenisz szakosztály, 1173 Budapest, Gyökér utca 18.) for the 100web outreach. Next.js 16 (App
Router), TypeScript, no UI library; the background is the approved `dot-space` kit
(`kits/dot-space`, from the 100web Templates package). Fully separate from the other folders in
this repo.

## Content sources

The club's own site (home, Áraink, Rólunk, Edzőink, Események, Kapcsolat), the 2026 summer-camp
sheet linked from its homepage, and Kovács Bea's email reply in 100web: new children are welcome,
and a new kindergarten group starts once enough children sign up. Prices are the club's 2026/27
winter list. `lib/site.ts` holds the contact data. Photos and the logo are the club's own.

## Page

`/` — hero, tennis school (programmes and fees), winter court rental, about (history, photos),
coaches, summer camp, house tournaments, contact.

Dot-space choreography (`components/space/fortuna-config.ts`): court → racket → the club's
emblem (the ball with the four-leaf clover from the FORTUNA logo, `public/img/emblem-dots.png`:
orange dots for the ball, green for the clover) beside the about heading → spinning ball behind
the coaches → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **fortuna**, domain `fortuna.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
