"use client";

import Hero from "./Hero";
import Roadmap from "./Roadmap";
import WhyJoin from "./WhyJoin";
import FAQ from "./FAQ";
import { Navbar } from "@/components/commons/Navbar";
import { Footer } from "@/components/commons/Footer";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function BootcampContent() {
    const [showSticky, setShowSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowSticky(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#FDFBF7]">
            <Navbar />
            <main className="grow">
                <Hero />
                <WhyJoin />
                <Roadmap />
                <FAQ />

                {/* Final CTA Section */}
                <section className="py-24 bg-white border-t border-[#1A3C34]/10">
                    <div className="container px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A3C34] mb-6">
                            Siap Menghasilkan Publikasi Berkualitas?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Jangan biarkan naskah Anda tertunda lebih lama. Amankan kursi Anda di batch berikutnya dan rasakan pengalaman belajar yang berbeda.
                        </p>
                        <Link
                            href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20mendaftar%20Bootcamp%20Masterclass"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-[#1A3C34] rounded-full hover:bg-bootcamp-primary-light hover:scale-105 shadow-xl"
                        >
                            Daftar via WhatsApp
                        </Link>
                    </div>
                </section>

                {/* Sticky Floating CTA for Mobile/Desktop */}
                <div
                    className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${showSticky ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
                        }`}
                >
                    <Link
                        href="https://wa.me/6281234567890?text=Halo%20Admin,%20boleh%20minta%20info%20lebih%20lanjut%20soal%20Bootcamp?"
                        className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg font-medium transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="hidden md:inline">Chat Admin</span>
                        <span className="md:hidden">Chat</span>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
