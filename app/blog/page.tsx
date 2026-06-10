import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterCTA from '@/components/NewsletterCTA'
import Link from 'next/link'

const ARTICLES = [
  { slug:'brazil-vs-germany-preview', title:'Brazil vs Germany: The Clash of Titans', excerpt:'AI analysis of the most anticipated group stage clash. Can Neymar\'s successors stop the German machine?', date:'Jun 13, 2026', readTime:'4 min', tag:'Match Preview' },
  { slug:'top-5-dark-horses-2026', title:'Top 5 Dark Horses to Watch in 2026', excerpt:'Morocco, Japan, and three more teams that could shock the world this summer in North America.', date:'Jun 10, 2026', readTime:'5 min', tag:'Analysis' },
  { slug:'usa-home-advantage', title:'Will USA\'s Home Advantage Be Decisive?', excerpt:'Playing in front of massive home crowds across 11 US venues — our AI model says yes.', date:'Jun 9, 2026', readTime:'3 min', tag:'Prediction' },
  { slug:'canada-first-world-cup-goals', title:"Canada's Mission: Score Their First World Cup Goals", excerpt:"As hosts, Canada faces Bosnia in Toronto. Our AI predicts how they'll perform on home soil.", date:'Jun 8, 2026', readTime:'4 min', tag:'Match Preview' },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: '#0F0F1A' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <h1 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 48, color: '#FFD700', letterSpacing: 3 }}>AI MATCH ANALYSIS</h1>
            <span style={{ background: '#4FC3F722', color: '#4FC3F7', border: '1px solid #4FC3F744', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600 }}>Powered by Claude AI</span>
          </div>
          <p style={{ color: '#B0B0C0', marginBottom: 32 }}>In-depth match previews and predictions generated fresh every day.</p>

          <div style={{ display: 'grid', gap: 20 }}>
            {ARTICLES.map(article => (
              <Link key={article.slug} href={`/blog/${article.slug}`}
                style={{ background: '#1A1A2E', border: '1px solid #FFD70022', borderRadius: 12, padding: '1.5rem', textDecoration: 'none', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#FFD70055')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#FFD70022')}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                      <span style={{ background: '#FFD70022', color: '#FFD700', fontSize: 11, padding: '3px 8px', borderRadius: 4, fontWeight: 600 }}>{article.tag}</span>
                      <span style={{ color: '#666', fontSize: 12 }}>{article.date} · {article.readTime} read</span>
                    </div>
                    <h2 style={{ color: '#F0F0F0', fontSize: 20, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{article.title}</h2>
                    <p style={{ color: '#888', fontSize: 14, lineHeight: 1.6 }}>{article.excerpt}</p>
                  </div>
                  <span style={{ color: '#FFD700', fontSize: 22 }}>→</span>
                </div>
              </Link>
            ))}
          </div>

          <NewsletterCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
