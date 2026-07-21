import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { render } from '@react-email/components'
import PatioRentEmail from '@/emails/PatioRentEmail'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).optional().or(z.literal('')),
  date: z.string().min(1),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const { name, email, phone, date } = parsed.data
    const toEmail = process.env.RESEND_TO_EMAIL ?? 'hello@beachhousecafe.com'

    const html = await render(PatioRentEmail({ name, email, phone, date }))

    await resend.emails.send({
      from: 'The Beach House Café <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email,
      subject: `Patio Rental Request from ${name} — ${date}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Patio rent API error:', err)
    return NextResponse.json({ error: 'Failed to send request' }, { status: 500 })
  }
}
