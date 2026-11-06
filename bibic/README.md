# Bíbic Tennis Club — bibic.tenis.studio

Speculative rebuild of the tennis page on [bibichotel.hu](https://bibichotel.hu/hu/tennis) (Bíbic
Tennis Club / Tüskevár Teniszklub, 4481 Nyíregyháza, Jázmin köz 26.) for the 100web outreach.
Next.js 16 (App Router), TypeScript, no UI library; the background is the approved `dot-space` kit
(`kits/dot-space`, from the 100web Templates package). Fully separate from the other folders in
this repo.

## Content sources

The club's page on bibichotel.hu (courts, prices, booking conditions, house rules, gallery and the
Bíbic Tennis Club logo), the hotel site's menu and footer (address, phones, e-mail, the Tüskevár's
other offers) and the club's email reply in 100web: a small, family-like club whose courts are kept
mainly for children's lessons and training; free slots are open to local players, and hotel guests
are welcome too. That is why the page leads with the children and then with booking free slots.
`lib/site.ts` holds the contact data and prices.

## Page

`/` — hero, children, court rental (prices, online-only booking with prepayment), the Tüskevár
(terrace, hotel and other offers, photos), house rules (play time per booking, rules), contact
with map.

Dot-space choreography (`components/space/bibic-config.ts`): court → racket → the club's lapwing
("bíbic") on its tennis ball, from the logo (`public/img/bibic-pontok.png`) beside the Tüskevár
heading → spinning ball behind the house rules → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **bibic**, domain `bibic.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public
repo at a pinned commit.
