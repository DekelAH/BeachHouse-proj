# Plan: Form emails still not delivering

## Confirmed
- Resend domain `thebeachhousecafe.ca` is **Verified** (North Virginia / us-east-1)

## Root cause
API routes still used `from: onboarding@resend.dev` instead of the verified domain.

## Done
1. Both `/api/contact` and `/api/patio-rent` send from `noreply@thebeachhousecafe.ca` (overridable via `RESEND_FROM_EMAIL`)
2. Patio fallback `to` aligned to `info@thebeachhousecafe.ca`
3. Resend `{ error }` is checked — failures return 500 instead of fake success
4. Local `.env.local` updated with `RESEND_FROM_EMAIL`

## Deploy checklist
- [ ] Add `RESEND_FROM_EMAIL` on Vercel (same value as local)
- [ ] Confirm `RESEND_API_KEY` + `RESEND_TO_EMAIL` exist on Vercel
- [ ] Redeploy / wait for deploy, then submit a test form
- [ ] Check Resend → Emails for delivery status if inbox still empty
