import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .order('match_date', { ascending: true })
      .limit(20)

    if (error) throw error
    return NextResponse.json({ matches: data })
  } catch (err) {
    return NextResponse.json({ matches: [] })
  }
}
