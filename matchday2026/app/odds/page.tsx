import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ODDS_DATA = [
  { home:'Mexico', away:'South Africa', homeFlag:'mx', awayFlag:'za', date:'Jun 11', odds:[
    { book:'Bet365', home:'2.10', draw:'3.40', away:'3.20', link:'#' },
    { book:'DraftKings', home:'2.15', draw:'3.35', away:'3.10', link:'#' },
    { book:'BetMGM', home:'2.05', draw:'3.50', away:'3.25', link:'#' },
  ]},
  { home:'Canada', away:'Bosnia', homeFlag:'ca', awayFlag:'ba', date:'Jun 12', odds:[
    { book:'Bet365', home:'2.80', draw:'3.20', away:'2.50', link:'#' },
    { book:'DraftKings', home:'2.75', draw:'3.25', away:'2.55', link:'#' },
    { book:'BetMGM', home:'2.85', draw:'3.15', away:'2.45', link:'#' },
  ]},
]

export default function OddsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0F0F1A' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
          <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 48, color: '#FFD700', letterSpacing: 3, marginBottom: 8 }}>BETTING ODDS</h1>
          <p style={{ color: '#B0B0C0', marginBottom: 8 }}>Compare odds from top bookmakers. Best value highlighted in green.</p>
          <p style={{ color: '#E63946', fontSize: 12, marginBottom: 32 }}>⚠️ 18+ only. Please gamble responsibly. Odds for entertainment purposes.</p>

          {ODDS_DATA.map((match, i) => (
            <div key={i} style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 12, padding: '1.5rem', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <img src={`https://flagcdn.com/32x24/${match.homeFlag}.png`} alt={match.home} width={32} height={24} style={{ borderRadius: 2 }} />
                <span style={{ fontWeight: 700, fontSize: 18 }}>{match.home}</span>
                <span style={{ color: '#FFD700', fontFamily: 'Bebas Neue, cursive', fontSize: 20 }}>VS</span>
                <span style={{ fontWeight: 700, fontSize: 18 }}>{match.away}</span>
                <img src={`https://flagcdn.com/32x24/${match.awayFlag}.png`} alt={match.away} width={32} height={24} style={{ borderRadius: 2 }} />
                <span style={{ color: '#666', fontSize: 13, marginLeft: 8 }}>{match.date}</span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      {['Bookmaker', match.home + ' Win', 'Draw', match.away + ' Win', 'Bet'].map(h => (
                        <th key={h} style={{ padding: '8px 12px', color: '#888', fontWeight: 500, textAlign: 'left' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {match.odds.map((row, j) => (
                      <tr key={j} style={{ borderBottom: '1px solid #1A1A2E33' }}>
                        <td style={{ padding: '12px', fontWeight: 600, color: '#F0F0F0' }}>{row.book}</td>
                        <td style={{ padding: '12px', color: j===0 ? '#4CAF50' : '#F0F0F0', fontWeight: j===0 ? 700 : 400 }}>{row.home}</td>
                        <td style={{ padding: '12px', color: '#F0F0F0' }}>{row.draw}</td>
                        <td style={{ padding: '12px', color: '#F0F0F0' }}>{row.away}</td>
                        <td style={{ padding: '12px' }}>
                          <a href={row.link} target="_blank" rel="nofollow noreferrer"
                            style={{ background: '#4CAF5022', color: '#4CAF50', border: '1px solid #4CAF5044', padding: '6px 14px', borderRadius: 6, fontSize: 12, fontWeight: 600, textDecoration: 'none' }}>
                            Bet Now ↗
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div style={{ background: '#1A1A2E', border: '1px solid #333', borderRadius: 8, padding: '1rem', color: '#666', fontSize: 12, textAlign: 'center' }}>
            Affiliate disclosure: MatchDay2026 may earn a commission when you sign up via our links. This does not affect the odds shown.
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
