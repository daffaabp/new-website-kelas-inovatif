"use client";

import Image from "next/image";

export function ImpactGallery() {
    return (
        <section className="py-24 px-6 md:px-12 bg-partnership-bg-paper relative overflow-hidden">
            {/* Topographic Pattern Background */}
            <svg className="absolute inset-0 w-full h-full text-partnership-text-muted/5 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="topography" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 0 Q 25 50 50 0 T 100 0" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                    <path d="M0 50 Q 25 100 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
                </pattern>
                <rect width="100%" height="100%" fill="url(#topography)"></rect>
            </svg>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-partnership-accent font-serif italic text-xl">Galeri Kegiatan</span>
                        <h2 className="font-serif text-4xl text-partnership-primary font-bold mt-2">Jejak Langkah Nyata</h2>
                    </div>
                    <a className="hidden md:flex items-center gap-2 text-partnership-primary font-bold hover:text-partnership-accent transition-colors" href="#">
                        Lihat Semua <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Item 1: Academic (Tall) */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="overflow-hidden rounded-xl h-[400px] shadow-md relative">
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7dnUV08CjZC6DLN3wRbsz8ULSDOL-RNf52Zugs_S5EyuPuZohVMG6y5ZyRnljWPV8BmOVwqDX5bp_3IKbf-45sFx-VuHTo6EhExEulGaEZsJPHZ7laZHnIB-F7yGE4MHsh6ZthIvQrlTWNO-NmMuYN_Ww8Co5Mv12s4KKanaAl5ztrWa23sRFjg8myqR-3lHhFtXaOjv-DrQKssDpzLQPhWkEBkPvjDQXMg7TX64VGncjrommH0etUCjAcnIVh2AM3FY7Py4duMo"
                                alt="Large shot of a University Lecture Hall with students engaged"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-partnership-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="border-l-2 border-partnership-accent pl-4">
                            <h4 className="font-serif text-xl font-bold text-partnership-primary">Upskilling Dosen ITB</h4>
                            <p className="text-partnership-text-muted mt-1 text-sm font-sans">Workshop intensif 3 hari mengenai LLM untuk publikasi riset internasional.</p>
                        </div>
                    </div>

                    {/* Item 2: Gov/Mil (Short) - Offset top on desktop */}
                    <div className="flex flex-col gap-4 group cursor-pointer md:mt-12">
                        <div className="overflow-hidden rounded-xl h-[300px] shadow-md relative">
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPomNeaUclwvY8hvVKF9SSAmIF3AGamfWwoc9bD0L42Xi461_eAxkIDLVYp-ZVyN83bwbTdRCyEAa-gezDucVlFTc_UZF3G6FG2Xn0Bbpb5ZEX3OUiSJBBY14YiqI9c6z5dYadDrQg5AjnteGC1W7ibwR35-ytkPb07ZrLO4keMEfNfeyF8BoLXrSmlUk2YVnOhrJmTzw-kW6fiwVJt_dHh0gU47bNKl-s9alPIsOneT5J8Dl6upX81W9udWLTSHSXErZrKVylpJU"
                                alt="Serious photo of uniformed officers in a war-room setting looking at screens"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-partnership-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="border-l-2 border-partnership-accent pl-4">
                            <h4 className="font-serif text-xl font-bold text-partnership-primary">Strategi Siber TNI</h4>
                            <p className="text-partnership-text-muted mt-1 text-sm font-sans">Simulasi pertahanan siber berbasis AI untuk perwira menengah.</p>
                        </div>
                    </div>

                    {/* Item 3: Community (Medium) */}
                    <div className="flex flex-col gap-4 group cursor-pointer lg:mt-6">
                        <div className="overflow-hidden rounded-xl h-[350px] shadow-md relative">
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbPO5UKifBhfG1MRTcKOyWM0NBCsrtQ1JvNfsIQaSugH8JwMRyLHbsHSQSE26at3-uMROm0yhzF779xGLu6y5GP5XNdKbNwA-6tbSzo53qR4BrVjMjBiKFG3fJ3gXz-cddoCBk0TROcHc_RgfmHA0h9eCmTqHrpgCDYhilaH2O9FcWZhckdGwL1YtYrbRU7iX7Mi5299RvEOFYyX_FSlUgdnAXDL5wvjmHesoPGLiVqVAmcLwHwK6pVgKUy7gbZ-RPkdQQHc1mK7U"
                                alt="Candid shot of youth students working on laptops in a cafe"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-partnership-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="border-l-2 border-partnership-accent pl-4">
                            <h4 className="font-serif text-xl font-bold text-partnership-primary">AI untuk UMKM</h4>
                            <p className="text-partnership-text-muted mt-1 text-sm font-sans">Membantu pelaku usaha lokal mengadopsi teknologi generatif.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a className="inline-flex items-center gap-2 text-partnership-primary font-bold hover:text-partnership-accent transition-colors" href="#">
                        Lihat Semua <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
