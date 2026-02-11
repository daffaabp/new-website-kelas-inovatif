import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { Stats } from './_components/Stats';
import { WhyWeGather } from './_components/WhyWeGather';
import { ClubShowcase } from './_components/ClubShowcase';
import { CommunityCalendar } from './_components/CommunityCalendar';
import { CommunityLeader } from './_components/CommunityLeader';
import { VideoTestimonials } from './_components/VideoTestimonials';
import { BeyondGraduation } from './_components/BeyondGraduation';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Komunitas - Kelas Inovatif',
    description: 'Bergabunglah dengan komunitas pembelajar dan pendidik kami yang dinamis. Ikuti klub, acara, dan diskusi.',
};

export default function CommunityPage() {
    return (
        <main className="bg-community-bg-light dark:bg-community-bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300 font-sans min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Stats />
            <WhyWeGather />
            <VideoTestimonials />
            {/* <ClubShowcase /> */}
            {/* <CommunityCalendar /> */}
            <CommunityLeader />
            <BeyondGraduation />
            <Footer />
        </main>
    );
}