# Pécs Városi Tenisz Club — pvtc.tenis.studio

Speculative rebuild of [pvtc.hu](https://pvtc.hu/) (Pécs Városi Tenisz Club, Gulyás István
Teniszcentrum, 7633 Pécs, Dr. Veress Endre utca 4.) for the 100web outreach. Next.js 16 (App Router),
TypeScript, no UI library; the background is the approved `dot-space` kit (`kits/dot-space`, from the
100web Templates package). Fully separate from the other folders in this repo.

## Content sources

The club's site (Főoldal, Bemutatkozás and club history, Edzők, Vezetőség, Áraink és csomagok for the
2026 summer season, Wellness, Play&Stay, Csoportos gyermektenisz, Felnőttoktatás, Nyári tenisz napközi,
Eredményjelző, Brand Slam, Tüke Tenisz Kupa, Híreink, Házirend, Kapcsolat, Pályafoglalás, Galéria
photos) and Horváth Rita's email reply in 100web: beginners and advanced players both sign up for
lessons, and the club finds a coach for every level. `lib/site.ts` holds the facts.

## Page

`/` — hero (winter season: 4 covered, heated courts; online booking 0–24), courts and the three ways to
book, 2026 summer prices (season passes, hourly, 10/20-hour passes), coaching (four programmes, four
coaches), the club (history since 1992, Gulyás István, clubhouse, sauna, a member's quote),
competitions (Tüke Kupa, Brand Slam, recent results, the first-division teams, house rules), contact
with map.

Dot-space choreography (`components/space/pvtc-config.ts`): court → racket → the club's badge
(`public/img/pvtc-pontok.png`: the yellow ball with "PVTC") beside the club-history heading →
spinning ball behind the competitions → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **pvtc**, domain `pvtc.tenis.studio`. Deployed through the
Vercel API with a two-file upload whose install command downloads this folder from the public repo at
a pinned commit.
