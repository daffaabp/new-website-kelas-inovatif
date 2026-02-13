import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface EventItem {
    id: number | string;
    date: string | Date;
    type: string;
    start_time: string;
    end_time: string;
    title: string;
    location: string;
    speaker_name: string;
}

interface EventListProps {
    events: EventItem[];
    meta?: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export function EventList({ events, meta }: EventListProps) {
    if (!events || events.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center text-gray-500">
                Tidak ada acara yang ditemukan.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

            {/* Desktop View: Card Layout */}
            <div className="hidden md:block space-y-4">
                {events.map((event) => {
                    const eventDate = new Date(event.date);
                    const day = eventDate.getDate();
                    const month = eventDate.toLocaleDateString('id-ID', { month: 'long' });
                    const year = eventDate.getFullYear();

                    // Event type badge colors matching reference design
                    let categoryColor = 'bg-gray-50 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 border-gray-100 dark:border-gray-700';

                    // Match specific event types from reference
                    if (event.type.includes('NOTEBOOKLM') || event.type.includes('SCISPACE') || event.type.includes('Workshop')) {
                        categoryColor = 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800';
                    } else if (event.type.includes('CURSOR') || event.type.includes('INTENSIF') || event.type.includes('Seminar')) {
                        categoryColor = 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800';
                    } else if (event.type.includes('WEBINAR') || event.type.includes('FREE')) {
                        categoryColor = 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800';
                    }

                    return (
                        <div
                            key={event.id}
                            className="group bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 p-0 overflow-hidden transition-all duration-300 flex flex-row"
                        >
                            {/* Date Sidebar */}
                            <div className="w-32 bg-gray-50 dark:bg-gray-800 flex flex-col items-center justify-start pt-8 gap-0 border-r border-gray-100 dark:border-gray-700">
                                <span className="text-3xl font-bold text-[#1e463a] dark:text-emerald-400">{day}</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">{month}</span>
                                    <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">{year}</span>
                                </div>
                                <div className="w-8 h-1 bg-gray-200 dark:bg-gray-600 rounded-full mt-4 mb-2"></div>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">
                                    {event.start_time} - {event.end_time}<br />WIB
                                </span>
                            </div>

                            {/* Event Details */}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${categoryColor}`}>
                                            {event.type}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#1e463a] dark:group-hover:text-emerald-400 transition-colors">
                                        <Link href={`/schedule/${event.id}`}>
                                            {event.title}
                                        </Link>
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                            </svg>
                                            <span>{event.speaker_name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Registration Button */}
                            <div className="p-6 pl-0 flex items-center justify-center">
                                <Link
                                    href={`/schedule/${event.id}`}
                                    className="px-6 py-3 rounded-xl border-2 border-[#1e463a] text-[#1e463a] dark:text-emerald-400 dark:border-emerald-400 font-semibold hover:bg-[#1e463a] hover:text-white dark:hover:bg-emerald-400 dark:hover:text-gray-900 transition-all duration-200 shadow-sm whitespace-nowrap"
                                >
                                    Daftar Sekarang
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Mobile View: Cards */}
            <div className="md:hidden space-y-4">
                {events.map((event) => {
                    const eventDate = new Date(event.date).toLocaleDateString('id-ID', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    });
                    let categoryColor = 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
                    if (event.type === 'Workshop') categoryColor = 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
                    if (event.type === 'Seminar') categoryColor = 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
                    if (event.type === 'Webinar') categoryColor = 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';

                    return (
                        <div key={event.id} className="bg-white dark:bg-[#1E1E1E] p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="flex justify-between items-start mb-3">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${categoryColor}`}>
                                    {event.type}
                                </span>
                                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded">
                                    {event.start_time} - {event.end_time} WIB
                                </span>
                            </div>

                            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                <Link href={`/schedule/${event.id}`}>
                                    {event.title}
                                </Link>
                            </h3>

                            <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="w-20 font-medium text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide">Tanggal</span>
                                    <span>{eventDate}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-20 font-medium text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide">Pembicara</span>
                                    <span>{event.speaker_name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-20 font-medium text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide">Lokasi</span>
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <Link
                                href={`/schedule/${event.id}`}
                                className="block w-full text-center text-sm font-bold bg-eduzin-dark text-white dark:bg-white dark:text-eduzin-dark py-3 rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Lihat Detail & Daftar
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            {meta && meta.totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 pt-8">
                    {meta.page > 1 ? (
                        <Link
                            href={`/schedule?page=${meta.page - 1}`}
                            className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow-sm"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </Link>
                    ) : (
                        <button disabled className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm cursor-not-allowed">
                            <ChevronLeft className="w-4 h-4" />
                            Sebelumnya
                        </button>
                    )}

                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Halaman {meta.page} dari {meta.totalPages}
                    </span>

                    {meta.page < meta.totalPages ? (
                        <Link
                            href={`/schedule?page=${meta.page + 1}`}
                            className="bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center gap-2 shadow-sm"
                        >
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    ) : (
                        <button disabled className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-sm cursor-not-allowed">
                            Selanjutnya
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
