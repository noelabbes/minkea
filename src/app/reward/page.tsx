"use client";

import React, { useState, useEffect, Suspense } from "react";
import { MainLayout } from "@/web/layouts/MainLayout";
import {
  Trophy,
  Sparkles,
  Share2,
  Wallet,
  Camera,
  Download,
  MessageCircle,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/web/components/ui/button";
import { useSearchParams } from "next/navigation";
import { getMinkaById } from "@/infrastructure/minkaService";
import { Minka } from "@/domain/models";

function RewardContent() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const searchParams = useSearchParams();
  const minkaId = searchParams.get("minkaId");
  const [minka, setMinka] = useState<Minka | null>(null);

  useEffect(() => {
    if (minkaId) {
      getMinkaById(minkaId).then((data) => {
        if (data) setMinka(data);
      });
    }
  }, [minkaId]);

  const voucherToShow = minka?.voucherImage || "/assets/mcompletada_lomas.png";

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center max-w-2xl mx-auto py-8 px-4 relative">
      {/* Celebration Header */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center animate-bounce shadow-inner">
          <Trophy className="w-10 h-10 text-amber-500 fill-amber-500" />
        </div>
        <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-amber-400 animate-pulse" />
      </div>

      <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight italic">
        ¡Misión Cumplida!
      </h1>
      <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed max-w-xs mx-auto">
        Gracias por tu impacto. Has demostrado que el espíritu de la{" "}
        <span className="font-bold text-primary">Minka</span> sigue vivo.
      </p>

      {/* Reward Card - Compact */}
      <div className="w-full bg-minkea-gradient p-[1.5px] rounded-[30px] shadow-xl shadow-primary/10 mb-6 max-w-xs mx-auto">
        <div className="bg-white rounded-[29px] py-4 px-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
            <img
              src="/assets/yape_logo.png"
              alt="Yape"
              className="h-5 w-auto rounded-md"
            />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Acreditados
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-gray-900">+50</span>
            <span className="text-sm font-black text-secondary uppercase">
              pts
            </span>
          </div>
        </div>
      </div>

      {/* Voucher Thumbnail - Cleaned */}
      <div className="w-full mb-6 max-w-sm">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 italic">
          Tu prueba de impacto social
        </p>
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={voucherToShow}
            alt="Voucher de Minka Completada"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Action Group - Simplified */}
      <div className="w-full flex flex-col gap-3 mb-8 max-w-sm">
        <Button
          onClick={() => setIsShareOpen(true)}
          className="w-full bg-primary hover:bg-primary/90 h-14 rounded-2xl text-lg font-bold gap-3 shadow-lg shadow-primary/20 text-white transition-all active:scale-[0.98]"
        >
          <Share2 className="w-6 h-6" />
          Compartir
        </Button>

        {/* Benefits Link - Elevated Hierarchy */}
        <Link
          href="#"
          className="w-full flex items-center justify-between p-4 bg-white border border-gray-100 minkea-shadow rounded-2xl hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-gray-900">Beneficios BCP</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                Canjea tus puntos ahora
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-primary">
            <Sparkles className="w-4 h-4" />
          </div>
        </Link>
      </div>

      {/* Exit - Ghost Button */}
      <Link href="/feed">
        <Button
          variant="ghost"
          className="text-gray-400 font-bold hover:text-gray-600 hover:bg-transparent mb-8"
        >
          Volver al Inicio
        </Button>
      </Link>

      {/* Bottom Sheet / Pop-up Overlay */}
      {isShareOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end transition-all duration-300">
          {/* Scrim */}
          <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] animate-in fade-in duration-300"
            onClick={() => setIsShareOpen(false)}
          />

          {/* Modal / Bottom Sheet */}
          <div className="relative bg-white rounded-t-[32px] p-8 shadow-2xl animate-in slide-in-from-bottom duration-300 ease-out max-w-2xl mx-auto w-full">
            {/* Handle Bar */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-200 rounded-full" />

            <div className="flex justify-between items-center mb-8 mt-2">
              <h2 className="text-2xl font-black text-gray-900 italic">
                Compartir en
              </h2>
              <button
                onClick={() => setIsShareOpen(false)}
                className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Horizontal Scrollable Row */}
            <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2 scroll-smooth">
              {/* LinkedIn */}
              <div className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer">
                <div className="w-16 h-16 bg-[#0077B7] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform active:scale-95">
                  <img
                    src="/assets/linkedin.svg"
                    alt="LinkedIn"
                    className="w-8 h-8 invert brightness-0"
                  />
                </div>
                <span className="text-xs font-bold text-gray-600">LinkedIn</span>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer">
                <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform active:scale-95">
                  <MessageCircle className="w-8 h-8 fill-white/20" />
                </div>
                <span className="text-xs font-bold text-gray-600">WhatsApp</span>
              </div>

              {/* Instagram Stories */}
              <div className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform active:scale-95">
                  <Camera className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-gray-600">Stories</span>
              </div>

              {/* Facebook */}
              <div className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer">
                <div className="w-16 h-16 bg-[#1877F2] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform active:scale-95">
                  <img
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    className="w-8 h-8 invert brightness-0"
                  />
                </div>
                <span className="text-xs font-bold text-gray-600">Facebook</span>
              </div>

              {/* X (Twitter) */}
              <div className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gray-900/20 group-hover:scale-110 transition-transform active:scale-95">
                  <span className="text-2xl font-black">X</span>
                </div>
                <span className="text-xs font-bold text-gray-600">Twitter</span>
              </div>

              {/* Download */}
              <div className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-all active:scale-95">
                  <Download className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-gray-600">Guardar</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">
                Inspira a otros a través de la Minka
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RewardPage() {
  return (
    <MainLayout showDesktopHeader={false}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Cargando tu impacto...
          </div>
        }
      >
        <RewardContent />
      </Suspense>
    </MainLayout>
  );
}
