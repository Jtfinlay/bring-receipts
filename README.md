## Getting Started

Build me a NextJS application. It should be a tinder-like dating app where the user can swipe right/left. It will deploy to vercel. It should use supabase for storage, and upstash for async processing.

When a user signs up, they will allow to their bank accounts through plaid. An upstash job will then run asynchronously, retrieve the previous 24 months of their transaction data and place it in storage. From their transaction history, we will generalize what type of things the person spends money on ... Are they a "health and welness", an "eating out at restaurants", a "gym rat"? And we will show a medal on their profile for which of those is true.

Please put mock data in storage for 15 different users so we can show the system working e2e

### Setup

Run docker with [these settings](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=windows#running-supabase-locally)

Setup supabase:

```
supabase start
tsx .\scripts\seed-mock-data.ts
```

Create an .env.local with these values, the supabase values are shown in cmd line once its running

```
NEXT_PUBLIC_SUPABASE_URL=xx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xx
NEXT_PUBLIC_SUPABASE_SERVICE_KEY=xx
PLAID_CLIENT_ID=xx
PLAID_SECRET=xx
UPSTASH_REDIS_URL=xx
UPSTASH_REDIS_TOKEN=xx
QSTASH_TOKEN=xx
QSTASH_CURRENT_SIGNING_KEY=xx
QSTASH_NEXT_SIGNING_KEY=xx
```

To refresh the `database.types.ts`,

```
// Local development
supabase gen types typescript --local > utils/database.types.ts

// Production
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > utils/database.types.ts
```
