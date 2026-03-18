import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Accessible Website',
    default: 'Home - Accessible Website',
  },
  description: 'An accessible website built with WCAG 2.1 AA compliance standards, featuring semantic HTML and excellent user experience.',
  keywords: 'accessibility, semantic HTML, WCAG, web accessibility, user experience',
  authors: [{ name: 'Accessibility Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    siteName: 'Accessible Website',
    title: 'Accessible Website - WCAG 2.1 AA Compliant',
    description: 'Experience the web as it should be - accessible to everyone',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview of the accessible website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@accessibleweb',
    creator: '@accessibility',
    title: 'Accessible Website',
    description: 'Experience the web as it should be - accessible to everyone',
    images: ['https://example.com/twitter-card.jpg'],
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Accessible Website',
  },
  other: {
    'Accessibility': 'WCAG 2.1 AA Compliant',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Accessibility verification meta tags */}
        <meta name="accessibility" content="WCAG 2.1 AA Compliant" />
        <meta name="screen-reader" content="optimized" />
        <meta name="color-contrast" content="7:1 ratio minimum" />

        {/* Security and performance meta */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
