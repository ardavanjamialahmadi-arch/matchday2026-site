import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterCTA from '@/components/NewsletterCTA'
import Link from 'next/link'

const SAMPLE_MATCHES = [
  { id:1, home:'Mexico', away:'South Africa', homeFlag:'mx', awayFlag:'za', date:'Jun 11', time:'3:00 PM ET', stadium:'Estadio Azteca', group:'A', status:'upcoming' },
  { id:2, home:'Canada', away:'Bosnia', homeFlag:'ca', awayFlag:'ba', date:'Jun 12', time:'6:00 PM ET', stadium:'BMO Field, Toronto', group:'B', status:'upcoming' },
  { id:3, home:'USA', away:'Paraguay', homeFlag:'us', awayFlag:'py', date:'Jun 12', time:'9:00 PM ET', stadium:'SoFi Stadium', group:'C', status:'upcoming' },
  { id:4, home:'Brazil', away:'Germany', homeFlag:'br', awayFlag:'de', date:'Jun 13', time:'3:00 PM ET', stadium:'MetLife Stadium', group:'D', status:'upcoming' },
  { id:5, home:'France', away:'Argentina', homeFlag:'fr', awayFlag:'ar', date:'Jun 13', time:'6:00 PM ET', stadium:'Rose Bowl', group:'E', status:'upcoming' },
  { id:6, home:'England', away:'Spain', homeFlag:'gb-eng', awayFlag:'es', date:'Jun 14', time:'3:00 PM ET', stadium:'AT&T Stadium', group:'F', status:'upcoming' },
]

const TEAMS = [
  { name:'Brazil', flag:'br', group:'D' },
  { name:'France', flag:'fr', group:'E' },
  { name:'Argentina', flag:'ar', group:'E' },
  { name:'England', flag:'gb-eng', group:'F' },
  { name:'Germany', flag:'de', group:'D' },
  { name:'Spain', flag:'es', group:'F' },
  { name:'Portugal', flag:'pt', group:'G' },
  { name:'Netherlands', flag:'nl', group:'H' },
]

export default function HomePage() {
  const daysToKickoff = Math.ceil((new Date('2026-06-11').getTime() - Date.now()) / (1000*60*60*24))

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0F0F1A' }}>

        {/* HERO */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 1.5rem 4rem', textAlign: 'center', background: 'linear-gradient(180deg, #1A1A2E 0%, #0F0F1A 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 20% 50%, #FFD70015 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #E6394615 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'inline-block', background: '#E63946', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 4, letterSpacing: 2, marginBottom: 16 }}>
              JUNE 11 – JULY 19, 2026
            </div>
            <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: 1, color: '#F0F0F0', letterSpacing: 4, marginBottom: 16 }}>
              THE WORLD&apos;S<br /><span style={{ color: '#FFD700' }}>BIGGEST STAGE</span>
            </h1>
            <p style={{ color: '#B0B0C0', fontSize: 18, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.6 }}>
              48 teams. 104 matches. One trophy. Live scores, AI predictions, and everything World Cup 2026.
            </p>

            {/* Countdown */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
              {[
                { label: 'Days', value: daysToKickoff > 0 ? daysToKickoff : 0 },
                { label: 'Teams', value: 48 },
                { label: 'Matches', value: 104 },
                { label: 'Stadiums', value: 16 },
              ].map(stat => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 48, color: '#FFD700', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ color: '#666', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/predictions" style={{ background: '#FFD700', color: '#0F0F1A', padding: '14px 28px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                🏆 Make Predictions
              </Link>
              <Link href="/blog" style={{ border: '1px solid #FFD70055', color: '#FFD700', padding: '14px 28px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                🤖 AI Analysis
              </Link>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* UPCOMING MATCHES */}
          <section style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 32, color: '#F0F0F0', letterSpacing: 2 }}>UPCOMING MATCHES</h2>
              <span style={{ color: '#666', fontSize: 13 }}>Group Stage · Jun 11–27</span>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {SAMPLE_MATCHES.map(match => (
                <div key={match.id} style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 10, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 200 }}>
                    <img src={`https://flagcdn.com/24x18/${match.homeFlag}.png`} alt={match.home} width={24} height={18} style={{ borderRadius: 2 }} />
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{match.home}</span>
                    <span style={{ color: '#FFD700', fontFamily: 'Bebas Neue, cursive', fontSize: 20 }}>VS</span>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{match.away}</span>
                    <img src={`https://flagcdn.com/24x18/${match.awayFlag}.png`} alt={match.away} width={24} height={18} style={{ borderRadius: 2 }} />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#FFD700', fontSize: 13, fontWeight: 600 }}>{match.date} · {match.time}</div>
                    <div style={{ color: '#666', fontSize: 12 }}>{match.stadium}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ background: '#0F0F1A', border: '1px solid #333', color: '#999', fontSize: 11, padding: '3px 8px', borderRadius: 4 }}>Group {match.group}</span>
                    <Link href="/predictions" style={{ background: '#FFD70022', color: '#FFD700', border: '1px solid #FFD70044', padding: '6px 14px', borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>Predict</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURED TEAMS */}
          <section style={{ marginTop: '3rem' }}>
            <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 32, color: '#F0F0F0', letterSpacing: 2, marginBottom: 20 }}>FEATURED TEAMS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 12 }}>
              {TEAMS.map(team => (
                <Link key={team.name} href={`/teams/${team.name.toLowerCase()}`} style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 10, padding: '1.25rem 1rem', textAlign: 'center', textDecoration: 'none', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#FFD700')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#FFD70022')}>
                  <img src={`https://flagcdn.com/48x36/${team.flag}.png`} alt={team.name} width={48} height={36} style={{ borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ color: '#F0F0F0', fontWeight: 600, fontSize: 13 }}>{team.name}</div>
                  <div style={{ color: '#666', fontSize: 11, marginTop: 2 }}>Group {team.group}</div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Link href="/teams" style={{ color: '#FFD700', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>View all 48 teams →</Link>
            </div>
          </section>

          {/* FEATURE CARDS */}
          <section style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { href:'/predictions', icon:'🏆', title:'Bracket Predictor', desc:'Predict every match and compete on our global leaderboard. Free to play!', cta:'Start Predicting', color:'#FFD700' },
              { href:'/blog', icon:'🤖', title:'AI Match Analysis', desc:'Claude AI generates in-depth match previews and predictions for every game.', cta:'Read Analysis', color:'#4FC3F7' },
              { href:'/odds', icon:'📊', title:'Odds Comparison', desc:'Compare betting odds from top bookmakers and find the best value.', cta:'View Odds', color:'#81C784' },
              { href:'/travel', icon:'✈️', title:'Fan Travel Guide', desc:'Hotels, flights, and tips for all 16 World Cup stadiums across North America.', cta:'Plan Trip', color:'#FF8A65' },
            ].map(card => (
              <Link key={card.href} href={card.href} style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 12, padding: '1.5rem', textDecoration: 'none', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = card.color + '66')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#FFD70022')}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ color: card.color, fontFamily: 'Bebas Neue, cursive', fontSize: 22, letterSpacing: 1, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ color: '#B0B0C0', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{card.desc}</p>
                <span style={{ color: card.color, fontSize: 13, fontWeight: 600 }}>{card.cta} →</span>
              </Link>
            ))}
          </section>

          {/* NEWSLETTER */}
          <NewsletterCTA />

          {/* AD PLACEHOLDER */}
          <div style={{ background: '#1A1A2E', border: '1px dashed #333', borderRadius: 8, padding: '1.5rem', textAlign: 'center', margin: '2rem 0', color: '#444', fontSize: 13 }}>
            Advertisement — Google AdSense (728×90)
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
