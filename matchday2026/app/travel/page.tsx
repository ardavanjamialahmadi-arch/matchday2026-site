import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterCTA from '@/components/NewsletterCTA'

const VENUES = [
  { city:'New York/NJ', stadium:'MetLife Stadium', country:'USA', flag:'us', capacity:'82,500', matches:8, tip:'Book via NJ Transit from Penn Station. Hotels in Hoboken are cheaper than Manhattan.' },
  { city:'Los Angeles', stadium:'SoFi Stadium', country:'USA', flag:'us', capacity:'70,240', matches:7, tip:'Avoid renting a car. Uber/Lyft is the best option. Stay in El Segundo for value.' },
  { city:'Dallas', stadium:"AT&T Stadium", country:'USA', flag:'us', capacity:'80,000', matches:7, tip:'Arlington is very hot in June. Bring sunscreen and hydrate before the match.' },
  { city:'Mexico City', stadium:'Estadio Azteca', country:'Mexico', flag:'mx', capacity:'87,523', matches:5, tip:'Highest altitude stadium (2,240m). Arrive a day early to acclimatize.' },
  { city:'Toronto', stadium:'BMO Field', country:'Canada', flag:'ca', capacity:'30,000', matches:6, tip:'Best food scene of all host cities. Stay near Union Station for easy transport.' },
  { city:'Vancouver', stadium:'BC Place', country:'Canada', flag:'ca', capacity:'54,500', matches:6, tip:'Beautiful city. Book the Skytrain — it goes directly to stadium.' },
]

export default function TravelPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0F0F1A' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
          <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 48, color: '#FFD700', letterSpacing: 3, marginBottom: 8 }}>FAN TRAVEL GUIDE</h1>
          <p style={{ color: '#B0B0C0', marginBottom: 32 }}>16 stadiums across 3 countries. Here's how to get there, where to stay, and what to know.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {VENUES.map(venue => (
              <div key={venue.city} style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 12, padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <img src={`https://flagcdn.com/24x18/${venue.flag}.png`} alt={venue.country} width={24} height={18} style={{ borderRadius: 2 }} />
                      <span style={{ color: '#888', fontSize: 12 }}>{venue.country}</span>
                    </div>
                    <h3 style={{ color: '#FFD700', fontFamily: 'Bebas Neue, cursive', fontSize: 22, letterSpacing: 1 }}>{venue.city}</h3>
                    <p style={{ color: '#B0B0C0', fontSize: 13 }}>{venue.stadium}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#F0F0F0', fontWeight: 700 }}>{venue.matches}</div>
                    <div style={{ color: '#666', fontSize: 11 }}>matches</div>
                  </div>
                </div>
                <div style={{ background: '#0F0F1A', borderRadius: 8, padding: '0.75rem', fontSize: 13, color: '#B0B0C0', lineHeight: 1.6, marginBottom: 16 }}>
                  💡 {venue.tip}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(venue.city)}`} target="_blank" rel="nofollow noreferrer"
                    style={{ flex:1, background:'#FF6B3522', color:'#FF8A65', border:'1px solid #FF6B3544', padding:'8px', borderRadius:6, fontSize:12, fontWeight:600, textDecoration:'none', textAlign:'center' }}>
                    Hotels ↗
                  </a>
                  <a href={`https://www.airbnb.com/s/${encodeURIComponent(venue.city)}`} target="_blank" rel="nofollow noreferrer"
                    style={{ flex:1, background:'#E6394622', color:'#E63946', border:'1px solid #E6394644', padding:'8px', borderRadius:6, fontSize:12, fontWeight:600, textDecoration:'none', textAlign:'center' }}>
                    Airbnb ↗
                  </a>
                  <a href={`https://www.getyourguide.com/s/?q=${encodeURIComponent(venue.city + ' world cup')}`} target="_blank" rel="nofollow noreferrer"
                    style={{ flex:1, background:'#FFD70022', color:'#FFD700', border:'1px solid #FFD70044', padding:'8px', borderRadius:6, fontSize:12, fontWeight:600, textDecoration:'none', textAlign:'center' }}>
                    Tours ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          <NewsletterCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
