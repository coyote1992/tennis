# Gubacsi Zsófi Tenisz Klub — gubacsi.tenis.studio

Speculative rebuild of [gubacsizsofi-teniszklub.hu](https://www.gubacsizsofi-teniszklub.hu)
(Gubacsi Zsófi Tenisz Klub SE, Vecsés) for the 100web outreach. Next.js 16 (App Router),
TypeScript, no UI library; the background is the approved `dot-space` kit (`kits/dot-space`, from
the 100web Templates package). Fully separate from the other folders in this repo.

## Content sources

The club's own site (services, Gubacsi Zsófi's bio and results, coaches, apartment, contact, the
events posts and the 2026 summer-camp flyer), the club's e-foglalo page, and Gubacsi Zsófia's email
reply in 100web: current winter prices, reception hours, payment, and that free slots are open to
new guests besides season-pass holders. `lib/site.ts` holds the contact data.

## Page

`/` — hero, courts and services, booking with the winter prices, Gubacsi Zsófi (results), coaching
(coaches, summer camp), community (events, grant), the apartment, contact.

Dot-space choreography (`components/space/gubacsi-config.ts`): court → racket → "2001" (WTA
Casablanca title) beside the Gubacsi Zsófi heading → spinning ball behind the coaching section →
black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **gubacsi**, domain `gubacsi.tenis.studio`. Deployed
through the Vercel API with a two-file upload whose install command downloads this folder from the
public repo at a pinned commit.
