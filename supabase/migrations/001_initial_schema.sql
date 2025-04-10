create extension if not exists "uuid-ossp";

create type user_category as enum ('DINING', 'FITNESS', 'SHOPPING', 'TRAVEL', 'ENTERTAINMENT', 'HEALTH');

create table profiles (
  id uuid default uuid_generate_v4() primary key,
  name text,
  bio text,
  age integer,
  gender text,
  interested_in text[],
  photos text[],
  categories user_category[],
  is_admin boolean default false,
  status text default 'initial',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table "profiles" enable row level security;
CREATE POLICY "Enable insert to profiles for authenticated users only" ON public.profiles FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Individuals can view their own profiles." ON public.profiles FOR SELECT USING ( (SELECT auth.uid()) = id );

create table matches (
  id uuid default uuid_generate_v4() primary key,
  user1_id uuid references profiles(id),
  user2_id uuid references profiles(id),
  user1_liked boolean,
  user2_liked boolean,
  matched_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table "matches" enable row level security;
CREATE POLICY "Enable insert to matches for authenticated users only" ON public.matches FOR INSERT WITH CHECK (auth.role() = 'authenticated');

create table plaid_items (
  item_id text primary key,
  user_id uuid references profiles(id) not null,
  access_token text not null,
  status text not null default 'active',
  last_sync timestamp with time zone,
  sync_cursor text,
  error text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table "plaid_items" enable row level security;
CREATE POLICY "Enable insert to plaid_items for authenticated users only" ON public.plaid_items FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Individuals can view their own items." ON public.plaid_items FOR SELECT USING ( (SELECT auth.uid()) = user_id );

create table transactions (
  id text primary key,
  item_id text references plaid_items(item_id), --Should be not null, but allowing for mock data
  user_id uuid references profiles(id) not null,
  amount decimal,
  category text,
  category_detailed text,
  category_icon_url text,
  category_confidence_level text,
  merchant_name text,
  status text not null default 'active',
  transaction_date timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
); 

alter table "transactions" enable row level security;
CREATE POLICY "Enable insert to transactions for authenticated users only" ON public.transactions FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Individuals can view their own transactions." ON public.transactions FOR SELECT USING ( (SELECT auth.uid()) = user_id );

create index idx_transactions_user on transactions(user_id);

-- Add updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_profiles_updated_at
  before update on profiles
  for each row
  execute function update_updated_at_column(); 

create trigger update_matches_updated_at
  before update on matches
  for each row
  execute function update_updated_at_column(); 

create trigger update_plaid_items_updated_at
  before update on plaid_items
  for each row
  execute function update_updated_at_column(); 

create trigger update_transactions_updated_at
  before update on transactions
  for each row
  execute function update_updated_at_column(); 

ALTER ROLE authenticator SET pgrst.db_aggregates_enabled = 'true';
NOTIFY pgrst, 'reload config';
