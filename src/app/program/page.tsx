import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { ProgramList } from './_components/ProgramList';
import { Testimonial } from './_components/Testimonial';
import { CTA } from './_components/CTA';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Program - Kelas Inovatif',
    description: 'Jelajahi berbagai program pembelajaran kami, dari kelas reguler hingga bootcamp intensif.',
};

export default function ProgramPage() {
    return (
        <main className="bg-program-bg-light dark:bg-program-bg-dark text-program-text-light dark:text-program-text-dark antialiased transition-colors duration-300 font-sans min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <Hero />
            <ProgramList />
            <Testimonial />
            <CTA />
            <Footer />
        </main>
    );
}