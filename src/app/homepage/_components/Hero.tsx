import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <header className="relative w-full flex flex-col md:flex-row min-h-[85vh] overflow-hidden bg-[#1a3a2a]">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 z-10 relative">
                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 drop-shadow-lg">
                    <span className="block font-light">10.000+ Akademisi Indonesia</span>
                    <span className="block font-bold italic text-eduzin-main text-[#F59E0B]">Sudah Belajar AI</span>
                    <span className="block font-light">di Sini</span>
                </h1>

                <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-xl">
                    Kuasai tools AI untuk riset, penulisan skripsi, dan publikasi ilmiah dengan bimbingan komunitas yang supportif.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        className="bg-[#F59E0B] text-white px-6 py-3 rounded-full font-bold text-base md:text-lg inline-flex items-center justify-center gap-2 hover:bg-amber-600 transition group shadow-xl hover:scale-105 transform duration-200"
                        href="/schedule"
                    >
                        Gabung Gratis Sekarang
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        className="px-6 py-3 rounded-full font-bold text-base md:text-lg text-white border-2 border-white/30 hover:bg-white/10 transition flex items-center justify-center gap-2 backdrop-blur-sm"
                        href="/program"
                    >
                        Lihat Program
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <p className="mt-6 text-sm text-white/70 font-medium tracking-wide">
                    ✓ Gratis bergabung &nbsp;·&nbsp; ✓ 10.000+ member &nbsp;·&nbsp; ✓ Materi praktis
                </p>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
                <img
                    src="/community/komunitas_kelasinovatif.avif"
                    alt="Komunitas Kelas Inovatif"
                    className="w-full h-full object-cover"
                />
                {/* Optional subtle overlay for better transition if needed, or remove completely if cleaner is preferred */}
                <div className="absolute inset-0 bg-linear-to-r from-[#1a3a2a] via-transparent to-transparent md:via-[#1a3a2a]/20"></div>
            </div>
        </header>
    );
}
