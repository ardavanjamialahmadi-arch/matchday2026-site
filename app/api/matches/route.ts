import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('matches')
      .select(`*, team_home:teams!matches_team_home_fkey(name, flag_url), team_away:teams!matches_team_away_fkey(name, flag_url)`)
      .order('match_date', { ascending: true })
      .limit(20)

    if (error) throw error
    return NextResponse.json({ matches: data })
  } catch (err) {
    return NextResponse.json({ matches: [] })
  }
}
