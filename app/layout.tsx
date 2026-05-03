import type { Metadata } from 'next';
import ThemeRegistry from '@/styles/ThemeRegistry';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CursorFollower from '@/components/layout/CursorFollower';
import SocialExpandFloat from '@/components/layout/SocialExpandFloat';
import LenisProvider from '@/components/layout/LenisProvider';
import SchemaOrg from '@/components/layout/SchemaOrg';
import SkipLink from '@/components/layout/SkipLink';
import LocatorClient from '@/components/dev/LocatorClient';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'wedding photography Indore',
    'wedding photographer India',
    'cinematic wedding films',
    'pre-wedding shoot',
    'maternity photography',
    'birthday photography',
    'photopitaraa',
    'luxury wedding photography',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Wedding Photography`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts loaded via browser — avoids server-side Google Fonts fetch in dev */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cinzel:wght@400;600&family=Great+Vibes&family=Inter:wght@300;400;500&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: "'Inter', sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <ThemeRegistry>
          {process.env.NODE_ENV === 'development' ? <LocatorClient /> : null}
          <SchemaOrg />
          <LenisProvider />
          <SkipLink />
          <CursorFollower />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <SocialExpandFloat />
        </ThemeRegistry>
      </body>
    </html>
  );
}
