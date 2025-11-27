import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { SmoothScroll } from '@/components/ui/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://synap.live' // or 'https://core.synap.live'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // Basic metadata
  title: {
    default: 'Synap Core - Your Data, Your Rules',
    template: '%s | Synap Core'
  },
  description: 'Open-source infrastructure for data sovereignty. Event-sourced, self-hosted, user-owned. Stop building infrastructure, start building apps.',
  
  // Keywords for SEO
  keywords: [
    'data sovereignty',
    'self-hosted',
    'open source',
    'event sourcing',
    'personal data pod',
    'web3 alternative',
    'decentralized data',
    'privacy-first',
    'user-owned data',
    'TimescaleDB',
    'tRPC',
    'TypeScript infrastructure'
  ],
  
  authors: [{ name: 'Antoine', url: siteUrl }],
  creator: 'Synap Core Team',
  publisher: 'Synap Core',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Synap Core',
    title: 'Synap Core - Build the Sovereign Web',
    description: 'Stop building infrastructure. Start building apps on user-owned data pods. Open-source, event-sourced, self-hostable.',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Synap Core - Your Data, Your Rules',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Synap Core - Build the Sovereign Web',
    description: 'Open-source infrastructure for data sovereignty. Event-sourced, self-hosted, user-owned.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@synapcore', // Update with actual Twitter handle if exists
  },
  
  // Additional metadata
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
  
  // Icons and manifest
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/site.webmanifest',
  
  // Verification (add when ready)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
  
  // Alternates for canonical URLs
  alternates: {
    canonical: siteUrl,
  },
  
  // Additional tags
  other: {
    'application-name': 'Synap Core',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Synap Core',
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  )
}
