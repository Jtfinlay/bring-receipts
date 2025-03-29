'use client';

import { Database, Tables } from '@/utils/database.types';
import { createClient } from '@/utils/supabase/client';
import ProfileCard from '@/components/tinder-card';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ProfileCards({
  initialProfiles,
  userId,
}: {
  initialProfiles: Tables<'profiles'>[];
  userId: string;
}) {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const handleSwipe = async (
    direction: 'left' | 'right',
    profileId: string,
  ) => {
    try {
      setIsLoading(true);

      console.log('Swiped!', direction);

      if (direction === 'right') {
        const { error: matchError } = await supabase.from('matches').insert({
          user1_id: userId,
          user2_id: profileId,
          user1_liked: true,
        });

        if (matchError) {
          console.error(matchError);
          toast.error('Failed to create match. Please try again.');
          return;
        }
      }

      setProfiles(profiles => profiles.filter(p => p.id !== profileId));
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (profiles.length === 0) {
    return <div className="text-center py-4">No more profiles to show</div>;
  }

  return (
    <>
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          onSwipe={dir => handleSwipe(dir, profile.id)}
          profile={profile}
          disabled={isLoading}
        />
      ))}
    </>
  );
}
