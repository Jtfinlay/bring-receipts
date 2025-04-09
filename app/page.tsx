import { createClient } from '@/utils/supabase/server';
import { Tables } from '@/utils/database.types';
import { Suspense } from 'react';
import ProfileCards from '../components/profile-cards';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/sign-in');
  }

  // Get initial profiles on the server
  const { data: profiles } = (await supabase
    .from('profiles')
    .select('*')
    .neq('id', user.id)
    .limit(10)) as { data: Tables<'profiles'>[] | null };

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id);

  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
      <h2 className="font-medium text-xl mb-4">Next steps</h2>
      <p>Hi, {user.email}</p>
      <p>Categories: {profile && profile[0]?.categories}</p>
      <div className="w-full max-w-sm mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <ProfileCards initialProfiles={profiles || []} userId={user.id} />
        </Suspense>
      </div>
    </main>
  );
}
