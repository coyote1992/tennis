# Next Tenisz Akadémia — next.tenis.studio

Two design versions of the Next Tenisz Akadémia site (1121 Budapest, Őzike út 30/A, by the Normafa)
for the 100web outreach, in one Next.js 16 app (App Router, TypeScript, no UI library). A switch on
every page (bottom left on phones, a tab on the left edge on wide screens) flips between them and
keeps your place: an A page opens the matching B section and vice versa.

- **A** (`/`, `/tenisz`, `/szemelyi-edzes`, `/csoportos-orak`, `/regeneracio`, `/palyaberles`,
  `/galeria`, `/kapcsolat`, `/jelentkezes`, `/adatkezeles`): the previous next.tenis.studio site,
  rebuilt and restyled one shade darker and quieter: dusk navy with warm stone bands, clay-court
  terracotta accent, brass hairlines, Cormorant Garamond + Jost. Code: `app/(a)`, `components/a`.
- **B** (`/b`): a one-page version in the dot-space style of the other club sites (kit in
  `kits/dot-space`), Barlow Condensed + Barlow, the club's lime/red logo colours. Code: `app/(b)`,
  `components/b`. Choreography in `components/b/space/next-config.ts`: court → racket → the club
  logo (`public/img-b/logo-pontok.png`) → ball → black hole.

The versions have separate root layouts (route groups), so switching is a full page load and no
styles leak between them. `app/global-not-found.tsx` is the shared 404 (needs
`experimental.globalNotFound`).

## Content

All facts live in `lib/site.ts`, with sources noted at the top: the club's own site
(next-tenisz.hu: winter court fees until 2027-04-11, hours, the massage/cupping and vagus therapy
pages, softlaser "hamarosan", directions), its online booking calendar (next-tenisz.hu/foglalas:
Good Morning Club Tue/Thu 7:30, 3 000 Ft; Köredzés Tue 11:00 and Fri 9:00, 4 000 Ft), and the
previous demo (the 2026 autumn junior sign-up sheet, the trainer's texts, the 2026 tournaments).
The old demo's source repository no longer exists; it was rebuilt from the deployed pages.

## Sign-up flow

`components/shared/BookingFlow.tsx` (logic in `lib/flow.ts`) is used by both versions and posts
to `app/api/jelentkezes/route.ts`. With `RESEND_API_KEY` set (optionally `SIGNUP_TO`,
`SIGNUP_FROM`) it e-mails the sign-up; without it the form offers a prefilled e-mail and the
phone number instead, as the previous site did.

## Local

```bash
npm ci
npm run build && npm start
node kits/dot-space/check/stages.mjs http://localhost:3000/b
```

## Deploy

Vercel team **Tennis** (`coyote5`), existing project **next**, domain `next.tenis.studio`.
Deployed through the Vercel API with a two-file upload whose install command downloads this
folder from the public repo at a pinned commit.
