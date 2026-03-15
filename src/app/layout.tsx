import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://beachhousecafe.com'
  ),
  title: {
    default: 'The Beach House Café | Fresh Bites by the Shore',
    template: '%s | The Beach House Café',
  },
  description:
    'Experience the finest coastal dining at The Beach House Café. Fresh food, stunning sea views, and warm hospitality right where the waves meet the shore.',
  keywords: [
    'beach cafe',
    'coastal restaurant',
    'seaside dining',
    'beach house cafe',
    'fresh seafood',
    'ocean view restaurant',
    'beachside dining',
    'coastal cuisine',
  ],
  openGraph: {
    title: 'The Beach House Café | Fresh Bites by the Shore',
    description:
      'Fresh food and stunning views by the sea. Come dine with us at The Beach House Café.',
    images: [{ url: '/images/gallery/cafe-exterior.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
    siteName: 'The Beach House Café',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Beach House Café',
    description: 'Fresh food and stunning views by the sea.',
    images: ['/images/gallery/cafe-exterior.jpg'],
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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
