import React from 'react';
import { Navbar } from '@/components/commons/Navbar';
import { Footer } from '@/components/commons/Footer';
import { Hero } from './_components/Hero';
import { HighlightedEvent } from './_components/HighlightedEvent';
import { EventList } from './_components/EventList';
import { getSchedules } from '@/app/actions/schedule';

import type { Metadata } from 'next';


export async function generateMetadata(
    props: { searchParams: Promise<{ page?: string; type?: string; month?: string; year?: string }> }
): Promise<Metadata> {
    const searchParams = await props.searchParams;
    const type = searchParams.type || 'All';

    let title = 'Jadwal - Kelas Inovatif';
    let description = 'Lihat kelas, acara, dan workshop yang akan datang. Rencanakan perjalanan pembelajaran Anda dengan jadwal interaktif kami.';

    if (type !== 'All') {
        title = `Jadwal ${type} - Kelas Inovatif`;
        description = `Temukan jadwal ${type} terbaru di Kelas Inovatif. Bergabunglah dengan sesi-sesi inspiratif kami.`;
    }

    return {
        title: title,
        description: description,
    };
}


export default async function SchedulePage(props: { searchParams: Promise<{ page?: string; type?: string; month?: string; year?: string }> }) {
    const searchParams = await props.searchParams;
    const page = Number(searchParams.page) || 1;
    const type = typeof searchParams.type === 'string' ? searchParams.type : 'All';

    // Parse month and year from URL
    const currentDate = new Date();
    const month = searchParams.month ? Number(searchParams.month) : currentDate.getMonth() + 1;
    const year = searchParams.year ? Number(searchParams.year) : currentDate.getFullYear();

    const { data: schedules, meta } = await getSchedules(page, 6, type, month, year);

    // Highlight first event of first page only, or logic could change. 
    // For now let's just highlight the first event of the fetched set if on page 1?
    // Or maybe keep highlighting separate? 
    // Let's assume highlighted event is just the first one of the current list for now, 
    // or we could fetch a specific featured event separately. 
    // Given the previous code: `const highlightedEvent = schedules.length > 0 ? schedules[0] : undefined;`
    // We will keep similar logic.

    const highlightedEvent = schedules.length > 0 ? schedules[0] : undefined;

    return (
        <main className="bg-schedule-bg-light dark:bg-schedule-bg-dark text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen">
            <Navbar />
            <Hero currentType={type} />
            {/* <HighlightedEvent event={highlightedEvent} /> */}
            <EventList events={schedules} meta={meta} />
            <Footer />
        </main>
    );
}