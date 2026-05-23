import React from 'react';
import { Minka } from '@/domain/models';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { AvatarStack } from './AvatarStack';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';

interface MinkaCardProps {
  minka: Minka;
}

export const MinkaCard: React.FC<MinkaCardProps> = ({ minka }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Ambiental': return 'bg-[#D1FAE5] text-[#065F46]';
      case 'Social': return 'bg-blue-100 text-blue-700';
      case 'Salud': return 'bg-rose-100 text-rose-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Link href={`/minka/${minka.id}`}>
      <Card className="overflow-hidden border-none minkea-shadow rounded-2xl cursor-pointer mb-6 group transition-all hover:translate-y-[-2px]">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={minka.image} 
            alt={minka.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className={`absolute top-4 left-4 border-none font-bold px-3 py-1 ${getCategoryColor(minka.category)}`}>
            {minka.category}
          </Badge>
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
            <Trophy className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-extrabold text-gray-900">{minka.rewardPoints} <span className="text-[10px] text-gray-400 font-bold uppercase">pts</span></span>
          </div>
        </div>
        <CardHeader className="p-5 pb-2">
          <h3 className="text-xl font-extrabold leading-snug text-gray-900 line-clamp-2">{minka.title}</h3>
        </CardHeader>
        <CardContent className="p-5 pt-0 pb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{minka.date.split(',')[1]?.trim().split(' - ')[0] || minka.date.split(' - ')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="line-clamp-1">{minka.location.split(',')[0]}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-3 flex items-center justify-between border-t border-gray-50 bg-gray-50/30">
          <div className="flex items-center gap-3">
            <AvatarStack users={minka.asistentes} max={3} />
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">unidos hoy</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Trophy className="w-4 h-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
