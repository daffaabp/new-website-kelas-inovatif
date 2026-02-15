"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface CaseStudy {
    id: string;
    label: string;
    category: string;
    title: string;
    titleHighlight: string;
    description: string;
    images: { src: string; alt: string }[];
}

const caseStudies: CaseStudy[] = [
    {
        id: "rindam",
        label: "Rindam IV/DIP",
        category: "AI untuk Tugas Kantor",
        title: "Rindam IV/DIP:",
        titleHighlight: "AI untuk Tugas Kantor",
        description:
            "Di lingkungan Rindam IV/Diponegoro, kami hadir untuk mengintegrasikan AI ke dalam rutinitas kerja harian. Pelatihan ini bukan sekadar tentang teknologi, melainkan tentang bagaimana efisiensi administratif dapat dicapai melalui otomatisasi cerdas—memungkinkan personel untuk bekerja lebih taktis dan produktif dalam menjalankan tugas kedinasan.",
        images: [
            {
                src: "/images/tni/rindam-iv/rindam1.avif",
                alt: "Pelatihan AI di Rindam IV Diponegoro",
            },
            {
                src: "/images/tni/rindam-iv/rindam2.avif",
                alt: "Personel Rindam IV menggunakan tools AI",
            },
            {
                src: "/images/tni/rindam-iv/rindam3.avif",
                alt: "Sesi praktek AI untuk tugas kantor",
            },
        ],
    },
    {
        id: "secata",
        label: "SECATA",
        category: "Pendidikan Tamtama",
        title: "SECATA: Penulisan",
        titleHighlight: "Laporan Cerdas",
        description:
            "Sebuah kehormatan bagi kami untuk membersamai para siswa Sekolah Calon Tamtama dalam mengadopsi teknologi masa depan. Program ini difokuskan pada peningkatan literasi digital dan pemanfaatan AI untuk penyusunan laporan yang lebih cerdas dan terstruktur, membekali prajurit muda dengan kompetensi modern tanpa meninggalkan jati diri militer.",
        images: [
            {
                src: "/images/tni/secata/secata1.avif",
                alt: "Peserta seminar tamtama menyimak dengan seksama",
            },
            {
                src: "/images/tni/secata/secata2.avif",
                alt: "Proses penulisan laporan oleh peserta",
            },
            {
                src: "/images/tni/secata/secata5.avif",
                alt: "Peserta menggunakan tablet untuk pembelajaran digital",
            },
        ],
    },
    {
        id: "dodiklatpur",
        label: "DODIKLATPUR",
        category: "AI untuk Tugas Kantor",
        title: "DODIKLATPUR:",
        titleHighlight: "Penulisan & Desain Grafis",
        description:
            "Kreativitas dan teknologi berpadu di DODIKLATPUR. Melalui pelatihan intensif, kami memperkenalkan cara baru dalam desain grafis dan penulisan berbasis AI. Hasilnya adalah peningkatan kualitas output visual dan tekstual, membuktikan bahwa inovasi teknologi dapat menjadi alat pendukung yang handal dalam setiap aspek tugas operasional.",
        images: [
            {
                src: "/images/tni/dodiklatpur/dodiklatpur1.avif",
                alt: "Pelatihan AI di DODIKLATPUR",
            },
            {
                src: "/images/tni/dodiklatpur/dodiklatpur3.avif",
                alt: "Personel DODIKLATPUR praktek desain grafis AI",
            },
            {
                src: "/images/tni/dodiklatpur/dodiklatpur5.avif",
                alt: "Sesi penulisan dengan bantuan AI",
            },
        ],
    },
    {
        id: "deninteldam",
        label: "Deninteldam",
        category: "AI untuk Laporan & OSINT",
        title: "Deninteldam:",
        titleHighlight: "Laporan & Pengenalan OSINT",
        description:
            "Mendukung ketajaman analisis strategis di lini intelijen. Kerjasama kami dengan Deninteldam berfokus pada pemanfaatan AI untuk penyusunan laporan presisi serta pengenalan Open Source Intelligence (OSINT). Ini adalah langkah konkret dalam memadukan keahlian intelijen konvensional dengan kecepatan dan akurasi teknologi data modern.",
        images: [
            {
                src: "/images/tni/danintel/danintel1.avif",
                alt: "Pelatihan AI dan OSINT di Deninteldam",
            },
        ],
    },
];

export function PartnershipSinergySection() {
    const [lightboxSrc, setLightboxSrc] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    return (
        <section className="py-24 bg-partnership-bg-paper relative overflow-hidden">
            {/* Decorative dot pattern */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(var(--color-partnership-primary) 0.5px, transparent 0.5px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
                    <span className="text-partnership-accent font-serif italic text-xl">Sinergi Tanpa Batas</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-partnership-primary mt-3 leading-tight">
                        Jejak Kolaborasi Nyata
                    </h2>
                    <p className="text-partnership-text-muted text-lg mt-6 font-sans max-w-2xl mx-auto leading-relaxed">
                        Kami bangga dapat melangkah bersama universitas ternama, instansi pemerintah, dan satuan militer dalam satu misi transformasi digital.
                    </p>
                </div>

                {/* Case Studies List */}
                <div className="flex flex-col gap-24 md:gap-40">
                    {caseStudies.map((study, idx) => (
                        <div 
                            key={study.id} 
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Visual Area */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-partnership-primary/5 rounded-4xl -rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out hidden md:block"></div>
                                <div className="relative rounded-4xl overflow-hidden shadow-2xl bg-white p-2 border border-partnership-primary/5">
                                    <div className={`grid gap-2 h-[400px] md:h-[500px] w-full ${study.images.length === 1 ? "grid-cols-1" : "grid-cols-2 grid-rows-2"}`}>
                                        {/* Main Image */}
                                        <div 
                                            className={`${study.images.length === 1 ? "row-span-2 col-span-2" : "col-span-2 row-span-1 md:col-span-1 md:row-span-2"} relative rounded-xl overflow-hidden cursor-zoom-in`}
                                            onClick={() => setLightboxSrc(study.images[0])}
                                        >
                                            <Image
                                                src={study.images[0].src}
                                                alt={study.images[0].alt}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                                        </div>

                                        {/* Secondary Images */}
                                        {study.images[1] && (
                                            <div 
                                                className="col-span-1 row-span-1 relative rounded-xl overflow-hidden cursor-zoom-in"
                                                onClick={() => setLightboxSrc(study.images[1])}
                                            >
                                                <Image
                                                    src={study.images[1].src}
                                                    alt={study.images[1].alt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="25vw"
                                                />
                                            </div>
                                        )}
                                        {study.images[2] && (
                                            <div 
                                                className="col-span-1 row-span-1 relative rounded-xl overflow-hidden cursor-zoom-in"
                                                onClick={() => setLightboxSrc(study.images[2])}
                                            >
                                                <Image
                                                    src={study.images[2].src}
                                                    alt={study.images[2].alt}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="25vw"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Text Content Area */}
                            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-12 bg-partnership-accent"></span>
                                    <span className="text-partnership-accent font-bold tracking-widest uppercase text-sm">{study.category}</span>
                                </div>
                                
                                <h3 className="font-serif text-3xl md:text-5xl font-bold text-partnership-primary leading-[1.1]">
                                    {study.title} <span className="text-partnership-accent block mt-2 italic">{study.titleHighlight}</span>
                                </h3>
                                
                                <p className="text-partnership-text-muted text-lg md:text-xl leading-relaxed font-sans font-light">
                                    {study.description}
                                </p>

                                <div className="pt-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-partnership-primary/20 text-partnership-primary text-sm font-medium hover:bg-partnership-primary hover:text-white transition-all cursor-default">
                                        <span className="material-symbols-outlined text-[18px]">verified</span>
                                        Official Partner
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md cursor-zoom-out p-4"
                    onClick={() => setLightboxSrc(null)}
                >
                    <button
                        className="absolute top-6 right-6 z-60 text-white/50 hover:text-white transition-colors p-2"
                        onClick={() => setLightboxSrc(null)}
                        aria-label="Tutup"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div
                        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            alt={lightboxSrc.alt}
                            src={lightboxSrc.src}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
