import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req) {
  try {
    const body = await req.json()
    const email = body.email
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

    if (url && key) {
      await fetch(url + '/rest/v1/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': key,
          'Authorization': 'Bearer ' + key,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email, source: 'homepage' }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ success: true })
  }
}
