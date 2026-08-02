# 011 — Site favicon from brand logo

## Goal

Replace the default Next.js favicon with The Beach House Café mark, as a **round** icon.

## Implemented

- Generated circular masked assets from `public/logo2.png` via sharp (`dest-in` circle mask)
- `public/logo-icon.png` (512) — used in `metadata.icons`
- `src/app/icon.png` (32), `src/app/apple-icon.png` (180), `src/app/favicon.ico` (32 round)
- `layout.tsx` icons point to `/logo-icon.png`
