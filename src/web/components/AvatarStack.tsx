import React from 'react';
import { User } from '@/domain/models';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface AvatarStackProps {
  users: User[];
  max?: number;
}

export const AvatarStack: React.FC<AvatarStackProps> = ({ users, max = 4 }) => {
  const displayedUsers = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className="flex -space-x-3 overflow-hidden">
      {displayedUsers.map((user) => (
        <Avatar key={user.id} className="inline-block border-2 border-white ring-2 ring-transparent transition-transform hover:translate-y-[-2px] hover:z-10">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      ))}
      {remaining > 0 && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-gray-100 text-xs font-medium text-gray-600">
          +{remaining}
        </div>
      )}
    </div>
  );
};
