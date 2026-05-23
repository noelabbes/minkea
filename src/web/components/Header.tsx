import React from "react";
import { Search, Trophy, Bell } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/web/components/ui/avatar";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 h-20 flex items-center justify-center px-6">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/feed" className="flex items-center group">
          <div className="relative w-16 h-16 transition-transform group-hover:scale-105">
            <Image 
              src="/assets/logo_minkea.jpg" 
              alt="Minkea Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tighter hidden sm:block">
            Minkea
          </span>
        </Link>

        {/* Search / Filters (Desktop) */}
        <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-6 py-2.5 gap-4 minkea-shadow">
          <div className="flex flex-col border-r border-gray-200 pr-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Ubicación
            </span>
            <span className="text-sm font-bold text-gray-900">
              Cualquier lugar
            </span>
          </div>
          <div className="flex flex-col border-r border-gray-200 pr-4">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Tipo
            </span>
            <span className="text-sm font-bold text-gray-900">Todas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-full text-white">
              <Search className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-black text-primary">1,250 pts</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-primary transition-colors hidden sm:block">
              <Bell className="w-6 h-6" />
            </button>
            <Avatar className="w-10 h-10 ring-2 ring-primary/10 ring-offset-2">
              <AvatarImage src="https://i.pravatar.cc/150?u=mateo" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};
