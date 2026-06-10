'use client'
import { useState } from 'react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{ background: '#1A1A2E', border: '1px solid #FFD70033', borderRadius: 12, padding: '3rem 2rem', textAlign: 'center', margin: '3rem 0' }}>
      <div style={{ fontSize: 40, marginBottom: 8 }}>⚽</div>
      <h2 style={{ fontFamily: 'Bebas Neue, cursive', fontSize: 36, color: '#FFD700', letterSpacing: 2, marginBottom: 8 }}>THE DAILY KICK</h2>
      <p style={{ color: '#B0B0C0', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
        Get match previews, AI predictions, and World Cup news delivered every morning. Free World Cup bracket PDF on signup!
      </p>
      {status === 'success' ? (
        <p style={{ color: '#4CAF50', fontWeight: 600, fontSize: 18 }}>🎉 You're in! Check your email for your free bracket.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ flex: 1, minWidth: 240, padding: '12px 16px', borderRadius: 8, border: '1px solid #FFD70055', background: '#0F0F1A', color: '#F0F0F0', fontSize: 15, outline: 'none' }}
          />
          <button type="submit" disabled={status === 'loading'}
            style={{ background: '#FFD700', color: '#0F0F1A', border: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
            {status === 'loading' ? 'Signing up...' : 'Get Free Bracket'}
          </button>
        </form>
      )}
    </section>
  )
}
