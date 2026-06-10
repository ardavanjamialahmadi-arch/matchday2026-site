import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const ALL_TEAMS = [
  { name:'Brazil', flag:'br', group:'D', ranking:1 },
  { name:'France', flag:'fr', group:'E', ranking:2 },
  { name:'England', flag:'gb-eng', group:'F', ranking:3 },
  { name:'Argentina', flag:'ar', group:'E', ranking:4 },
  { name:'Portugal', flag:'pt', group:'G', ranking:5 },
  { name:'Spain', flag:'es', group:'F', ranking:6 },
  { name:'Netherlands', flag:'nl', group:'H', ranking:7 },
  { name:'Belgium', flag:'be', group:'I', ranking:8 },
  { name:'Germany', flag:'de', group:'D', ranking:9 },
  { name:'USA', flag:'us', group:'C', ranking:10 },
  { name:'Mexico', flag:'mx', group:'A', ranking:11 },
  { name:'Canada', flag:'ca', group:'B', ranking:12 },
  { name:'Japan', flag:'jp', group:'J', ranking:13 },
  { name:'Morocco', flag:'ma', group:'K', ranking:14 },
  { name:'Croatia', flag:'hr', group:'L', ranking:15 },
  { name:'Senegal', flag:'sn', group:'A', ranking:16 },
]

export default function TeamsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0F0F1A' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1.5rem' }}>
          <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 48, color: '#FFD700', letterSpacing: 3, marginBottom: 8 }}>ALL 48 TEAMS</h1>
          <p style={{ color: '#B0B0C0', marginBottom: 32 }}>FIFA World Cup 2026 — Canada, USA & Mexico</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16 }}>
            {ALL_TEAMS.map(team => (
              <Link key={team.name} href={`/teams/${team.name.toLowerCase().replace(/ /g, '-')}`}
                style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 12, padding: '1.5rem 1rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#FFD700')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#FFD70022')}>
                <img src={`https://flagcdn.com/64x48/${team.flag}.png`} alt={team.name} width={64} height={48} style={{ borderRadius: 4, marginBottom: 10 }} />
                <div style={{ color: '#F0F0F0', fontWeight: 600, fontSize: 14 }}>{team.name}</div>
                <div style={{ color: '#666', fontSize: 12, marginTop: 4 }}>Group {team.group}</div>
                <div style={{ color: '#FFD70088', fontSize: 11, marginTop: 2 }}>#{team.ranking} FIFA</div>
              </Link>
            ))}
          </div>

          <div style={{ background: '#1A1A2E', border: '1px solid #333', borderRadius: 8, padding: '1.5rem', textAlign: 'center', margin: '2rem 0', color: '#666', fontSize: 13 }}>
            Affiliate: Shop official jerseys on <a href="https://www.amazon.com/s?k=world+cup+2026+jersey" target="_blank" rel="nofollow noreferrer" style={{ color: '#FFD700' }}>Amazon</a> · <a href="#" style={{ color: '#FFD700' }}>Fanatics</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
