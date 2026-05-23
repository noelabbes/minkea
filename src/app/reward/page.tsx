import React from 'react';
import { MainLayout } from '@/web/layouts/MainLayout';
import { Trophy, Sparkles, Share2, Wallet, Linkedin, Instagram, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/web/components/ui/button';

export default function RewardPage() {
  return (
    <MainLayout showDesktopHeader={false}>
      <div className="flex flex-col items-center justify-center min-h-[90vh] text-center max-w-2xl mx-auto py-8 px-4">
        {/* Celebration Header */}
        <div className="relative mb-6">
          <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center animate-bounce shadow-inner">
            <Trophy className="w-12 h-12 text-amber-500 fill-amber-500" />
          </div>
          <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-amber-400 animate-pulse" />
        </div>

        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight italic">¡Misión Cumplida!</h1>
        <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed max-w-xs mx-auto">
          Gracias por tu impacto en la comunidad. Has demostrado que el espíritu de la <span className="font-bold text-primary">Minka</span> sigue vivo.
        </p>

        {/* Reward Card - Compact */}
        <div className="w-full bg-minkea-gradient p-[1.5px] rounded-[30px] shadow-xl shadow-primary/10 mb-8 max-w-xs mx-auto">
          <div className="bg-white rounded-[29px] py-4 px-6 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Yape_logo.png/600px-Yape_logo.png" alt="Yape" className="h-4" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Acreditados</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-gray-900">+50</span>
              <span className="text-sm font-black text-secondary uppercase">pts</span>
            </div>
          </div>
        </div>

        {/* Viral Voucher Thumbnail */}
        <div className="w-full mb-6 group cursor-pointer relative max-w-sm">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Tu prueba de impacto</p>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-[1.02] duration-300">
            <img 
              src="/assets/mcompletada_lomas.png" 
              alt="Voucher de Minka Completada" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                <Share2 className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Share Group */}
        <div className="w-full flex flex-col gap-3 mb-10 max-w-sm">
          <Button className="w-full bg-[#0A66C2] hover:bg-[#084e96] h-14 rounded-2xl text-lg font-bold gap-3 shadow-lg shadow-blue-500/20">
            <Linkedin className="w-6 h-6" />
            Compartir en LinkedIn
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-14 rounded-2xl border-gray-100 shadow-sm gap-2 font-bold text-gray-700">
              <Instagram className="w-5 h-5 text-pink-600" />
              Historias
            </Button>
            <Button variant="outline" className="h-14 rounded-2xl border-gray-100 shadow-sm gap-2 font-bold text-gray-700">
              <Download className="w-5 h-5 text-gray-500" />
              Guardar
            </Button>
          </div>
        </div>

        {/* Benefits Link - Subtle */}
        <Link href="#" className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl mb-12 hover:bg-gray-100 transition-colors max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-gray-900">Beneficios BCP</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">Canjea tus puntos acumulados</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300">
            <Share2 className="w-4 h-4 rotate-90" />
          </div>
        </Link>

        {/* Exit - Ghost Button */}
        <Link href="/feed">
          <Button variant="ghost" className="text-gray-400 font-bold hover:text-gray-600 hover:bg-transparent">
            Volver al Inicio
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
}
