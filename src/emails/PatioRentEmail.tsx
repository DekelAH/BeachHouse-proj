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
import { menuItems } from '@/lib/menuData'

interface PatioRentEmailProps {
  name: string
  email: string
  phone?: string
  date: string
  guests: number
  guestSelections: Record<string, number[]>
}

export default function PatioRentEmail({
  name,
  email,
  phone,
  date,
  guests,
  guestSelections,
}: PatioRentEmailProps) {
  const guestEntries = Object.entries(guestSelections).filter(([, ids]) => ids.length > 0)

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
            <Hr style={divider} />

            <Section style={fieldRow}>
              <Text style={label}>Number of Guests</Text>
              <Text style={value}>{guests}</Text>
            </Section>

            {guestEntries.length > 0 && (
              <>
                <Hr style={dividerHeavy} />
                <Heading as="h3" style={mealsTitle}>Pre-Selected Meals</Heading>
                {guestEntries.map(([guestIndex, ids]) => {
                  const guestNum = Number(guestIndex) + 1
                  const items = ids
                    .map((id) => menuItems.find((m) => m.id === id))
                    .filter(Boolean)

                  return (
                    <Section key={guestIndex} style={guestBlock}>
                      <Text style={guestLabel}>Guest {guestNum}</Text>
                      {items.map((item) => (
                        <Text key={item!.id} style={mealItem}>
                          · {item!.name}{' '}
                          <span style={mealPrice}>{item!.price}</span>
                        </Text>
                      ))}
                    </Section>
                  )
                })}
              </>
            )}

            {guestEntries.length === 0 && (
              <>
                <Hr style={dividerHeavy} />
                <Text style={noMeals}>No meals pre-selected.</Text>
              </>
            )}
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

const dividerHeavy = {
  borderColor: '#C9A46A60',
  margin: '20px 0',
}

const mealsTitle = {
  color: '#1E3A4A',
  fontSize: '16px',
  marginBottom: '16px',
}

const guestBlock = {
  marginBottom: '16px',
}

const guestLabel = {
  color: '#4F8FA8',
  fontSize: '13px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: '0 0 6px',
}

const mealItem = {
  color: '#1E3A4A',
  fontSize: '14px',
  margin: '2px 0',
}

const mealPrice = {
  color: '#C9A46A',
  fontWeight: 'bold',
}

const noMeals = {
  color: '#1E3A4A80',
  fontSize: '14px',
  fontStyle: 'italic',
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
