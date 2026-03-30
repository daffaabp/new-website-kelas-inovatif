"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ADMIN_WHATSAPP_DIGITS } from "@/lib/admin-contact";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-0 animate-fadeIn fill-mode-forwards">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bootcamp-accent/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A3C34]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#1A3C34]/20 bg-[#1A3C34]/5 text-[#1A3C34] text-sm font-medium backdrop-blur-sm animate-fadeIn fill-mode-[both] [animation-delay:100ms]">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Program Intensif 3-4 Hari
          </div>

          {/* Heading */}
          <div className="space-y-4 animate-fadeIn fill-mode-[both] [animation-delay:200ms]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1A3C34] tracking-tight leading-tight">
              Bootcamp Masterclass <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1A3C34] to-bootcamp-primary-light">
                Penulisan Akademik
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transformasi naskah ilmiah Anda dari ide mentah menjadi publikasi bereputasi. 
              Satu rangkaian alur belajar utuh: <span className="font-semibold text-[#1A3C34]">Metodologi</span>, <span className="font-semibold text-[#1A3C34]">AI Writing</span>, <span className="font-semibold text-[#1A3C34]">Olah Data</span>, hingga <span className="font-semibold text-[#1A3C34]">Publikasi</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fadeIn fill-mode-[both] [animation-delay:400ms]">
            <Link
              href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Halo%20Admin,%20saya%20tertarik%20dengan%20Bootcamp%20Masterclass%20Penulisan%20Akademik`}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-[#1A3C34] border border-transparent rounded-full hover:bg-bootcamp-primary-light hover:scale-105 shadow-lg shadow-[#1A3C34]/20 group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hubungi Admin
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#1A3C34] transition-all duration-200 bg-white border border-[#1A3C34]/20 rounded-full hover:bg-[#FDFBF7] hover:border-[#1A3C34]/50 shadow-sm"
            >
              Lihat Kurikulum
            </button>
          </div>

          {/* Trust/Stats */}
          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-gray-500 animate-fadeIn fill-mode-[both] [animation-delay:600ms]">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#1A3C34]" />
              <span>4 Modul Terintegrasi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#1A3C34]" />
              <span>Praktik Langsung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#1A3C34]" />
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
