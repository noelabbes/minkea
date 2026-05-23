import React from 'react';
import { MainLayout } from '@/web/layouts/MainLayout';
import { getMinkaById } from '@/infrastructure/minkaService';
import { notFound } from 'next/navigation';
import { ChevronLeft, MapPin, Calendar, MessageCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { GradientButton } from '@/web/components/GradientButton';
import { Button } from '@/web/components/ui/button';
import { MeetingPointMap } from '@/web/components/MeetingPointMap';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MinkaActivePage({ params }: Props) {
  const { id } = await params;
  const minka = await getMinkaById(id);

  if (!minka) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[40px] overflow-hidden minkea-shadow min-h-[600px]">
          
          {/* Map Section (Left/Top) */}
          <div className="lg:w-1/2 h-80 lg:h-auto relative bg-gray-100">
            <MeetingPointMap 
              lat={minka.meetingPoint.lat} 
              lng={minka.meetingPoint.lng} 
              address={minka.meetingPoint.address} 
            />
            <Link href={`/minka/${id}`} className="absolute top-6 left-6 p-3 bg-white/80 backdrop-blur-md rounded-2xl text-gray-900 shadow-lg z-10 hover:bg-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>

          {/* Info Section (Right/Bottom) */}
          <div className="lg:w-1/2 p-10 flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl font-black text-gray-900 leading-tight mb-2">Misión en curso</h1>
              <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">{minka.title}</p>
            </div>

            <div className="space-y-8 flex-1">
              {/* Meeting Point */}
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-900 mb-1">Punto de encuentro</h3>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed mb-2">"{minka.meetingPoint.address}"</p>
                  <Link href="#" className="text-xs font-black text-blue-600 flex items-center gap-1">
                    Abrir en Waze <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4">
                <div className="p-4 bg-amber-50 rounded-2xl text-amber-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-900 mb-1">Horario de Squad</h3>
                  <p className="text-xs text-gray-500 font-bold mb-2">Recomendamos llegar 10 min antes.</p>
                  <Link href="#" className="text-xs font-black text-amber-600 flex items-center gap-1">
                    Agendar en Google Calendar <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Community Chat */}
              <div className="p-6 bg-green-50 rounded-[32px] border border-green-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-white rounded-2xl text-green-600 shadow-sm">
                      <MessageCircle className="w-5 h-5 fill-green-600" />
                   </div>
                   <div>
                      <h4 className="text-xs font-black text-green-900 uppercase">Chat del Squad</h4>
                      <p className="text-[10px] font-bold text-green-700">12 mensajes nuevos</p>
                   </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl font-black text-xs px-6">
                   Unirse
                </Button>
              </div>
            </div>

            {/* Action */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                 <CheckCircle2 className="w-5 h-5 text-gray-300 shrink-0" />
                 <p className="text-[10px] text-gray-400 font-bold leading-relaxed">
                   Tu GPS está activo. Al llegar al lugar, se habilitará automáticamente el botón de confirmación.
                 </p>
              </div>
              <Link href="/reward">
                <GradientButton className="w-full text-lg shadow-xl shadow-primary/20">
                  Confirmar Asistencia en el Lugar
                </GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
