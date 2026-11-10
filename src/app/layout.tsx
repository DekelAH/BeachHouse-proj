import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import StructuredData from '@/components/StructuredData'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.thebeachhousecafe.ca'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'The Beach House Café | Cordova Bay, Victoria BC',
    template: '%s | The Beach House Café',
  },
  description:
    'The Beach House Café is a waterfront café in Cordova Bay, Victoria BC. Coffee, fresh food, ocean views, and beachfront patio rentals at 5109 Cordova Bay Rd — where the sea meets the shore.',
  keywords: [
    'Beach House Café Cordova Bay',
    'Cordova Bay cafe',
    'Victoria BC cafe',
    'Cordova Bay restaurant',
    'waterfront cafe Victoria',
    'patio rental Cordova Bay',
    'beach cafe Victoria BC',
    'seaside dining Victoria',
  ],
  openGraph: {
    title: 'The Beach House Café | Cordova Bay, Victoria BC',
    description:
      'Fresh food and ocean views in Cordova Bay, Victoria. Dine with us or rent our beachfront patio.',
    images: [{ url: '/images/gallery/cafe_exterior_02.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_CA',
    siteName: 'The Beach House Café',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Beach House Café | Cordova Bay, Victoria BC',
    description:
      'Fresh food and ocean views in Cordova Bay, Victoria. Dine with us or rent our beachfront patio.',
    images: ['/images/gallery/cafe_exterior_02.jpg'],
  },
  icons: {
    icon: [{ url: '/logo-icon.png', type: 'image/png' }],
    apple: [{ url: '/logo-icon.png', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <StructuredData siteUrl={SITE_URL} />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
