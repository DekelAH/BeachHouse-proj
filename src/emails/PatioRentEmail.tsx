import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
  Hr,
  Preview,
} from '@react-email/components'

interface PatioRentEmailProps {
  name: string
  email: string
  phone?: string
  date: string
}

export default function PatioRentEmail({
  name,
  email,
  phone,
  date,
}: PatioRentEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Patio Rental Request from {name} — {date}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>The Beach House Café</Heading>
            <Text style={subtitle}>Patio Rental Request</Text>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={sectionTitle}>Booking Details</Heading>

            <Section style={fieldRow}>
              <Text style={label}>Name</Text>
              <Text style={value}>{name}</Text>
            </Section>
            <Hr style={divider} />

            <Section style={fieldRow}>
              <Text style={label}>Email</Text>
              <Link href={`mailto:${email}`} style={linkStyle}>{email}</Link>
            </Section>
            <Hr style={divider} />

            {phone && (
              <>
                <Section style={fieldRow}>
                  <Text style={label}>Phone</Text>
                  <Text style={value}>{phone}</Text>
                </Section>
                <Hr style={divider} />
              </>
            )}

            <Section style={fieldRow}>
              <Text style={label}>Date</Text>
              <Text style={value}>{date}</Text>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>Beach House Café · Beachfront, Coastal City</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const body = {
  backgroundColor: '#f0ebe0',
  fontFamily: 'Georgia, serif',
}

const container = {
  maxWidth: '600px',
  margin: '40px auto',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden' as const,
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
}

const header = {
  backgroundColor: '#1E3A4A',
  padding: '32px 40px',
  textAlign: 'center' as const,
}

const logo = {
  color: '#F5F1E8',
  fontSize: '22px',
  fontWeight: '700',
  margin: '0 0 6px',
  letterSpacing: '0.05em',
}

const subtitle = {
  color: '#C9A46A',
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '3px',
  margin: '0',
}

const content = {
  padding: '32px 40px',
}

const sectionTitle = {
  color: '#1E3A4A',
  fontSize: '20px',
  marginBottom: '24px',
}

const fieldRow = {
  marginBottom: '4px',
}

const label = {
  color: '#C9A46A',
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '2px',
  margin: '0 0 4px',
}

const value = {
  color: '#1E3A4A',
  fontSize: '15px',
  margin: '0 0 12px',
}

const linkStyle = {
  color: '#4F8FA8',
  fontSize: '15px',
}

const divider = {
  borderColor: '#C9A46A30',
  margin: '12px 0',
}

const footer = {
  backgroundColor: '#F5F1E8',
  padding: '20px 40px',
  textAlign: 'center' as const,
}

const footerText = {
  color: '#1E3A4A80',
  fontSize: '12px',
  margin: '0',
}
