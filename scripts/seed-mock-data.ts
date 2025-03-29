import { config } from 'dotenv'
config({ path: './.env.local' })
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY!
);

const mockUsers = [
  {
    name: 'Sarah Chen',
    age: 28,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Yoga instructor and wellness enthusiast 🧘‍♀️ Living my best balanced life',
    photos: ['https://randomuser.me/api/portraits/women/1.jpg'],
    categories: ['FITNESS', 'HEALTH']
  },
  {
    name: 'Mike Rodriguez',
    age: 32,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Foodie on a mission to try every restaurant in the city 🍜',
    photos: ['https://randomuser.me/api/portraits/men/2.jpg'],
    categories: ['DINING', 'ENTERTAINMENT']
  },
  {
    name: 'Emma Thompson',
    age: 26,
    gender: 'female',
    interested_in: ['male', 'female'],
    bio: 'Digital nomad, currently working from coffee shops ☕',
    photos: ['https://randomuser.me/api/portraits/women/3.jpg'],
    categories: ['TRAVEL', 'DINING']
  },
  {
    name: 'James Wilson',
    age: 31,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Crossfit coach and nutrition nerd 💪',
    photos: ['https://randomuser.me/api/portraits/men/4.jpg'],
    categories: ['FITNESS', 'HEALTH']
  },
  {
    name: 'Sophia Patel',
    age: 29,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Fashion blogger with a shopping addiction 👗',
    photos: ['https://randomuser.me/api/portraits/women/5.jpg'],
    categories: ['SHOPPING', 'ENTERTAINMENT']
  },
  {
    name: 'David Kim',
    age: 34,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Homebody who loves cooking and Netflix 🏠',
    photos: ['https://randomuser.me/api/portraits/men/6.jpg'],
    categories: ['ENTERTAINMENT', 'DINING']
  },
  {
    name: 'Lisa Martinez',
    age: 27,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Adventure seeker and world traveler ✈️',
    photos: ['https://randomuser.me/api/portraits/women/7.jpg'],
    categories: ['TRAVEL', 'ENTERTAINMENT']
  },
  {
    name: 'Alex Johnson',
    age: 30,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Wellness coach and meditation enthusiast 🧘‍♂️',
    photos: ['https://randomuser.me/api/portraits/men/8.jpg'],
    categories: ['HEALTH', 'FITNESS']
  },
  {
    name: 'Rachel Green',
    age: 28,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Luxury lifestyle and spa addict 💆‍♀️',
    photos: ['https://randomuser.me/api/portraits/women/9.jpg'],
    categories: ['SHOPPING', 'HEALTH']
  },
  {
    name: 'Tom Singh',
    age: 33,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Restaurant owner and wine enthusiast 🍷',
    photos: ['https://randomuser.me/api/portraits/men/10.jpg'],
    categories: ['DINING', 'ENTERTAINMENT']
  },
  {
    name: 'Jessica Lee',
    age: 25,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Pilates instructor and green juice lover 🥬',
    photos: ['https://randomuser.me/api/portraits/women/11.jpg'],
    categories: ['FITNESS', 'HEALTH']
  },
  {
    name: 'Chris Taylor',
    age: 29,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Gaming enthusiast and home theater setup master 🎮',
    photos: ['https://randomuser.me/api/portraits/men/12.jpg'],
    categories: ['ENTERTAINMENT', 'SHOPPING']
  },
  {
    name: 'Nina Williams',
    age: 31,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Travel photographer and adventure seeker 📸',
    photos: ['https://randomuser.me/api/portraits/women/13.jpg'],
    categories: ['TRAVEL', 'ENTERTAINMENT']
  },
  {
    name: 'Ryan Cooper',
    age: 28,
    gender: 'male',
    interested_in: ['female'],
    bio: 'Fitness model and personal trainer 🏋️‍♂️',
    photos: ['https://randomuser.me/api/portraits/men/14.jpg'],
    categories: ['FITNESS', 'HEALTH']
  },
  {
    name: 'Maria Garcia',
    age: 30,
    gender: 'female',
    interested_in: ['male'],
    bio: 'Interior designer with a passion for home decor 🏡',
    photos: ['https://randomuser.me/api/portraits/women/15.jpg'],
    categories: ['SHOPPING', 'ENTERTAINMENT']
  }
];

const TRANSACTION_CATEGORIES = {
  DINING: ['Uber Eats', 'DoorDash', 'Chipotle', 'Sweetgreen', 'McDonald\'s', 'Local Restaurant'],
  FITNESS: ['Planet Fitness', 'Equinox', 'ClassPass', 'Nike', 'Lululemon', 'Local Gym'],
  SHOPPING: ['Amazon', 'Target', 'Walmart', 'Nordstrom', 'H&M', 'Zara'],
  TRAVEL: ['Airbnb', 'Expedia', 'United Airlines', 'Marriott', 'Hilton', 'Enterprise'],
  ENTERTAINMENT: ['Netflix', 'Spotify', 'AMC Theaters', 'Xbox', 'PlayStation', 'Steam'],
  HEALTH: ['CVS', 'Walgreens', 'GNC', 'Vitamin Shoppe', 'Local Pharmacy', 'Massage Envy']
};

function generateTransactions(userId: string, categories: string[], monthsBack = 24) {
  const transactions: any[] = [];
  const now = new Date();
  
  for (let i = 0; i < monthsBack; i++) {
    const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
    
    // Generate 10-20 transactions per month for each category
    categories.forEach(category => {
      const merchants = TRANSACTION_CATEGORIES[category as keyof typeof TRANSACTION_CATEGORIES];
      const transactionsCount = Math.floor(Math.random() * 11) + 10; // 10-20
      
      for (let j = 0; j < transactionsCount; j++) {
        const merchant = merchants[Math.floor(Math.random() * merchants.length)];
        const amount = Math.floor(Math.random() * 15000) / 100 + 5; // $5-$150
        const day = Math.floor(Math.random() * 28) + 1;
        
        transactions.push({
          user_id: userId,
          merchant_name: merchant,
          amount,
          category,
          date: new Date(month.getFullYear(), month.getMonth(), day).toISOString(),
          created_at: new Date().toISOString()
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
        .insert({
          id: crypto.randomUUID(),
          ...user
        })
        .select()
        .single();

      if (profileError) {
        console.error(`Failed to create profile for ${user.name}:`, profileError);
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
          console.error(`Failed to insert transactions batch for ${user.name}:`, transactionError);
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