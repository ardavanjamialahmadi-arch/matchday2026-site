-- Run this in Supabase SQL Editor

-- Teams table
CREATE TABLE IF NOT EXISTS teams (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  country_code CHAR(3),
  flag_url TEXT,
  group_name CHAR(1),
  squad JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Matches table
CREATE TABLE IF NOT EXISTS matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_home UUID REFERENCES teams(id),
  team_away UUID REFERENCES teams(id),
  score_home INT DEFAULT 0,
  score_away INT DEFAULT 0,
  match_date TIMESTAMPTZ,
  stadium TEXT,
  group_name CHAR(1),
  stage TEXT DEFAULT 'group',
  status TEXT DEFAULT 'upcoming',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Predictions table
CREATE TABLE IF NOT EXISTS predictions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  match_id UUID REFERENCES matches(id),
  pred_home INT NOT NULL,
  pred_away INT NOT NULL,
  points_earned INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, match_id)
);

-- Articles (AI-generated)
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  match_id UUID REFERENCES matches(id),
  published_at TIMESTAMPTZ DEFAULT NOW(),
  seo_description TEXT
);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Odds table
CREATE TABLE IF NOT EXISTS odds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  match_id UUID REFERENCES matches(id),
  bookmaker TEXT,
  home_odds DECIMAL(5,2),
  draw_odds DECIMAL(5,2),
  away_odds DECIMAL(5,2),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
