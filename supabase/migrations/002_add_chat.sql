-- Add chat support
create table chats (
  id uuid default uuid_generate_v4() primary key,
  match_id uuid references matches(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table messages (
  id uuid default uuid_generate_v4() primary key,
  chat_id uuid references chats(id) on delete cascade,
  sender_id uuid references profiles(id),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add indexes for better query performance
create index idx_matches_users on matches(user1_id, user2_id);
create index idx_messages_chat on messages(chat_id, created_at); 