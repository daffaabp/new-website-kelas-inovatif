import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { InfoCards } from './_components/InfoCards';
import { TermsContent } from './_components/TermsContent';

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Syarat & Ketentuan - Kelas Inovatif",
    description: "Syarat dan ketentuan penggunaan layanan Kelas Inovatif University.",
};

export default function TermsPage() {
    return (
        <main className="bg-terms-bg-light dark:bg-terms-bg-dark text-terms-text-light dark:text-terms-text-dark transition-colors duration-300 font-sans min-h-screen">
            <Navbar />
            <Hero />
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-24 relative z-10">
                <InfoCards />
                <TermsContent />
            </section>
            <Footer />
        </main>
    );
}