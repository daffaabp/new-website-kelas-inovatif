"use client";

import Image from "next/image";

export function PartnershipHero() {
    return (
        <header className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 md:px-12 lg:px-24 overflow-hidden bg-partnership-bg-cream">
            {/* Background Noise Texture */}
            <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-40 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E')]"></div>

            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-partnership-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-partnership-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col gap-8 text-left z-10">
                    <div className="inline-block bg-partnership-bg-paper px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase w-fit text-gray-600">
                        Mitra Terpercaya Transformasi Digital
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-serif text-partnership-primary mb-4 leading-tight font-bold">
                        Program Kerjasama & <br />
                        <span className="text-gray-700">Kolaborasi Kelas Inovatif</span>
                    </h1>
                    
                    <p className="max-w-2xl text-gray-600 text-lg leading-relaxed font-sans">
                        Bersama membangun ekosistem AI yang inklusif untuk Indonesia. Mengubah tantangan teknis menjadi peluang pemberdayaan manusia. Kami siap menjadi mitra strategis Anda dalam menghadapi era digital yang terus berkembang.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button 
                            onClick={() => document.getElementById('program-kerjasama')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-partnership-primary text-partnership-bg-cream px-8 py-4 rounded-full text-base font-bold tracking-wide hover:bg-partnership-primary-hover transition-all transform hover:-translate-y-1 shadow-lg shadow-partnership-primary/20 flex items-center gap-2 group cursor-pointer"
                        >
                            Jelajahi Program Kami
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                    </div>

                    {/* Social Proof / Trust Indicators */}
                    <div className="pt-8 mt-4 flex flex-col gap-4">
                        <p className="text-sm text-partnership-text-muted font-medium italic">
                            Dipercaya oleh institusi terkemuka di Indonesia ↓
                        </p>
                    </div>
                </div>

                {/* Right Visual Collage */}
                <div className="hidden lg:block lg:col-span-5 relative h-[500px] w-full mt-10 lg:mt-0 perspective-1000">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Image 1: Large Portrait (Lecturer) - Bottom Layer */}
                        <div className="absolute top-0 right-4 md:right-12 w-64 h-80 md:w-72 md:h-96 bg-partnership-bg-paper rounded-xl shadow-xl overflow-hidden transform rotate-2 transition-transform duration-700 hover:rotate-0 hover:z-20 group border-4 border-white">
                            <Image 
                                src="/images/speaker/arianto.avif" 
                                alt="Arianto"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <p className="text-xs font-bold uppercase tracking-wider">Education</p>
                            </div>
                        </div>

                        {/* Image 2: Medium Landscape (Military/Gov) - Middle Layer */}
                        <div className="absolute bottom-8 left-0 md:left-4 w-64 h-48 md:w-80 md:h-56 bg-partnership-bg-paper rounded-xl shadow-2xl overflow-hidden transform -rotate-3 transition-transform duration-700 hover:rotate-0 hover:scale-105 hover:z-30 group border-4 border-white">
                            <Image 
                                src="/images/tni/secata/secata4.avif"
                                alt="Kegiatan kolaborasi dengan institusi militer"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <p className="text-xs font-bold uppercase tracking-wider">Government</p>
                            </div>
                        </div>

                        {/* Image 3: Small Circular (Community) - Top Layer/Accent */}
                        <div className="absolute top-1/2 -right-2 md:-right-6 transform -translate-y-1/2 w-32 h-32 rounded-full border-4 border-partnership-bg-cream shadow-xl overflow-hidden z-20 animate-[bounce_3s_infinite]">
                            <Image 
                                src="/images/tni/rindam-iv/rindam3.avif"
                                alt="Kegiatan komunitas di Rindam IV"
                                fill
                                sizes="(max-width: 768px) 100vw, 15vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Decorative Graphic Elements */}
                        <svg className="absolute -bottom-10 -right-10 w-32 h-32 text-partnership-accent opacity-20" fill="currentColor" viewBox="0 0 100 100">
                            <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 90 C27.9 90 10 72.1 10 50 C10 27.9 27.9 10 50 10 C72.1 10 90 27.9 90 50 C90 72.1 72.1 90 50 90 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}
