# Kecskeméti Tenisz Udvar — ktu.tenis.studio

Speculative rebuild of [kecskemetiteniszudvar.hu](https://kecskemetiteniszudvar.hu/) (KTU,
Kecskemét, Ceglédi út 108.) for the 100web outreach. Next.js 16 (App Router), TypeScript, no UI
library; the background is the approved `dot-space` kit (`kits/dot-space`, from the 100web Templates
package). Fully separate from the other folders in this repo.

## Content sources

The club's own site (home, Szolgáltatások with the winter cancellation rules and the racket-service
sheet, Információk with the FAQ, Árak with the 2026 summer price list, the 2025/26 winter price-list
image, Galéria, the KTU Kupa page) and Mónika's email reply in 100web: they service anyone's racket,
not only their own players', with Kocsis Zoltán (also on the club's service sheet) and Ujhidy Zoltán
as the contacts. `lib/site.ts` holds the contact data.

The 2026/27 winter prices are not published yet, so last winter's list is shown for reference with
a call-us line.

## Page

`/` — hero (with the old site's "Tökéletes választás …" line as a rotating word), booking in three
steps with the winter cancellation rules, prices (summer 2026, passes, winter 2025/26 for reference),
about and facilities, coaching with the kids' training photos, racket service, guest quotes and the
KTU Kupa, contact with map.

Dot-space choreography (`components/space/ktu-config.ts`): court → racket → "KTU" (as the kids spelled
it in tennis balls in the club's gallery) beside the about heading → spinning ball behind the coaching
section → black hole at the contact section.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **ktu**, domain `ktu.tenis.studio`. Deployed through the
Vercel API with a two-file upload whose install command downloads this folder from the public repo
at a pinned commit.
