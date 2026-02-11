import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { TableOfContents } from './_components/TableOfContents';
import { PolicyContent } from './_components/PolicyContent';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Kebijakan Privasi - Kelas Inovatif",
    description: "Kebijakan privasi Kelas Inovatif. Kami menghargai privasi data Anda.",
};

export default function PrivacyPage() {
    return (
        <main className="bg-privacy-bg-light dark:bg-privacy-bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300 font-sans min-h-screen">
            <Navbar />
            <Hero />
            <section className="py-16 md:py-24 bg-white dark:bg-privacy-bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        <TableOfContents />
                        <PolicyContent />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}