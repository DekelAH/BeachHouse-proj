# Plan: Fix RESEND_TO_EMAIL not delivering

## Problem
`RESEND_TO_EMAIL=Info@thebeachhousecafe.ca` fails while a personal Gmail worked.

## Likely cause
App still sends `from: onboarding@resend.dev`. With Resend's test sender, you can only deliver to the email on your Resend account — not arbitrary addresses like `Info@thebeachhousecafe.ca`.

## Fix path
1. Confirm: is the Resend account signed up with `Info@thebeachhousecafe.ca`, or with Gmail?
2. If not verified domain yet → either keep Gmail as `to`, or verify `thebeachhousecafe.ca` in Resend and switch `from` to that domain.
3. Optionally surface Resend API errors in the contact route so failures are visible in logs/response.

## Questions for user
1. Did you verify `thebeachhousecafe.ca` as a domain in the Resend dashboard?
2. Is `Info@thebeachhousecafe.ca` a real mailbox that can receive mail (GoDaddy / Google Workspace / etc.)?
