"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './Hero';
import { CTA } from './CTA';
import { Newsletter } from './Newsletter';
import { PersonaFilter } from './PersonaFilter';
import { FeaturedStories } from './FeaturedStories';
import { stories, PersonaType } from '../_data/stories';

export function UserStoryContent() {
    const [activeFilter, setActiveFilter] = useState<PersonaType | 'all'>('all');

    return (
        <main className="bg-(--color-bg-light) dark:bg-[#0F1210] text-gray-800 dark:text-gray-200 antialiased transition-colors duration-300 font-sans min-h-screen flex flex-col">
            <Navbar />
            <Hero />

            <div className="container mx-auto px-6 mb-16 relative z-30">
                <PersonaFilter
                    stories={stories}
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />
            </div>

            <FeaturedStories
                stories={stories}
                activeFilter={activeFilter}
            />

            <CTA />
            <Newsletter />
            <Footer />
        </main>
    );
}