import React from 'react';
import { Search, Home, Map, User, Bell } from 'lucide-react';
import Link from 'next/link';

export const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-lg border-t border-gray-100 h-20 flex items-center justify-around px-6 z-50 pb-4 md:hidden">
      <Link href="/feed" className="flex flex-col items-center gap-1.5 transition-all text-primary">
        <Home className="w-6 h-6" />
        <span className="text-[11px] font-extrabold tracking-tight">Explorar</span>
      </Link>
      <Link href="#" className="flex flex-col items-center gap-1.5 transition-all text-gray-400 hover:text-gray-600">
        <Map className="w-6 h-6" />
        <span className="text-[11px] font-bold tracking-tight">Mapa</span>
      </Link>
      <div className="relative -top-6">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-white text-white">
          <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center font-black text-xs">M</div>
        </div>
      </div>
      <Link href="#" className="flex flex-col items-center gap-1.5 transition-all text-gray-400 hover:text-gray-600">
        <Bell className="w-6 h-6" />
        <span className="text-[11px] font-bold tracking-tight">Alertas</span>
      </Link>
      <Link href="#" className="flex flex-col items-center gap-1.5 transition-all text-gray-400 hover:text-gray-600">
        <User className="w-6 h-6" />
        <span className="text-[11px] font-bold tracking-tight">Perfil</span>
      </Link>
    </nav>
  );
};
