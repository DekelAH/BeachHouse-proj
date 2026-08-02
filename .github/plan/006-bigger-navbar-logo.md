# Plan: Bigger navbar logo (keep structure)

## Goal
Make the navbar logo larger without changing layout structure (left logo, center links, right CTA / hamburger).

## Current setup
In `Navbar.tsx`, the logo is:

```tsx
<Image
  src="/logo2.png"
  alt="The Beach House Café"
  width={140}
  height={46}
  className="h-10 w-auto"
  priority
/>
```

- Display size is controlled by `className="h-10 w-auto"` (40px tall).
- `width` / `height` are intrinsic hints for Next.js Image (aspect ratio / optimization), not the final CSS size.

## Approach (structure stays the same)
1. Increase the Tailwind height class on the logo (`h-10` → larger).
2. Bump `width` / `height` props roughly in proportion so Next Image still has a sensible source size.
3. Optionally keep a slightly larger logo when scrolled (nav padding already shrinks from `py-5` → `py-3`).
4. Verify desktop + mobile so the logo does not crowd the hamburger or wrap the bar.

## Size options
| Class | Approx height |
|-------|----------------|
| `h-12` | 48px |
| `h-14` | 56px |
| `h-16` | 64px |
| `h-20` | 80px |

## Decisions
- Size: `h-16` (64px), with `width={200}` / `height={66}`
- Same size when scrolled
- Same size on mobile and desktop

## Done
- Updated logo `Image` in `Navbar.tsx` only; structure unchanged.

## Follow-up: round logo
- Make logo circular: square box (`h-16 w-16`) + `rounded-full` + `object-cover`
- Keep navbar structure unchanged
