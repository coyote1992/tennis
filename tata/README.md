# Tata Városi Tenisz Klub — tata.tenis.studio

Speculative rebuild of [csekeliget.hu](https://csekeliget.hu) (Tata Városi Tenisz Klub, Cseke-liget,
Tata) for the 100web outreach. Next.js 16 (App Router), TypeScript, no UI library; the background is
the approved `dot-space` kit (`kits/dot-space`, from the 100web Templates package). Fully separate
from the other folders in this repo: own dependencies, own Vercel project.

## Content sources

The club's own pages (home, Rólunk, Vezetőség, Pályabérlés, Pályahasználati rend 2019,
Elérhetőségeink, news posts 2015–2022 and their photos), the club's e-foglalo page (2026 membership
fees and guest court fees), and the club's email reply in 100web: who each membership is for, and the
trial offer (the first three visits at the court fee, credited in full against a membership taken
afterwards). `lib/site.ts` holds the contact data.

## Pages

- `/` — hero with the trial note, courts, guest booking and court fees, the club since 1993
  (events, board), membership 2026 with the trial offer, coaching and summer camp, contact
- `/palyarend` — the playing rules from the 2019 court rules (priority, peak hours, court care);
  the 2019 fees are left out because the 2026 fees replace them

Dot-space choreography (`components/space/tata-config.ts`): court → racket → "1993" (the club's
founding year) beside the club heading → spinning ball behind the membership section → black hole
at the contact section. The subpage gets the quiet starfield.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/   # shape/text overlap check
```

## Deploy

Vercel team **Tennis** (`coyote5`), project **tata**, root directory `tata`, domain
`tata.tenis.studio`. Like the other folders, it is deployed through the Vercel API with a two-file
upload whose install command downloads this folder from the public repo at a pinned commit, until
the repo is connected in the Vercel dashboard (Project → Settings → Git, root directory `tata`).
