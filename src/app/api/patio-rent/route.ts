import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { menuItems } from '@/lib/menuData'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  date: z.string().min(1),
  guests: z.number().min(1).max(20),
  guestSelections: z.record(z.string(), z.array(z.number())),
})

const resend = new Resend(process.env.RESEND_API_KEY)

function buildGuestMealsHtml(guestSelections: Record<string, number[]>): string {
  const entries = Object.entries(guestSelections).filter(([, ids]) => ids.length > 0)
  if (entries.length === 0) return '<p style="color:#1E3A4A;font-size:14px;">No meals pre-selected.</p>'

  return entries
    .map(([guestIndex, ids]) => {
      const guestNum = Number(guestIndex) + 1
      const items = ids
        .map((id) => menuItems.find((m) => m.id === id))
        .filter(Boolean)
        .map((m) => `<li style="color:#1E3A4A;font-size:14px;padding:2px 0;">${m!.name} (${m!.price})</li>`)
        .join('')
      return `
        <div style="margin-bottom:12px;">
          <p style="color:#4F8FA8;font-size:13px;font-weight:bold;margin-bottom:4px;">Guest ${guestNum}</p>
          <ul style="list-style:disc;padding-left:20px;margin:0;">${items}</ul>
        </div>`
    })
    .join('')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const { name, email, phone, date, guests, guestSelections } = parsed.data
    const toEmail = process.env.RESEND_TO_EMAIL ?? 'hello@beachhousecafe.com'

    await resend.emails.send({
      from: 'The Beach House Café <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email,
      subject: `Patio Rental Request from ${name} — ${date}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5F1E8; border-radius: 12px;">
          <h1 style="color: #1E3A4A; font-size: 24px; margin-bottom: 8px;">Patio Rental Request</h1>
          <p style="color: #4F8FA8; font-size: 14px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 2px;">The Beach House Café</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #C9A46A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #1E3A4A; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #C9A46A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 10px 0; color: #1E3A4A; font-size: 15px;"><a href="mailto:${email}" style="color: #4F8FA8;">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding: 10px 0; color: #C9A46A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td><td style="padding: 10px 0; color: #1E3A4A; font-size: 15px;">${phone}</td></tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #C9A46A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Date</td>
              <td style="padding: 10px 0; color: #1E3A4A; font-size: 15px;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #C9A46A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Guests</td>
              <td style="padding: 10px 0; color: #1E3A4A; font-size: 15px;">${guests}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #C9A46A40;">
            <p style="color: #C9A46A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Pre-Selected Meals</p>
            ${buildGuestMealsHtml(guestSelections)}
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Patio rent API error:', err)
    return NextResponse.json({ error: 'Failed to send request' }, { status: 500 })
  }
}
