# Plan: Form emails still not delivering

## Context
- Contact + patio forms use Resend with `from: onboarding@resend.dev`
- User previously set `RESEND_TO_EMAIL=Info@thebeachhousecafe.ca`
- Personal Gmail as `to` worked; cafe address did not (Resend test-sender restriction)
- User later connected GoDaddy DNS with Resend for `thebeachhousecafe.ca`
- Code was never updated to send **from** the verified domain

## Root cause (most likely)
Even with a verified domain, Resend still rejects / won't deliver freely when `from` is `onboarding@resend.dev` and `to` is not the account email. Production needs:

`from: Something <noreply@thebeachhousecafe.ca>` (or similar on the verified domain)

## Also found
1. Patio route fallback `to` is wrong: `info@beachhousecafe.com` vs contact's `info@thebeachhousecafe.ca`
2. Routes ignore Resend `{ data, error }` — API failures can return HTTP 200 `success: true`

## Steps
1. Ask user to confirm domain status in Resend (verified?)
2. Switch both API routes `from` → verified domain address
3. Align patio fallback `to` with contact
4. Check Resend `error` and return 500 + log it
5. Confirm Vercel env has `RESEND_API_KEY` + `RESEND_TO_EMAIL`

## Questions for user
1. In Resend → Domains, does `thebeachhousecafe.ca` show **Verified**?
2. Preferred `from` address? (e.g. `noreply@thebeachhousecafe.ca` or `Info@thebeachhousecafe.ca`)
3. Are form submissions showing success in the UI, or an error?
