import React from 'react';
import { MainLayout } from '@/web/layouts/MainLayout';
import { Trophy, Sparkles, ArrowRight, Share2, Wallet } from 'lucide-react';
import Link from 'next/link';
import { GradientButton } from '@/web/components/GradientButton';
import { Button } from '@/web/components/ui/button';

export default function RewardPage() {
  return (
    <MainLayout showDesktopHeader={false}>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-2xl mx-auto py-12">
        {/* Celebration Animation Placeholder */}
        <div className="relative mb-12">
          <div className="w-40 h-40 bg-amber-50 rounded-full flex items-center justify-center animate-bounce shadow-inner">
            <Trophy className="w-20 h-20 text-amber-500 fill-amber-500" />
          </div>
          <Sparkles className="absolute -top-6 -right-6 w-12 h-12 text-amber-400 animate-pulse" />
          <Sparkles className="absolute -bottom-4 -left-6 w-10 h-10 text-primary animate-pulse delay-75" />
        </div>

        <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">¡Misión Cumplida!</h1>
        <p className="text-gray-500 text-lg font-medium mb-12 leading-relaxed">
          Gracias por tu impacto en la comunidad. Has demostrado que el espíritu de la <span className="font-bold text-primary italic">Minka</span> sigue vivo en ti.
        </p>

        {/* Reward Card */}
        <div className="w-full bg-minkea-gradient p-[2px] rounded-[40px] shadow-2xl shadow-primary/20 mb-12">
          <div className="bg-white rounded-[38px] p-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Yape_logo.png/600px-Yape_logo.png" alt="Yape" className="h-8" />
              <span className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Acreditados</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-black text-gray-900">+50</span>
              <span className="text-2xl font-black text-secondary uppercase">pts</span>
            </div>
            <p className="text-xs font-black text-gray-300 mt-4 tracking-widest uppercase">NUEVO SALDO YAPE: 1,300 PTS</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
           <Button variant="outline" className="h-auto p-6 border-gray-100 minkea-shadow rounded-3xl flex flex-col items-center text-center hover:bg-gray-50 transition-all group">
              <div className="p-4 bg-primary/5 rounded-2xl mb-4 text-primary group-hover:scale-110 transition-transform">
                <Wallet className="w-8 h-8" />
              </div>
              <p className="text-sm font-black text-gray-900 mb-1">Beneficios BCP</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Canjea tus puntos ahora</p>
           </Button>

           <Button variant="outline" className="h-auto p-6 border-gray-100 minkea-shadow rounded-3xl flex flex-col items-center text-center hover:bg-gray-50 transition-all group">
              <div className="p-4 bg-secondary/5 rounded-2xl mb-4 text-secondary group-hover:scale-110 transition-transform">
                <Share2 className="w-8 h-8" />
              </div>
              <p className="text-sm font-black text-gray-900 mb-1">Compartir impacto</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Presume tu minka en redes</p>
           </Button>
        </div>

        {/* Back to Feed */}
        <Link href="/feed" className="w-full sm:w-auto">
          <GradientButton className="min-w-[300px] text-xl">
            Volver al Inicio
          </GradientButton>
        </Link>
      </div>
    </MainLayout>
  );
}
