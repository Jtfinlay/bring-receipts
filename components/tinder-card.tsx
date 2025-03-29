'use client';

import { Tables } from '@/utils/database.types';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

interface Props {
  profile: Tables<'profiles'>;
  onSwipe: (direction: 'left' | 'right') => void;
  disabled?: boolean;
}

export default function ProfileCard({ profile, onSwipe }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === (profile.photos?.length ?? 0) - 1 ? 0 : prev + 1,
    );
  };

  const onCardSwipe = (direction: string) => {
    onSwipe(direction as 'left' | 'right');
  };

  return (
    <TinderCard
      onSwipe={onCardSwipe}
      preventSwipe={['up', 'down']}
      className="absolute"
    >
      <div className="relative w-[320px] h-[480px] rounded-2xl overflow-hidden shadow-xl">
        {profile.photos && (
          <img
            src={profile.photos[currentImageIndex]}
            alt={profile.name ?? ''}
            className="w-full h-full object-cover"
            onClick={nextImage}
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h2 className="text-2xl font-bold">
            {profile.name}, {profile.age}
          </h2>
          <p className="mt-2 text-sm line-clamp-2">{profile.bio}</p>
        </div>
      </div>
    </TinderCard>
  );
}
