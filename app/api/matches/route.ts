import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

    if (!url || !key) {
      return NextResponse.json({ matches: [] })
    }

    const res = await fetch(url + '/rest/v1/matches?select=*&order=match_date.asc&limit=20', {
      headers: {
        'apikey': key,
        'Authorization': 'Bearer ' + key,
      },
    })
    const data = await res.json()
    return NextResponse.json({ matches: data })
  } catch (err) {
    return NextResponse.json({ matches: [] })
  }
}
