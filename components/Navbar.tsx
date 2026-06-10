'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ background: '#1A1A2E', borderBottom: '1px solid #FFD70033', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 28, color: '#FFD700', letterSpacing: 2 }}>MATCHDAY</span>
          <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 28, color: '#F0F0F0', letterSpacing: 2 }}>2026</span>
          <span style={{ background: '#E63946', color: 'white', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 4, marginLeft: 4 }}>LIVE</span>
        </Link>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {[
            { href: '/', label: 'Scores' },
            { href: '/predictions', label: 'Predict' },
            { href: '/teams', label: 'Teams' },
            { href: '/blog', label: 'Analysis' },
            { href: '/odds', label: 'Odds' },
            { href: '/travel', label: 'Travel' },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ color: '#B0B0C0', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFD700')}
              onMouseLeave={e => (e.currentTarget.style.color = '#B0B0C0')}>
              {item.label}
            </Link>
          ))}
          <Link href="/predictions" style={{ background: '#FFD700', color: '#0F0F1A', padding: '8px 18px', borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            Join Free
          </Link>
        </div>
      </div>
    </nav>
  )
}
