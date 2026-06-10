import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A2E', borderTop: '1px solid #FFD70022', marginTop: '4rem', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <span style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 24, color: '#FFD700', letterSpacing: 2 }}>MATCHDAY 2026</span>
          <p style={{ color: '#666', fontSize: 13, marginTop: 8, maxWidth: 280 }}>
            Your ultimate FIFA World Cup 2026 hub. Live scores, AI predictions, and more.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          {[
            { title: 'Site', links: [{ href: '/', label: 'Live Scores' }, { href: '/predictions', label: 'Predictions' }, { href: '/teams', label: 'Teams' }] },
            { title: 'More', links: [{ href: '/blog', label: 'Analysis' }, { href: '/odds', label: 'Betting Odds' }, { href: '/travel', label: 'Travel Guide' }] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ color: '#FFD700', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{col.title}</p>
              {col.links.map(l => (
                <Link key={l.href} href={l.href} style={{ display: 'block', color: '#666', fontSize: 13, textDecoration: 'none', marginBottom: 8 }}>{l.label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '1.5rem auto 0', borderTop: '1px solid #FFD70011', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ color: '#444', fontSize: 12 }}>© 2026 MatchDay2026.net — Not affiliated with FIFA.</p>
        <p style={{ color: '#444', fontSize: 12 }}>Betting content for entertainment only. 18+ only. Gamble responsibly.</p>
      </div>
    </footer>
  )
}
