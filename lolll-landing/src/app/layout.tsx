import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landing Page - lolll',
  description: 'Welcoming landing page for lolll with full accessibility compliance',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
