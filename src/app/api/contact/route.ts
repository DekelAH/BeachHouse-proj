import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { render } from '@react-email/components'
import ContactEmail from '@/emails/ContactEmail'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const { name, email, phone, message } = parsed.data
    const toEmail = process.env.RESEND_TO_EMAIL ?? 'hello@beachhousecafe.com'

    const html = await render(ContactEmail({ name, email, phone, message }))

    await resend.emails.send({
      from: 'The Beach House Café <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} — Beach House Café`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
