import { createClient } from '@/utils/supabase/server';
import { Tables } from '@/utils/database.types';
import { Suspense } from 'react';
import ProfileCards from '../components/profile-cards';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return <div>Please sign in to view profiles</div>;
  }

  // Get initial profiles on the server
  const { data: profiles } = (await supabase
    .from('profiles')
    .select('*')
    .neq('id', session.user.id)
    .limit(10)) as { data: Tables<'profiles'>[] | null };

  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
      <h2 className="font-medium text-xl mb-4">Next steps</h2>
      <p>Hi, {session.user.email}</p>
      <div className="w-full max-w-sm mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileCards
            initialProfiles={profiles || []}
            userId={session.user.id}
          />
        </Suspense>
      </div>
    </main>
  );
}
