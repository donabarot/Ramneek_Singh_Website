import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vidushi [Artist Name] | Hindustani Classical Vocalist',
  description: 'Acclaimed Hindustani classical vocalist — available for concerts, festivals, cultural events, and private performances.',
  keywords: ['Hindustani classical', 'vocalist', 'classical singer', 'Indian classical music', 'concert booking'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
