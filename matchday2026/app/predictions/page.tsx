import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterCTA from '@/components/NewsletterCTA'

export default function PredictionsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0F0F1A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 1.5rem' }}>
          <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 48, color: '#FFD700', letterSpacing: 3, marginBottom: 8 }}>BRACKET PREDICTOR</h1>
          <p style={{ color: '#B0B0C0', marginBottom: 32 }}>Predict every match result and climb the global leaderboard.</p>

          {/* Premium banner */}
          <div style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A1A3E 100%)', border: '1px solid #FFD70055', borderRadius: 12, padding: '1.5rem', marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ color: '#FFD700', fontFamily: 'Bebas Neue, cursive', fontSize: 24, letterSpacing: 1 }}>🏆 GO PREMIUM</div>
              <p style={{ color: '#B0B0C0', fontSize: 14 }}>Full bracket + AI predictions + Advanced stats</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 32, color: '#FFD700' }}>$4.99<span style={{ fontSize: 16, color: '#888' }}>/month</span></div>
              <button style={{ background: '#FFD700', color: '#0F0F1A', border: 'none', padding: '10px 24px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', marginTop: 8 }}>Upgrade Now</button>
            </div>
          </div>

          {/* Free tier notice */}
          <div style={{ background: '#1A1A2E', border: '1px solid #333', borderRadius: 10, padding: '1.25rem', marginBottom: 24, color: '#888', fontSize: 14 }}>
            🆓 Free tier: Predict Group Stage matches. Upgrade for full bracket access.
          </div>

          {/* Match cards */}
          {[
            { home:'Mexico', away:'South Africa', homeFlag:'mx', awayFlag:'za', date:'Jun 11 · 3:00 PM ET', group:'A' },
            { home:'Canada', away:'Bosnia', homeFlag:'ca', awayFlag:'ba', date:'Jun 12 · 6:00 PM ET', group:'B' },
            { home:'USA', away:'Paraguay', homeFlag:'us', awayFlag:'py', date:'Jun 12 · 9:00 PM ET', group:'C' },
          ].map((m, i) => (
            <div key={i} style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 10, padding: '1.25rem 1.5rem', marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={`https://flagcdn.com/32x24/${m.homeFlag}.png`} alt={m.home} width={32} height={24} style={{ borderRadius: 2 }} />
                  <span style={{ fontWeight: 600 }}>{m.home}</span>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <input type="number" min={0} max={20} placeholder="0" style={{ width: 52, padding: '8px', borderRadius: 6, border: '1px solid #FFD70044', background: '#0F0F1A', color: '#FFD700', textAlign: 'center', fontSize: 18, fontWeight: 700 }} />
                  <span style={{ color: '#666' }}>–</span>
                  <input type="number" min={0} max={20} placeholder="0" style={{ width: 52, padding: '8px', borderRadius: 6, border: '1px solid #FFD70044', background: '#0F0F1A', color: '#FFD700', textAlign: 'center', fontSize: 18, fontWeight: 700 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontWeight: 600 }}>{m.away}</span>
                  <img src={`https://flagcdn.com/32x24/${m.awayFlag}.png`} alt={m.away} width={32} height={24} style={{ borderRadius: 2 }} />
                </div>
              </div>
              <div style={{ color: '#666', fontSize: 12, marginTop: 8, textAlign: 'center' }}>{m.date} · Group {m.group}</div>
            </div>
          ))}

          <button style={{ width: '100%', background: '#FFD700', color: '#0F0F1A', border: 'none', padding: '14px', borderRadius: 10, fontWeight: 700, fontSize: 16, cursor: 'pointer', marginTop: 8 }}>
            Submit Predictions
          </button>

          <NewsletterCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
