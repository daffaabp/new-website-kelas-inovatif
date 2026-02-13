import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <header className="relative h-[85vh] w-full flex items-end pb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/community/komunitas_kelasinovatif.avif"
                    alt="Campus"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 drop-shadow-lg">
                    <span className="block font-light">Komunitas</span>
                    <span className="block font-bold italic text-eduzin-main">Pembelajaran AI</span>
                    <span className="block font-light">No. 1 di Indonesia</span>
                </h1>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <p className="text-white/90 max-w-xl text-base md:text-lg leading-relaxed font-medium">
                        Belajar, berjejaring, dan tumbuh bersama komunitas AI terbaik untuk akademisi Indonesia.
                    </p>
                    <Link
                        className="bg-white text-[#1C302B] px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition group shadow-xl"
                        href="/schedule"
                    >
                        GABUNG KOMUNITAS
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
