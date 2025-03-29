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
  plaid_access_token text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table matches (
  id uuid default uuid_generate_v4() primary key,
  user1_id uuid references profiles(id),
  user2_id uuid references profiles(id),
  user1_liked boolean,
  user2_liked boolean,
  matched_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table transactions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id),
  amount decimal,
  category text,
  merchant_name text,
  date timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
); 