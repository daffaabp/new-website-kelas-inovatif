import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waMeUrl } from "@/lib/admin-contact";

export function JobsCTA() {
    const whatsappUrl = waMeUrl(
        "Halo, saya tertarik bergabung dengan tim Kelas Inovatif. Saya ingin mengirim aplikasi umum / bertanya tentang lowongan karier. Terima kasih."
    );

    return (
        <section className="py-24 bg-eduzin-dark text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 -mr-20 w-96 h-96 rounded-full border border-white/20"></div>
                <div className="absolute bottom-0 left-0 -ml-20 w-64 h-64 rounded-full border border-white/20"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                    Siap Berkontribusi bagi Dunia Akademik?
                </h2>
                <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                    Lihat lowongan di atas atau hubungi kami untuk mengirim aplikasi umum. Tim Kelas Inovatif menanti Anda.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-eduzin-dark font-bold rounded-full hover:bg-gray-100 transition shadow-lg text-lg"
                        href="#openings"
                    >
                        Lihat Lowongan
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition text-lg"
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Hubungi via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
