import Link from 'next/link';
import React from 'react';
import { ADMIN_WHATSAPP_DIGITS } from '@/lib/admin-contact';

export function CTA() {
    return (
        <section className="py-24 bg-program-primary text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Siap Berinovasi?</h2>
                <p className="text-lg text-gray-200 mb-8 font-light">Bergabunglah dengan ribuan mahasiswa yang mengubah karier mereka dengan jalur pembelajaran khusus kami.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link className="inline-flex items-center justify-center px-8 py-4 bg-white text-eduzin-dark font-bold rounded-full hover:bg-gray-100 transition shadow-lg text-lg" href="/schedule">
                        Daftar Sekarang
                    </Link>
                    <a
                        className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition text-lg"
                        href={`https://wa.me/${ADMIN_WHATSAPP_DIGITS}?text=Hallo%2C%20saya%20butuh%20informasi%20webinar%20penulisan%20akademik%20di%20Kelas%20Inovatif`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
}
