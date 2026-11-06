# Perfekt Teniszklub — perfekt.tenis.studio

Speculative rebuild of [perfekttenisz.hu](https://perfekttenisz.hu/) (Perfekt Teniszklub / Perfekt Tenisz
Sportegyesület, 1173 Budapest, Gyergyóalfalu utca 8.) for the 100web outreach. Next.js 16 (App Router),
TypeScript, no UI library; the background is the approved `dot-space` kit (`kits/dot-space`, from the
100web Templates package). Fully separate from the other folders in this repo.

## Content sources

The club's one-page site (intro, Áraink valid 2026-04-06 – 2026-10-18, Egyéni oktatás, Házirend, ADÓ 1%,
Foglalás/Kapcsolat, the emblem and the photo slideshow) and Czene Krisztina's email reply in 100web: the
club is closed for the winter, hopes to reopen in early-to-mid March, and will set the spring season and
coaching details closer to opening. That is why the page leads with the winter break and a "tell me
when you open" e-mail, and labels the price list as the 2026 season's. `lib/site.ts` holds the facts.

## Page

`/` — hero (winter-break card, two photos, facts), courts (photos, season hours, three ways to book),
2026 prices (casual / 10-hour pass / 28-week season pass, weekday and weekend), payment and pass rules,
individual coaching (7 000 Ft/hour + court fee, coach Papp-Szilágyi Attila), clubhouse and terrace,
house rules (six highlights + the full text in a disclosure), the 1% tax appeal, contact with map.

Dot-space choreography (`components/space/perfekt-config.ts`): court → racket → the club's emblem
(`public/img/emblema-pontok.png`: the clay court, net and crossed rackets in the green ring) beside
the coaching heading → spinning ball behind the house rules → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **perfekt**, domain `perfekt.tenis.studio`. Deployed through
the Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
