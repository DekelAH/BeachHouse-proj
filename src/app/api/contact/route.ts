import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

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

    await resend.emails.send({
      from: 'The Beach House Café <onboarding@resend.dev>',
      to: toEmail,
      replyTo: email,
      subject: `New message from ${name} — Beach House Café`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5F1E8; border-radius: 12px;">
          <h1 style="color: #1E3A4A; font-size: 24px; margin-bottom: 8px;">New Contact Message</h1>
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
              <td colspan="2" style="padding-top: 16px; border-top: 1px solid #C9A46A40;">
                <p style="color: #C9A46A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
                <p style="color: #1E3A4A; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
