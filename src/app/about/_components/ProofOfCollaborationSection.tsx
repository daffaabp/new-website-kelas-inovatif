"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

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

export function ProofOfCollaborationSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxSrc, setLightboxSrc] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    const active = caseStudies[activeIndex];

    return (
        <section className="py-20 bg-about-bg-light dark:bg-about-bg-dark relative overflow-hidden">
            {/* Decorative dot pattern */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(var(--color-about-primary) 0.5px, transparent 0.5px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-about-primary dark:text-white mb-4">
                        Sinergi Tanpa Batas
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Dari koridor kampus hingga markas komando, semangat inovasi kami tak mengenal batas institusi. Kami bangga dapat melangkah bersama universitas ternama, instansi pemerintah, dan satuan militer dalam satu misi: menghadirkan transformasi digital yang inklusif dan berdampak nyata bagi kemajuan bangsa.
                    </p>
                </div>

                {/* Content area — images + text & buttons */}
                {/* Content area — images + text & buttons */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
                    {/* Left Column: Image Area */}
                    <div className="relative group" key={active.id + "-images"}>
                        {/* Decorative backdrop */}
                        <div className="absolute -inset-4 bg-about-primary/5 dark:bg-about-primary/10 rounded-2xl -rotate-1 scale-105 z-0 transition-transform duration-500 group-hover:rotate-0 hidden md:block" />

                        <div className="relative z-10 w-full">
                            {/* Desktop Grid Layout (md+) */}
                            <div className={`hidden md:grid gap-4 h-[500px] w-full ${active.images.length === 1
                                    ? "grid-cols-1"
                                    : "grid-cols-2 grid-rows-2"
                                }`}>
                                {/* Main Large Image */}
                                <div
                                    className={`${active.images.length === 1
                                            ? "row-span-2 col-span-2"
                                            : "col-span-2 row-span-1 md:col-span-1 md:row-span-2"
                                        } relative overflow-hidden rounded-2xl shadow-lg cursor-zoom-in group/img`}
                                    onClick={() => setLightboxSrc(active.images[0])}
                                >
                                    <Image
                                        alt={active.images[0].alt}
                                        src={active.images[0].src}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/img:scale-105 grayscale-[20%] group-hover/img:grayscale-0"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                </div>

                                {/* Top Small Image */}
                                {active.images[1] && (
                                    <div
                                        className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md cursor-zoom-in group/img"
                                        onClick={() => setLightboxSrc(active.images[1])}
                                    >
                                        <Image
                                            alt={active.images[1].alt}
                                            src={active.images[1].src}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/img:scale-110 sepia-[10%]"
                                            sizes="25vw"
                                        />
                                    </div>
                                )}

                                {/* Bottom Small Image */}
                                {active.images[2] && (
                                    <div
                                        className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-md cursor-zoom-in group/img"
                                        onClick={() => setLightboxSrc(active.images[2])}
                                    >
                                        <Image
                                            alt={active.images[2].alt}
                                            src={active.images[2].src}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/img:scale-110 contrast-125"
                                            sizes="25vw"
                                        />
                                        <div className="absolute inset-0 bg-about-primary/10 mix-blend-multiply" />
                                    </div>
                                )}
                            </div>

                            {/* Mobile Scroll Snap Layout (< md) */}
                            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
                                {active.images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-shrink-0 w-[85vw] h-72 relative rounded-2xl overflow-hidden shadow-md snap-center"
                                        onClick={() => setLightboxSrc(img)}
                                    >
                                        <Image
                                            alt={img.alt}
                                            src={img.src}
                                            fill
                                            className="object-cover"
                                            sizes="85vw"
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text (top) + Slider Buttons (bottom) */}
                    <div
                        className="flex flex-col justify-between relative min-h-[300px]"
                        key={active.id + "-content"}
                    >
                        {/* Vertical decorative line */}
                        <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-about-primary/0 via-about-primary/30 to-about-primary/0 hidden lg:block" />

                        {/* Text content — pinned to top */}
                        <div className="space-y-6">
                            <div className="space-y-3">
                                {/* Category label */}
                                <div className="flex items-center space-x-3">
                                    <span className="h-px w-8 bg-about-primary" />
                                    <span className="text-about-primary font-bold text-xs tracking-widest uppercase">
                                        {active.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-serif text-2xl md:text-4xl font-bold text-about-primary dark:text-white leading-tight tracking-tight">
                                    {active.title}{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-about-primary to-about-primary/70">
                                        {active.titleHighlight}
                                    </span>
                                </h3>
                            </div>

                            {/* Body text */}
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-l-2 border-gray-200 dark:border-gray-700 pl-4 md:pl-6">
                                {active.description}
                            </p>
                        </div>

                        {/* Slider Buttons — pinned to bottom */}
                        <div className="flex flex-wrap items-center gap-2 pt-8">
                            {caseStudies.map((cs, idx) => (
                                <button
                                    key={cs.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`
                                        px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 cursor-pointer whitespace-nowrap
                                        ${activeIndex === idx
                                            ? "bg-about-primary text-white shadow-lg shadow-about-primary/25"
                                            : "bg-white dark:bg-about-surface-dark text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-about-primary/50 hover:text-about-primary"
                                        }
                                    `}
                                >
                                    {cs.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12 md:mt-20 relative z-10">
                <Link
                    className="inline-flex items-center px-6 py-3 bg-about-primary text-white rounded-full font-medium hover:bg-about-primary/90 transition-colors group shadow-lg shadow-about-primary/20"
                    href="/contact"
                >
                    Hubungi Kami untuk Kerjasama
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Lightbox Modal */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
                    onClick={() => setLightboxSrc(null)}
                >
                    <button
                        className="absolute top-6 right-6 z-60 text-white/80 hover:text-white transition-colors bg-black/40 hover:bg-black/60 rounded-full p-2"
                        onClick={() => setLightboxSrc(null)}
                        aria-label="Tutup"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="relative w-[90vw] h-[85vh] max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            alt={lightboxSrc.alt}
                            src={lightboxSrc.src}
                            fill
                            className="object-contain cursor-default"
                            sizes="90vw"
                            priority
                        />
                    </div>

                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                        {lightboxSrc.alt}
                    </p>
                </div>
            )}
        </section>
    );
}
