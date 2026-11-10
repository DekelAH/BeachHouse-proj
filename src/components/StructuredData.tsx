import { menuItems } from '@/lib/menuData'

/**
 * Emits Restaurant/Café JSON-LD structured data.
 *
 * This is the strongest machine-readable signal that THIS domain
 * (thebeachhousecafe.ca) is the real business at 5109 Cordova Bay Rd —
 * it hard-wires the name, address, geo-coordinates, hours, menu and
 * official social profiles so Google attributes the brand + location to us,
 * not to the stale scraped clone sites.
 */
export default function StructuredData({ siteUrl }: { siteUrl: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'CafeOrCoffeeShop'],
    '@id': `${siteUrl}/#restaurant`,
    name: 'The Beach House Café',
    description:
      'Waterfront café in Cordova Bay, Victoria BC serving coffee, fresh food, pastries and beachfront patio rentals.',
    url: siteUrl,
    image: `${siteUrl}/images/gallery/cafe_exterior_02.jpg`,
    logo: `${siteUrl}/logo2.png`,
    email: 'info@thebeachhousecafe.ca',
    servesCuisine: ['Café', 'Breakfast', 'Mediterranean', 'Coffee', 'Pastries'],
    priceRange: '$$',
    currenciesAccepted: 'CAD',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5109 Cordova Bay Rd',
      addressLocality: 'Victoria',
      addressRegion: 'BC',
      postalCode: 'V8Y 2K1',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.5216959,
      longitude: -123.3668726,
    },
    hasMap:
      'https://maps.google.com/maps?q=5109+Cordova+Bay+Rd%2C+Victoria%2C+BC+V8Y+2K1',
    areaServed: {
      '@type': 'City',
      name: 'Victoria, BC',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
        opens: '08:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/thebeachhousecafecordovabay?igsh=amtlMXFwdWphY2Zw',
      'https://www.facebook.com/share/1PDqvEtah8/',
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'The Beach House Café Menu',
      hasMenuSection: {
        '@type': 'MenuSection',
        name: 'Menu',
        hasMenuItem: menuItems.map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          description: item.description,
        })),
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
