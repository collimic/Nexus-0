# Nexus-0 🚀

Nexus-0 is a production-ready, installable Progressive Web App (PWA) built with a $0-cost architecture. It serves as a high-performance data logger designed for "local-first" reliability and real-time cloud synchronization.

## 🛠 Tech Stack ($0 Budget)

* **Frontend:** Vanilla HTML5, CSS3 (Modern Flexbox/Grid), and ES6+ JavaScript.
* **Backend:** [Supabase](https://supabase.com/) (PostgreSQL + Auth).
* **Hosting:** [Vercel](https://vercel.com/) (Full-stack Edge hosting).
* **PWA:** Manifest.json & Service Workers for offline access and home-screen installation.

## ✨ Key Features

* **Native Feel:** Fully installable on iOS, Android, and Desktop.
* **Offline Ready:** Service workers cache core assets for instant loading in low-connectivity areas.
* **Real-time Sync:** Direct integration with Supabase for immediate data persistence.
* **Secure:** Implements Row Level Security (RLS) to protect data at the database level.

## 🚀 Getting Started

### Prerequisites
1. A [Supabase](https://supabase.com/) account and project.
2. A [Vercel](https://vercel.com/) account linked to your GitHub.

### Database Setup
To initialize the database, run the following SQL in your Supabase SQL Editor:

```sql
-- Create the main data table
CREATE TABLE nexus_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    title TEXT NOT NULL
);

-- Enable Security
ALTER TABLE nexus_items ENABLE ROW LEVEL SECURITY;

-- Allow Public Access (For Starter Setup)
CREATE POLICY "Allow public insert" ON nexus_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select" ON nexus_items FOR SELECT USING (true);