import React from 'react';
import Image from 'next/image';
import { ADMIN_WHATSAPP_DIGITS } from '@/lib/admin-contact';

export function Hero() {
    return (
        <section className="relative pt-32 pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    alt="University Campus Background"
                    className="object-cover opacity-20 dark:opacity-10"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuYFJC2GfasulK9SL0JfmfGMZwsfQ6u3A2hAf6jLMk4qkSJ_CHSqxX5xijC0wjJN70XVJp_WLBjdHT-54E7VDiln7q0uoYbIDXLcitwgY5DxdscIBEQ9bm0cW2GAuNLs7tYRyDR89pT9qrcEK868Fh6Ly-6Xhwqdikp-rfAXDbl4lWCdKDXWFnhQRyfTYaeb4ULD0uja5C40wGhp1Tt3sCGvf4blRzLcmNQ30lH2D7XND3xPamhkp3yHHfgWdAtfIBf3rL23UeXMM"
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-private-bg-light/50 via-private-bg-light/80 to-private-bg-light dark:from-private-bg-dark/50 dark:via-private-bg-dark/80 dark:to-private-bg-dark"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-private-primary/10 dark:bg-private-primary/20 text-xs font-bold tracking-wider uppercase mb-6 text-private-primary dark:text-white border border-private-primary/20">Private Master Class</span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Solusi Cepat & Efisien <br /><span className="text-private-primary italic">Berkolaborasi dengan AI</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                    Bimbingan intensif penulisan Tesis, Disertasi, Buku, dan Artikel Jurnal. Dapatkan pendampingan personal untuk memaksimalkan AI dalam riset Anda.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a className="inline-flex items-center justify-center px-8 py-4 bg-private-primary hover:bg-private-primary/90 text-white text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="#pricing">
                        Lihat Paket Kelas
                    </a>
                    <a className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-private-primary dark:hover:border-private-primary text-gray-700 dark:text-white text-lg font-bold rounded-full transition-all" href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20Private%20Master%20Class.`} target='_blank'>
                        Konsultasi Gratis
                    </a>
                </div>
            </div>
        </section>
    );
}
