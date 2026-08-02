# 007 — Footer white rectangle: diagnose & design direction

## What's happening

The footer brand column renders `/logo.png` with Tailwind `brightness-0 invert` on a navy background.

`logo.png` has an **opaque cream/off-white canvas**, not a transparent one. The filter pipeline:

1. `brightness-0` → entire image (wave + type + background) becomes black
2. `invert` → that black field becomes white

Result: a solid **white rectangle** where the logo should read. This is a filter/asset mismatch, not intentional empty layout space.

The navbar already solves branding differently: circular `logo2.png` with an explicit cream fill (`bg-[#f7f3ec]`), which preserves the mark.

## Design verdict (seasoned take)

**Do not "fill" the white rectangle with more UI.** First remove the accidental block — it reads as a broken asset, not a content slot.

After that, the brand column still needs a clear job. For a beach café site, that column should be **wayfinding + trust**, not another marketing dump.

### Recommended use of the brand column space

| Priority | Content | Why |
|----------|---------|-----|
| 1 | **Readable logo mark** | Brand signal at page end; matches nav identity |
| 2 | **One short tagline** (already there — keep tight) | Atmosphere without repeating hero copy |
| 3 | **Practical visit info** | Address / "Cordova Bay" + phone or "Get directions" — people scroll to footer for this |
| 4 | Optional: soft CTA | "Reserve the patio" or "View menu" as text link — one action max |

### What not to put there

- Newsletter signup (extra form at page end feels heavy for this brand)
- Duplicate full nav + social + hours already in columns 2–3
- Large photo / Instagram embed (competes with Gallery; footer should stay light)
- Another card or bordered box on navy (adds noise)

### Logo treatment options (pick one)

**A — Best for current assets:** Use `logo2.png` as a small circular mark (same language as navbar), then optional wordmark text beside/below. Cream disc on navy is intentional and on-brand.

**B — Cleanest long-term:** Export a **transparent PNG/SVG** of the wave + type only, then invert *only the ink* (or ship a white monochrome version). No cream plate in the footer.

**C — Keep cream plate intentionally:** Show `logo.png` / `logo2` *without* invert, as a small rounded/cream badge — same idea as the nav circle. White/cream rectangle becomes a designed "seal," not a filter accident. Size it tight (`h-14`–`h-16`), not a wide strip.

**Avoid:** Keeping `brightness-0 invert` on an opaque-background PNG.

## Layout note

Once the logo reads correctly, the 3-column footer (Brand | Quick Links | Follow + Hours) is already a solid café pattern. Prefer enriching column 1 with location/phone over reshuffling the whole grid.

## Decisions (answered)

1. **A** — circular `logo2` like nav
2. **Tagline only** — no address/phone in brand column
3. **Keep calm** — no footer CTA

## Implementation

- Replace footer `logo.png` + `brightness-0 invert` with `logo2.png` circular treatment matching Navbar (`h-16 w-16 rounded-full object-contain bg-[#f7f3ec]`)
- Leave existing tagline as-is
- No extra brand-column content
