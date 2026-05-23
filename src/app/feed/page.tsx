import React from 'react';
import { MainLayout } from '@/web/layouts/MainLayout';
import { MinkaCard } from '@/web/components/MinkaCard';
import { BottomNav } from '@/web/components/BottomNav';
import { getMinkas } from '@/infrastructure/minkaService';
import { Search, SlidersHorizontal, MapPin } from 'lucide-react';
import { Badge } from '@/web/components/ui/badge';
import Link from 'next/link';

export default async function FeedPage() {
  const minkas = await getMinkas();

  return (
    <MainLayout>
      <div className="md:mt-4">
        {/* Search Bar (Mobile only) */}
        <div className="relative mb-8 md:hidden">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <div className="h-4 w-[1px] bg-gray-200" />
          </div>
          <input 
            type="text" 
            placeholder="Buscar misiones cerca..." 
            className="w-full bg-white border border-gray-100 minkea-shadow rounded-2xl py-4 pl-14 pr-12 text-sm font-medium focus:ring-4 focus:ring-primary/5 transition-all outline-none placeholder:text-gray-400"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-primary rounded-xl text-white shadow-md shadow-primary/20">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Filters and Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <Badge className="bg-minkea-gradient text-white border-none px-8 py-3 rounded-2xl whitespace-nowrap text-xs font-black shadow-lg shadow-primary/20 cursor-pointer">Todas</Badge>
            <Badge variant="outline" className="border-none bg-white minkea-shadow text-gray-500 px-8 py-3 rounded-2xl whitespace-nowrap text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer">Ambiental</Badge>
            <Badge variant="outline" className="border-none bg-white minkea-shadow text-gray-500 px-8 py-3 rounded-2xl whitespace-nowrap text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer">Social</Badge>
            <Badge variant="outline" className="border-none bg-white minkea-shadow text-gray-500 px-8 py-3 rounded-2xl whitespace-nowrap text-xs font-bold hover:bg-gray-50 transition-colors cursor-pointer">Salud</Badge>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-500">
            <span>Ordenar por:</span>
            <select className="bg-transparent border-none outline-none text-primary cursor-pointer font-black">
              <option>Relevancia</option>
              <option>Cercanía</option>
              <option>Más puntos</option>
            </select>
          </div>
        </div>

        {/* Minka Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Experiencias Minkea</h2>
            <Link href="#" className="text-xs font-black text-primary flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-xl hover:bg-primary/10 transition-colors">
               <MapPin className="w-4 h-4" />
               Abrir Mapa de Misiones
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {minkas.map((minka) => (
              <MinkaCard key={minka.id} minka={minka} />
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </MainLayout>
  );
}
