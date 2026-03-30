import React from "react";
import { MapPin, ExternalLink, Building2 } from "lucide-react";
import { ADMIN_PHONE_DISPLAY_COMPACT } from "@/lib/admin-contact";

const MAP_QUERY = "Jl+Raya+Mujur+No+46+Kroya+Cilacap+Jawa+Tengah+Indonesia";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

export const ContactMap = () => {
    return (
        <section className="py-16 bg-white dark:bg-[#27272A] border-t border-gray-200 dark:border-gray-800">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div>
                        <span className="text-eduzin-dark dark:text-about-primary font-semibold tracking-wider text-sm uppercase">
                            Lokasi Kami
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-eduzin-dark dark:text-white mt-2">
                            Temukan Kami
                        </h2>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-eduzin-dark dark:text-about-primary font-medium hover:underline"
                        >
                            Buka di Google Maps
                            <ExternalLink className="ml-1 w-4 h-4" />
                        </a>
                    </div>
                </div>
                <div className="relative w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md">
                    <iframe
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={MAP_EMBED_SRC}
                        style={{
                            border: 0,
                            width: "100%",
                            height: "100%",
                            filter: "grayscale(1) contrast(1.1) opacity(0.9)",
                        }}
                        title="Lokasi Kelas Inovatif - Jl Raya Mujur No 46 Kroya, Cilacap"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="relative">
                            <div className="w-16 h-16 bg-eduzin-dark/20 rounded-full animate-ping absolute inset-0" />
                            <div className="w-16 h-16 bg-eduzin-dark rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-white dark:border-gray-800">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {[
                        {
                            title: "Kantor Kelas Inovatif",
                            desc: "Kantor utama & layanan program, bootcamp, dan komunitas.",
                            loc: "Jl Raya Mujur No 46, Kroya, Cilacap, Jawa Tengah",
                        },
                        {
                            title: "Program & Bootcamp",
                            desc: "Informasi kelas intensif, bootcamp AI, dan jadwal pelatihan.",
                            loc: "Senin - Sabtu, 08:00 - 17:00 WIB",
                        },
                        {
                            title: "Hubungi Kami",
                            desc: "Telepon & email untuk pertanyaan dan pendaftaran.",
                            loc: `${ADMIN_PHONE_DISPLAY_COMPACT} · aiindonesiakreatif@gmail.com`,
                        },
                    ].map((place) => (
                        <div
                            key={place.title}
                            className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-eduzin-dark/30 dark:hover:border-about-primary/30 transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Building2 className="w-5 h-5 text-eduzin-dark dark:text-about-primary shrink-0" />
                                <h4 className="font-serif text-lg font-bold text-eduzin-dark dark:text-white">
                                    {place.title}
                                </h4>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {place.desc}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                {place.loc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
