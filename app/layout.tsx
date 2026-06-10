import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MatchDay 2026 | FIFA World Cup Hub',
  description: 'Live scores, predictions, team stats, travel guides and AI match analysis for FIFA World Cup 2026 - Canada, USA & Mexico',
  keywords: 'World Cup 2026, FIFA, soccer, football, live scores, predictions, bracket',
  openGraph: {
    title: 'MatchDay 2026 | FIFA World Cup Hub',
    description: 'Your ultimate destination for World Cup 2026',
    url: 'https://matchday2026.net',
    siteName: 'MatchDay 2026',
    type: 'website',
  },
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
