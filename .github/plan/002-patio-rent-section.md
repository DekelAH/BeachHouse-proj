# 002 — Patio Rent Section & Contact Us Refactor

## Overview
Replace the reservation functionality with a pure "Contact Us" section, and create
a new "Rent Our Patio" section with date picking, guest count, per-guest food
selection tabs, AI-generated patio photos, and email submission via Resend.

## Changes

### 1. Extract Menu Data to Shared File
- Created `src/lib/menuData.ts` with exported `menuItems` array and `categories`
- Updated `Menu.tsx` to import from the shared file

### 2. Refactor Contact Section to "Contact Us"
- Changed heading from "Reserve Your Table" to "Contact Us"
- Updated subtitle to remove reservation language
- Updated message field placeholder to generic contact text

### 3. Generate Patio Images
Generated 3 AI images saved to `public/images/patio/`:
- `patio-1.png` — wide beachfront patio with tables, string lights, ocean view
- `patio-2.png` — dining setup with seafood and cocktails, beach in background
- `patio-3.png` — evening/sunset ambiance with warm lighting and guests dining

### 4. Create PatioRent Section
Created `src/components/sections/PatioRent.tsx` with:
- Section heading: "Rent Our Patio" under "Private Events" subtitle
- Photo gallery (3 images, grid on desktop, stacked on mobile)
- Form fields: name, email, phone (optional), date picker, guest count (1-20)
- Per-guest food selection: pill-style tabs ("Guest 1", "Guest 2"...) with
  selectable menu item cards showing name, description, price, and checkmark
- Submit button → POST to `/api/patio-rent`

### 5. Create Patio Rent API Route
Created `src/app/api/patio-rent/route.ts`:
- Zod validation for all fields including `guestSelections` record
- Sends formatted HTML email via Resend with rental details and per-guest meals

### 6. Update Navigation
- Navbar: added "Patio" link, changed CTA to "Rent Our Patio" → `#patio`
- Hero: changed secondary CTA from "Reserve a Table" to "Rent Our Patio"
- Footer: added "Patio" quick link

### 7. Add PatioRent to Page Layout
- Inserted `<PatioRent />` after `<Reviews />` and before `<Contact />`
- Final order: Hero → Menu → Gallery → About → Reviews → **PatioRent** → Contact → Footer

## Tasks
- [x] Extract menu data to shared file
- [x] Refactor Contact section to "Contact Us"
- [x] Generate 3 AI patio images
- [x] Create PatioRent section component
- [x] Create patio-rent API route
- [x] Update Navbar, Hero, Footer navigation
- [x] Add PatioRent to page layout
