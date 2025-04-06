import { config } from 'dotenv';
config({ path: './.env.local' });
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY!,
);

const mockUsers = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    name: 'Sarah Chen',
    age: 28,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Yoga instructor and wellness enthusiast 🧘‍♀️ Living my best balanced life',
    photos: ['https://randomuser.me/api/portraits/women/1.jpg'],
    categories: ['FITNESS', 'HEALTH'],
  },
  {
    id: '3f333df6-90a4-4fda-8dd3-9485d27cee36',
    name: 'Mike Rodriguez',
    age: 32,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Foodie on a mission to try every restaurant in the city 🍜',
    photos: ['https://randomuser.me/api/portraits/men/2.jpg'],
    categories: ['DINING', 'ENTERTAINMENT'],
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    name: 'Emma Thompson',
    age: 26,
    gender: 'female',
    interested_in: ['male', 'female'],
    bio: 'Digital nomad, currently working from coffee shops ☕',
    photos: ['https://randomuser.me/api/portraits/women/3.jpg'],
    categories: ['TRAVEL', 'DINING'],
  },
  {
    id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    name: 'James Wilson',
    age: 31,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Crossfit coach and nutrition nerd 💪',
    photos: ['https://randomuser.me/api/portraits/men/4.jpg'],
    categories: ['FITNESS', 'HEALTH'],
  },
  {
    id: 'd9aed677-9584-4cf3-8229-b383a947d8bb',
    name: 'Sophia Patel',
    age: 29,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Fashion blogger with a shopping addiction 👗',
    photos: ['https://randomuser.me/api/portraits/women/5.jpg'],
    categories: ['SHOPPING', 'ENTERTAINMENT'],
  },
  {
    id: '64c1d159-bcbf-4f09-8c38-e555e927814c',
    name: 'David Kim',
    age: 34,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Homebody who loves cooking and Netflix 🏠',
    photos: ['https://randomuser.me/api/portraits/men/6.jpg'],
    categories: ['ENTERTAINMENT', 'DINING'],
  },
  {
    id: '8e2f1ee8-5c76-4ab5-bd5f-19b22a3fa9f4',
    name: 'Lisa Martinez',
    age: 27,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Adventure seeker and world traveler ✈️',
    photos: ['https://randomuser.me/api/portraits/women/7.jpg'],
    categories: ['TRAVEL', 'ENTERTAINMENT'],
  },
  {
    id: '2f8ac673-ad51-4653-a93c-a45b21d1a118',
    name: 'Alex Johnson',
    age: 30,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Wellness coach and meditation enthusiast 🧘‍♂️',
    photos: ['https://randomuser.me/api/portraits/men/8.jpg'],
    categories: ['HEALTH', 'FITNESS'],
  },
  {
    id: '7dc53df5-703e-49b3-8670-b1c468f47f1f',
    name: 'Rachel Green',
    age: 28,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Luxury lifestyle and spa addict 💆‍♀️',
    photos: ['https://randomuser.me/api/portraits/women/9.jpg'],
    categories: ['SHOPPING', 'HEALTH'],
  },
  {
    id: '0e38d3f4-6c7b-43e7-9d6f-2425062c68a8',
    name: 'Tom Singh',
    age: 33,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Restaurant owner and wine enthusiast 🍷',
    photos: ['https://randomuser.me/api/portraits/men/10.jpg'],
    categories: ['DINING', 'ENTERTAINMENT'],
  },
  {
    id: 'ed7ba470-8e54-465e-825c-99712043e01c',
    name: 'Jessica Lee',
    age: 25,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Pilates instructor and green juice lover 🥬',
    photos: ['https://randomuser.me/api/portraits/women/11.jpg'],
    categories: ['FITNESS', 'HEALTH'],
  },
  {
    id: '21f7f8de-8051-4938-8e14-778fbd9a78cd',
    name: 'Chris Taylor',
    age: 29,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Gaming enthusiast and home theater setup master 🎮',
    photos: ['https://randomuser.me/api/portraits/men/12.jpg'],
    categories: ['ENTERTAINMENT', 'SHOPPING'],
  },
  {
    id: '99d75f3c-0ecb-4d8f-81b6-aa9f072f8727',
    name: 'Nina Williams',
    age: 31,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Travel photographer and adventure seeker 📸',
    photos: ['https://randomuser.me/api/portraits/women/13.jpg'],
    categories: ['TRAVEL', 'ENTERTAINMENT'],
  },
  {
    id: 'cbde3560-7014-4f10-b812-bccd812976f1',
    name: 'Ryan Cooper',
    age: 28,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Fitness model and personal trainer 🏋️‍♂️',
    photos: ['https://randomuser.me/api/portraits/men/14.jpg'],
    categories: ['FITNESS', 'HEALTH'],
  },
  {
    id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    name: 'Maria Garcia',
    age: 30,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Interior designer with a passion for home decor 🏡',
    photos: ['https://randomuser.me/api/portraits/women/15.jpg'],
    categories: ['SHOPPING', 'ENTERTAINMENT'],
  },
];

const TRANSACTION_CATEGORIES = {
  DINING: [
    'Uber Eats',
    'DoorDash',
    'Chipotle',
    'Sweetgreen',
    "McDonald's",
    'Local Restaurant',
  ],
  FITNESS: [
    'Planet Fitness',
    'Equinox',
    'ClassPass',
    'Nike',
    'Lululemon',
    'Local Gym',
  ],
  SHOPPING: ['Amazon', 'Target', 'Walmart', 'Nordstrom', 'H&M', 'Zara'],
  TRAVEL: [
    'Airbnb',
    'Expedia',
    'United Airlines',
    'Marriott',
    'Hilton',
    'Enterprise',
  ],
  ENTERTAINMENT: [
    'Netflix',
    'Spotify',
    'AMC Theaters',
    'Xbox',
    'PlayStation',
    'Steam',
  ],
  HEALTH: [
    'CVS',
    'Walgreens',
    'GNC',
    'Vitamin Shoppe',
    'Local Pharmacy',
    'Massage Envy',
  ],
};

function generateTransactions(
  userId: string,
  categories: string[],
  monthsBack = 24,
) {
  const transactions: any[] = [];
  const now = new Date();

  for (let i = 0; i < monthsBack; i++) {
    const month = new Date(now.getFullYear(), now.getMonth() - i, 1);

    // Generate 10-20 transactions per month for each category
    categories.forEach(category => {
      const merchants =
        TRANSACTION_CATEGORIES[category as keyof typeof TRANSACTION_CATEGORIES];
      const transactionsCount = Math.floor(Math.random() * 11) + 10; // 10-20

      for (let j = 0; j < transactionsCount; j++) {
        const merchant =
          merchants[Math.floor(Math.random() * merchants.length)];
        const amount = Math.floor(Math.random() * 15000) / 100 + 5; // $5-$150
        const day = Math.floor(Math.random() * 28) + 1;

        transactions.push({
          id: crypto.randomUUID(),
          user_id: userId,
          merchant_name: merchant,
          amount,
          category,
          transaction_date: new Date(
            month.getFullYear(),
            month.getMonth(),
            day,
          ).toISOString(),
          created_at: new Date().toISOString(),
        });
      }
    });
  }

  return transactions;
}

async function seedData() {
  for (const user of mockUsers) {
    try {
      // Create user profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .upsert({
          status: 'mock',
          ...user,
        })
        .select()
        .single();

      if (profileError) {
        console.error(
          `Failed to create profile for ${user.name}:`,
          profileError,
        );
        continue;
      }

      if (!profile) {
        console.error(`No profile data returned for ${user.name}`);
        continue;
      }

      // Generate transactions for each category
      const transactions = generateTransactions(profile.id, user.categories);

      // Insert transactions in batches of 100
      const batchSize = 100;
      for (let i = 0; i < transactions.length; i += batchSize) {
        const batch = transactions.slice(i, i + batchSize);
        const { error: transactionError } = await supabase
          .from('transactions')
          .insert(batch);

        if (transactionError) {
          console.error(
            `Failed to insert transactions batch for ${user.name}:`,
            transactionError,
          );
          continue;
        }
      }

      console.log(`Successfully seeded data for user: ${user.name}`);
    } catch (error) {
      console.error(`Unexpected error while processing ${user.name}:`, error);
    }
  }

  console.log('Data seeding completed!');
}

seedData().catch(error => {
  console.error('Fatal error during seeding:', error);
  process.exit(1);
});
