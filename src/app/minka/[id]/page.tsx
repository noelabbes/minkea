import React from 'react';
import { MainLayout } from '@/web/layouts/MainLayout';
import { getMinkaById } from '@/infrastructure/minkaService';
import { notFound } from 'next/navigation';
import { ChevronLeft, Calendar, MapPin, Trophy, Users, Heart, Share2, Info, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { GradientButton } from '@/web/components/GradientButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/web/components/ui/avatar';
import { Badge } from '@/web/components/ui/badge';
import { Button } from '@/web/components/ui/button';
import { MeetingPointMap } from '@/web/components/MeetingPointMap';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MinkaDetailPage({ params }: Props) {
  const { id } = await params;
  const minka = await getMinkaById(id);

  if (!minka) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto pt-4 pb-20">
        {/* Navigation / Header Section */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/feed" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors group">
            <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            Volver a descubrir
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-xl border-gray-100 minkea-shadow gap-2 text-xs font-bold">
              <Share2 className="w-4 h-4" /> Compartir
            </Button>
            <Button variant="outline" className="rounded-xl border-gray-100 minkea-shadow gap-2 text-xs font-bold">
              <Heart className="w-4 h-4" /> Guardar
            </Button>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-8">
           <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-[#D1FAE5] text-[#065F46] border-none font-black px-4 py-1 rounded-full text-xs">{minka.category}</Badge>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600">
                 <Trophy className="w-4 h-4 fill-amber-500" /> Minka Destacada
              </div>
           </div>
           <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">{minka.title}</h1>
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <Avatar className="w-6 h-6">
                    <AvatarFallback className="bg-primary text-[10px] text-white">M</AvatarFallback>
                 </Avatar>
                 <span className="text-sm font-bold text-gray-600 underline underline-offset-4 decoration-gray-200 decoration-2">Organizado por {minka.organizer}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                 <MapPin className="w-4 h-4" /> {minka.location}
              </div>
           </div>
        </div>

        {/* Main Grid (Storytelling vs Logistics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Storytelling (60%) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Gallery Simulation */}
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] rounded-3xl overflow-hidden minkea-shadow">
               <div className="col-span-4 row-span-1 overflow-hidden">
                  <img src={minka.gallery?.[0] || minka.image} alt={minka.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="col-span-2 row-span-1 overflow-hidden">
                  <img src={minka.gallery?.[1] || minka.image} alt={`${minka.title} 2`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="col-span-2 row-span-1 overflow-hidden">
                  <img src={minka.gallery?.[2] || minka.image} alt={`${minka.title} 3`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
               </div>
            </div>

            {/* Description Section */}
            <section className="border-b border-gray-100 pb-12">
              <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Sobre esta experiencia</h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                {minka.description}
              </p>
            </section>

            {/* The Squad Section */}
            <section className="border-b border-gray-100 pb-12">
               <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">El Squad para hoy</h2>
                    <p className="text-sm font-bold text-gray-400 mt-1">Ya somos {minka.asistentes.length} jóvenes listos para el impacto</p>
                  </div>
                  <Button className="bg-primary/5 text-primary hover:bg-primary/10 border-none rounded-xl font-black text-xs px-6">
                    Chatear con el Squad
                  </Button>
               </div>
               <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
                  {minka.asistentes.map((user) => (
                    <div key={user.id} className="flex flex-col items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-16 h-16 ring-4 ring-white shadow-lg minkea-shadow">
                          <AvatarImage src={user.avatarUrl} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                      </div>
                      <span className="text-xs font-black text-gray-700">{user.name.split(' ')[0]}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Impact Details */}
            <section className="p-8 bg-green-50 rounded-[40px] border border-green-100 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-3 bg-white rounded-2xl shadow-sm text-green-600">
                      <Heart className="w-6 h-6 fill-green-600" />
                   </div>
                   <h3 className="text-xl font-black text-green-900 tracking-tight">Tu Impacto Colectivo</h3>
                </div>
                <p className="text-green-800 text-lg leading-relaxed font-bold italic">
                  "{minka.impactDescription}"
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-black text-green-700">
                   <CheckCircle2 className="w-4 h-4" /> Acción validada por Minkea Green Team
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Logistics Sticky Sidebar (40%) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 p-8 bg-white border border-gray-100 rounded-[32px] minkea-shadow">
              
              {/* Reward Highlight */}
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-50">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Recompensa Yape</p>
                  <h3 className="text-3xl font-black text-gray-900">+{minka.rewardPoints} <span className="text-sm font-bold text-primary">pts</span></h3>
                </div>
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                   <Trophy className="w-8 h-8 fill-amber-500" />
                </div>
              </div>

              {/* Logistics Grid */}
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-primary/5 rounded-2xl text-primary">
                      <Calendar className="w-6 h-6" />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Cuándo</p>
                      <p className="text-sm font-semibold text-gray-900">{minka.date}</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="p-3 bg-primary/5 rounded-2xl text-primary">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div className="flex-1">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Punto de encuentro</p>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 leading-snug">{minka.meetingPoint.address}</p>
                        {minka.meetingPoint.reference && (
                          <p className="text-xs font-normal text-gray-500 mt-1 leading-relaxed">
                            {minka.meetingPoint.reference}
                          </p>
                        )}
                      </div>
                      <div className="h-48 w-full rounded-2xl overflow-hidden border border-gray-100">
                         <MeetingPointMap 
                            lat={minka.meetingPoint.lat} 
                            lng={minka.meetingPoint.lng} 
                            address={minka.meetingPoint.address} 
                         />
                      </div>
                   </div>
                </div>
              </div>

              {/* Main CTA */}
              <Link href={`/minka/${id}/active`} className="block">
                <GradientButton className="w-full text-xl py-8 minkea-shadow">
                  Unirme a la Minka
                </GradientButton>
              </Link>

              <p className="text-center text-[10px] font-bold text-gray-400 mt-4 flex items-center justify-center gap-2">
                 <Info className="w-3 h-3" /> No se te cobrará nada. Tu tiempo es tu aporte.
              </p>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
