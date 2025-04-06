## Getting Started

Build me a NextJS application. It should be a tinder-like dating app where the user can swipe right/left. It will deploy to vercel. It should use supabase for storage, and upstash for async processing.

When a user signs up, they will allow to their bank accounts through plaid. An upstash job will then run asynchronously, retrieve the previous 24 months of their transaction data and place it in storage. From their transaction history, we will generalize what type of things the person spends money on ... Are they a "health and welness", an "eating out at restaurants", a "gym rat"? And we will show a medal on their profile for which of those is true.

Please put mock data in storage for 15 different users so we can show the system working e2e

## Local Development -- First time run

### Supabase

Run docker with [these settings](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=windows#running-supabase-locally)

Setup supabase:

```
supabase start
npx tsx .\scripts\seed-mock-data.ts
```

Copy `.env.example` to `.env.local`, and populate it with sample values.

```
NEXT_PUBLIC_SUPABASE_URL=xx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xx
NEXT_PUBLIC_SUPABASE_SERVICE_KEY=xx
PLAID_CLIENT_ID=xx
PLAID_SECRET=xx
```

If you've made schema changes and need to reset local storage & schemas

```
supabase db reset
supabase gen types typescript --local > utils/database.types.ts
npx tsx .\scripts\seed-mock-data.ts
```

### Upstash

Guide: https://upstash.com/docs/workflow/quickstarts/vercel-nextjs#option-1%3A-local-qstash-server

Start local QStash server:

```
npx @upstash/qstash-cli dev
```
